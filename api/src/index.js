const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const {
  addUser,
  getUser,
  deleteUser,
  updateUser
} = require("./database/users");
var multer = require("multer");
var project = require("./sonarqube/callAPI");
var upload2 = multer({ dest: "uploads/" });
var _file = "";
var storage = multer.diskStorage({
  // file upload destination
  destination: function(req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function(req, file, callback) {
    _file = file.fieldname + "-" + Date.now();

    callback(null, _file);
  }
});
var upload = multer({ storage: storage }).single("file");

var type = upload2.single("file");

var unzip = require("unzipper");
var fs = require("fs");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

const projects = require("../routes/projects");
const users = require("../routes/users");
const mongoose = require("../config/database"); //database configuration
var jwt = require("jsonwebtoken");
app.set("secretKey", "nodeRestApi"); // jwt secret token

// connection to mongodb
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// public route
app.use("/users", users);
// private route
app.use("/projects", validateUser, projects);
app.get("/favicon.ico", function(req, res) {
  res.sendStatus(204);
});
function validateUser(req, res, next) {
  jwt.verify(req.headers["x-access-token"], req.app.get("secretKey"), function(
    err,
    decoded
  ) {
    if (err) {
      res.json({ status: "error", message: err.message, data: null });
    } else {
      req.body.userId = decoded.id;
      next();
    }
  });
}

app.post("/upload/code", type, function(req, res) {
  upload(req, res, function(err) {
    var fileName = req.file.filename.toString();

    if (err) {
      return res.end("Error uploading file.");
    }
    var extractToDirectory = path.join(__dirname, "..", "projects", fileName);
    var inputFileName = path.join(__dirname, "..", "uploads");

    extractFiles(inputFileName + "/" + fileName, extractToDirectory, fileName);

    console.log("FILE UPLOAD SUCCESS");
    res.end(
      JSON.stringify({ STATUS: "SUCCESS", FILE_NAME: req.file.filename })
    );
    project.createProject(req.file.filename, req.file.filename);
    console.log("PROJECT CREATED SUCCESSFULLY");
  });
});

function extractFiles(Inputfile, extractToDirectory, filename) {
  fs.createReadStream(Inputfile).pipe(
    unzip.Extract({
      path: extractToDirectory
    })
  );
  console.log("FILE EXTRACTED SUCCESSFULLY");
}

// adding Helmet to enhance your API security
app.use(helmet());

// adding morgan to log HTTP requests
app.use(morgan("dev"));

app.post("/", async (req, res) => {
  const newAd = req.body;
  await addUser(newAd);
  res.send({ message: "New user added." + req.body });
});

// endpoint to delete an ad
app.delete("/:id", async (req, res) => {
  await deleteUser(req.params.id);
  res.send({ message: "User removed." });
});

// endpoint to update an ad
app.put("/:id", async (req, res) => {
  const updatedAd = req.body;
  //console.log("id is " + req.params.id);
  await updateUser(req.params.id.toString(), updatedAd);
  res.send({ message: "User updated." });
});
// replace the endpoint responsible for the GET requests
app.get("/", async (req, res) => {
  res.send(await getUser());
});

function writeSonarProp(filename) {
  var sonarscanner_config = "sonar.projectKey=" + filename;
  fs.open(
    "./projects/" + filename + "/sonar-project.properties",
    "wx",
    (err, desc) => {
      if (!err && desc) {
        fs.writeFile(desc, sonarscanner_config, err => {
          if (err) throw err;
          console.log("Results Received");
        });
      }
    }
  );
}

app.get("/scan/:id", (req, res) => {
  var fileName = req.params.id.trim().toString();

  writeSonarProp(fileName);
  project.runScan(fileName, resp => {
    res.status(200).send({ status: 200, data: resp });
  });
});

app.get("/getResults/:id", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  var result = "NOTHING";
  result = await project.fetchResults(req.params.id);
  res.end(JSON.stringify(result));
});
app.get("/getResults", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  var result = "NOTHING";
  result = await project.fetchResults(" ");
  res.end(JSON.stringify(result));
});

// handle errors
app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  console.log(err);

  if (err.status === 404) res.status(404).json({ message: "Not found" });
  else res.status(500).json({ message: "Something looks wrong :( !!!" });
});

// starting the server
app.listen(3000, () => {
  console.log("listening on port 3000");
});
