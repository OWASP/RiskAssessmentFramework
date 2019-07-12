const axios = require("axios");
var FormData = require('form-data');
const BASE_URL = "http://localhost:9000/api/";

const fetch = require("node-fetch");

// axios.post(BASE_URL + "projects/create",{
    
// }, function(req, res){

// })
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });





  //Creating a project in sonarqube

  async function createProject(projectName, projectKey){
    var bodyFormData = new FormData();
    bodyFormData.append('name', projectName);
    bodyFormData.append('project', projectKey);

// axios.post(BASE_URL + "projects/create",
//     bodyFormData
// , function(req, res){

// })
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });




    
     var response =   await fetch('http://localhost:9000/api/projects/create', {
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
  

function runScan(fileName){
    const { exec } = require('child_process');
    exec("cd extracted/" +fileName +" && sonar-scanner", (err, stdout, stderr) => {
      if (err) {
        console.log(`stdout: ${err}`);
        return;
      }
    
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });



}

  module.exports = {
    createProject: createProject,
    runScan : runScan,
    bar: function () {
      // whatever
    }
  };