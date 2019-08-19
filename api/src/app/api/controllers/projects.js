const projectModel = require("../models/projects");

function extractFiles(Inputfile, extractToDirectory, filename) {
  fs.createReadStream(Inputfile).pipe(
    unzip.Extract({
      path: extractToDirectory
    })
  );
}

module.exports = {
  getById: function(req, res, next) {
    projectModel.findById(req.params.projectId, function(err, projectInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "Project found!!!",
          data: { project: projectInfo }
        });
      }
    });
  },
  getAll: function(req, res, next) {
    let projectList = [];
    projectModel.find({}, function(err, projects) {
      if (err) {
        next(err);
      } else {
        for (let project of projects) {
          projectList.push({
            id: project._id,
            name: project.name,
            released_on: project.released_on
          });
        }
        res.json({
          status: "success",
          message: "projects list found!!!",
          data: { projects: projectList }
        });
      }
    });
  },
  updateById: function(req, res, next) {
    projectModel.findByIdAndUpdate(
      req.params.projectId,
      { name: req.body.name },
      function(err, projectInfo) {
        if (err) next(err);
        else {
          res.json({
            status: "success",
            message: "Project updated successfully!!!",
            data: null
          });
        }
      }
    );
  },
  deleteById: function(req, res, next) {
    projectModel.findByIdAndRemove(req.params.projectId, function(
      err,
      projectInfo
    ) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "Project deleted successfully!!!",
          data: null
        });
      }
    });
  },
  create: function(req, res, next) {
    projectModel.create(
      { name: req.body.name, created_on: req.body.created_on },
      function(err, result) {
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "Project added successfully!!!",
            data: null
          });
      }
    );
  },
  uploadCode: function(req, res, next) {
    upload(req, res, function(err) {
      if (req.file.mimetype != "application/zip") {
        res.end("Please upload a ZIP file");
      }
      var fileName = req.file.filename.toString();

      if (err) {
        return res.end("Error uploading file.");
      }
      var extractToDirectory = path.join(
        __dirname,
        "..",
        "extracted",
        fileName
      );
      var inputFileName = path.join(__dirname, "..", "uploads");

      //Extracting the file from the uploaded zip
      extractFiles(
        inputFileName + "/" + fileName,
        extractToDirectory,
        fileName
      );

      res.end(
        JSON.stringify({
          STATUS: "SUCCESS",
          FILE_NAME: req.file.filename
        })
      );
      project.createProject(req.file.filename, req.file.filename);
    });

    projectModel.create(
      { name: req.body.name, created_on: req.body.created_on },
      function(err, result) {
        if (err) next(err);
        else
          res.json({
            status: "success",
            message: "Project added successfully!!!",
            data: null
          });
      }
    );
  }
};
