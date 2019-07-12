const axios = require("axios");
var FormData = require("form-data");
const BASE_URL = "http://localhost:9000/api/";

const fetch = require("node-fetch");



  //Creating a project in sonarqube

  async function createProject(projectName, projectKey){
    var bodyFormData = new FormData();
    bodyFormData.append("name", projectName);
    bodyFormData.append("project", projectKey);

    
     var response =   await fetch("http://localhost:9000/api/projects/create", {
            method: "post",
            body:bodyFormData // or "public" to immediately publish
   });
   const messageData = await response.json();
   // the API frequently returns 201
   if ((response.status !== 200) && (response.status !== 201)) {
       //console.error(`Invalid response status ${ response.status }.`);
       throw messageData;
   }else{
      // console.log(response.body)
   }


  }
 async function fetchResults(projectKey){
    
      try {
        const thatThing = await axios.get("http://localhost:9000/api/issues/search", {
            params: {
                componentKeys: projectKey
            }
          });
         
        return ((thatThing.data));
    } catch(err){
        console.error(err);
    }
    //   .then(function (response) {
    //     console.log(response);
    //     return response;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     return response;
    //   })
    //   .then(function () {
    //     // always executed
    //   });  
    
  }
  

function runScan(fileName){
    const { exec } = require("child_process");
    exec("cd extracted/" +fileName +" && sonar-scanner", (err, stdout, stderr) => {
      if (err) {
        console.log(`stdout: ${err}`);
        return;
      }
    
      // the *entire* stdout and stderr (buffered)
    //   console.log(`stdout: ${stdout}`);
    //   console.log(`stderr: ${stderr}`);
    });
}

  module.exports = {
    createProject: createProject,
    runScan : runScan,
    fetchResults,
    bar: function () {
      // whatever
    }
  };