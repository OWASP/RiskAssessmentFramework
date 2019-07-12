// importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const {startDatabase} = require("./database/mongo");
const {addUser, getUser, deleteUser, updateUser} = require("./database/users");
var multer  =   require("multer");
var project = require('./sonarqube/callAPI');
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
var upload = multer({ storage : storage}).single("code");

var type = upload2.single("code");

var unzip = require("unzip");
var fs = require("fs");




const app = express();




function extractFiles(Inputfile, extractToDirectory,filename){
 fs.createReadStream(Inputfile)
  .pipe(unzip.Extract({
    path: extractToDirectory 
  }));

  //writeSonarProp(filename);
}



app.post("/upload/code",type,function(req,res){

    upload(req,res,function(err) {

      if(req.file.mimetype != "application/zip"){
        res.end("Please upload a ZIP file")
        
      }


      // req.file is the `avatar` file
      // req.body will hold the text fields, if there were any
        if(err) {
            return res.end("Error uploading file.");
        }
        var extractToDirectory = path.join(__dirname, "..", "extracted", req.file.filename);
        var inputFileName = path.join(__dirname, "..", "uploads");

        //Extracting the file from the uploaded zip
        extractFiles(inputFileName +"/" +req.file.filename, extractToDirectory,req.file.filename);

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


        

    }
    
    
    );
    
});


function writeSonarProp(filename){
  var sonarscanner_config = "sonar.projectKey="+filename;

  fs.open("./extracted/"+filename+"/sonar-project.properties", 'wx', (err, desc) => {
    if(!err && desc) {
       fs.writeFile(desc, sonarscanner_config, (err) => {
         // Rest of your code
         if (err) throw err;               
         console.log('Results Received');
       })
    }
  });
}



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


app.get("/scan/:id",(req,res)=>{
  
  writeSonarProp(req.params.id)
  project.runScan(req.params.id);
  res.send("Scan Started on " + req.params.id);
  
})


// start the in-memory MongoDB instance
startDatabase().then(async () => {
  await addUser({title: "Hello, now from database!"});


// starting the server
app.listen(3000, () => {
  //console.log("listening on port 3000");
});
});