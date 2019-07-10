// importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const {startDatabase} = require("./database/mongo");
const {addUser, getUser, deleteUser, updateUser} = require("./database/users");
var multer  =   require('multer');

var upload2 = multer({ dest: 'uploads/'});

var storage =   multer.diskStorage({
  // file upload destination
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage}).single('code');
var type = upload2.single('code');

const app = express();


app.post('/upload/code',type,function(req,res){

    upload(req,res,function(err) {
      if(req.file.mimetype === 'application/zip'){
        console.log("THIS IS A ZIPFILE");
        
      }else{
        console.log("THIS IS NOT A ZIPFILE");
        res.end("Please upload a ZIP file")


      }


      // req.file is the `avatar` file
      // req.body will hold the text fields, if there were any
        if(err) {
            return res.end("Error uploading file.");
        }
   
        res.end("File is uploaded");

    });
});


// defining the Express app

// defining an array to work as the database (temporary solution)
const ads = [
  {title: "Hello, world (again)!"}
];

// adding Helmet to enhance your API security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));


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

// start the in-memory MongoDB instance
startDatabase().then(async () => {
  await addUser({title: "Hello, now from database!"});


// starting the server
app.listen(3000, () => {
  //console.log("listening on port 3000");
});
});