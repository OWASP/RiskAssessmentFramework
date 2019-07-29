// importing the dependencies



const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const {addUser, getUser, deleteUser, updateUser} = require("./database/users");
var multer  =   require("multer");
var project = require("./sonarqube/callAPI");
var upload2 = multer({ dest: "uploads/"});
var _file = "";
var storage =   multer.diskStorage({
  // file upload destination
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    _file = file.fieldname + "-" + Date.now();
    
    callback(null, _file);
    
    
  },
});
var upload = multer({ storage : storage}).single("file");

var type = upload2.single("file"); 

var unzip = require("unzip");
var fs = require("fs"); 




const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

const projects = require("../routes/projects") ;
const users = require("../routes/users"); 
const mongoose = require("../config/database"); //database configuration
var jwt = require("jsonwebtoken");
app.set("secretKey", "nodeRestApi"); // jwt secret token
// connection to mongodb
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection error:"));

// public route
app.use("/users", users);
// private route
app.use("/projects", validateUser, projects);
app.get("/favicon.ico", function(req, res) {
    res.sendStatus(204);
});
function validateUser(req, res, next) {
  jwt.verify(req.headers["x-access-token"], req.app.get("secretKey"), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
  
}

app.post("/upload/code",type,function(req,res){

  upload(req,res,function(err) {

    if(req.file.mimetype != "application/zip"){
      res.end("Please upload a ZIP file");
      
    }

    var fileName = req.file.filename.toString();

    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
      if(err) {
          return res.end("Error uploading file.");
      }
      var extractToDirectory = path.join(__dirname, "..", "extracted", fileName);
      var inputFileName = path.join(__dirname, "..", "uploads");

      //Extracting the file from the uploaded zip
      extractFiles(inputFileName +"/" +fileName, extractToDirectory,fileName);

     // project.runScan(req.file.filename);



      //Writing the sonar properties file 
      
    
      // fs.writeFile("./files/sonar-project.properties", sonarscanner_config, (err) => {
      //   console.log(extractToDirectory +"/sonar-project.properties")
      //   if (err) console.log(err);
      //   console.log("Successfully Written Sonar Qube project properties.");
      // });
      
    
      res.end(JSON.stringify({"STATUS" : "SUCCESS",
              "FILE_NAME" : req.file.filename
        } ));
        project.createProject(req.file.filename, req.file.filename);


  });
});
// express doesn"t consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function(req, res, next) {
 let err = new Error("Not Found");
 console.log(req);
    err.status = 404;
    next(err);
});
// handle errors
app.use(function(err, req, res, next) {
 console.log(err);
 
  if(err.status === 404)
   res.status(404).json({message: "Not found"});
  else 
    res.status(500).json({message: "Something looks wrong :( !!!"});
});











function extractFiles(Inputfile, extractToDirectory,filename){
  
 fs.createReadStream(Inputfile)
  .pipe(unzip.Extract({
    path: extractToDirectory 
  }));

  //writeSonarProp(filename);
}










// defining the Express app

// defining an array to work as the database (temporary solution)
const ads = [
  {title: "Hello, world (again)!"}
];


// adding Helmet to enhance your API security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects

// enabling CORS for all requests

// adding morgan to log HTTP requests
app.use(morgan("dev"));


// ... leave the app definition and the middleware config untouched ...

app.post("/", async (req, res) => {
    const newAd = req.body;
    await   addUser(newAd);
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




function writeSonarProp(filename){
  
  var sonarscanner_config = "sonar.projectKey="+filename;
  fs.open("./extracted/"+filename+"/sonar-project.properties", "wx", (err, desc) => {
    if(!err && desc) {
       fs.writeFile(desc, sonarscanner_config, (err) => {
         // Rest of your code
         if (err) throw err;               
         console.log("Results Received");
       })
    }
  });
}

app.get("/scan/:id",(req,res)=>{
  
  var fileName = req.params.id.toString();

  res.send("Scan Started on " + fileName);
  writeSonarProp(fileName);
  project.runScan(fileName);
  res.end("Scan Complete on ", fileName);
  
})


app.get("/getResults/:id", async  (req,res) => {

res.setHeader("Content-Type", "application/json");
  var result = "NOTHING";
result =  await  project.fetchResults(req.params.id);
// console.log("====================================");
// console.log(result);
// console.log("====================================");
res.end((JSON.stringify(result)));
   
 // res.send("Result for projectKey -  " + req.params.id+ "/n" + JSON.stringify(project.fetchResults(req.params.id)));
  
})


// start the in-memory MongoDB instance
// startDatabase().then(async () => {
//   await addUser({message: "WELCOME TO OWASP RISK ASSESSMENT FRAMEWORK API"});


// starting the server
app.listen(3000, () => {
  console.log("listening on port 3000");
});
