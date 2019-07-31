const projectModel = require('../models/projects');
module.exports = {
 getById: function(req, res, next) {
 // console.log(req.body);
  projectModel.findById(req.params.projectId, function(err, projectInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "Project found!!!", data:{project: projectInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let projectList = [];
  projectModel.find({}, function(err, projects){
   if (err){ 
    next(err);
   } else{
    for (let project of projects) {
     projectList.push({id: project._id, name: project.name, released_on: project.released_on});
    }
    res.json({status:"success", message: "projects list found!!!", data:{projects: projectList}});
       
   }
}); 
 },
updateById: function(req, res, next) {
    projectModel.findByIdAndUpdate(req.params.projectId,{name:req.body.name}, function(err, projectInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "Project updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
    projectModel.findByIdAndRemove(req.params.projectId, function(err, projectInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "Project deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
    projectModel.create({ name: req.body.name, created_on: req.body.created_on }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Project added successfully!!!", data: null});
      
    });
 },
}