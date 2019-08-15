const axios = require("axios");
var FormData = require("form-data");
const BASE_URL = "http://localhost:9000/api/";
var _ = require("underscore");


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


  function classifyResult(arr) {
      var a = [], b = [], prev;
      var clasObj;
      
      arr.sort();
      for ( var i = 0; i < arr.length; i++ ) {
          if ( arr[i] !== prev ) {
              a.push(arr[i]);
              b.push(1);
          } else {
              b[b.length-1]++;
          }
          prev = arr[i];
      }
      
clasObj = a.map( function(x, i){
  return {"type": x, "issues": b[i]}        
}.bind(this));
      return clasObj;
  }
  

 async function fetchResults(projectKey){
    
      try {
        const issues = await axios.get("http://localhost:9000/api/issues/search", {
            params: {
                componentKeys: projectKey
            }
          });
          //TODO : Project status from sonarQube
          // const project_status = await axios.get("http://localhost:9000/api/qualitygates/project_status", {
          //     params: {
          //       projectKey: projectKey
          //     }
          //   });
        
          var tags = [];
          if(issues.data){
            for(var issue in issues.data.issues){
              tags.push(issues.data.issues[issue].tags);
                 }
          }
    

       var merged = _.flatten(tags);
    
        return (classifyResult(merged));
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
  

function runScan(fileName, callback){

  var child_process = require("child_process").exec("cd projects/" +fileName +" && sonar-scanner", (err, stdout, stderr) => {
    if (err) {
      console.log(`stdout: ${err}`);
      return;
    }

  });

  child_process.stdout.pipe(process.stdout);
  child_process.on("exit", (exitCode)=>{
    if(parseInt(exitCode) === 0){
      callback("SCAN COMPLETED SUCCESSFULLY");
    }else {
     callback(-1);
    }
  })
  
}

  module.exports = {
    createProject: createProject,
    runScan : runScan,
    fetchResults,
    bar: function () {
      // whatever
    }
  };