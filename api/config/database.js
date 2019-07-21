//Set up mongoose connection
    const mongoose = require('mongoose');
    const MongoClient = require("mongodb").MongoClient;
    const mongoDB = 'mongodb+srv://azhar001:azhar001@raf-ejf62.gcp.mongodb.net/test?retryWrites=true&w=majority';
    var database, collection;
    mongoose.connect(mongoDB, {useNewUrlParser: true, dbName: "RAF"});
    MongoClient.connect(mongoDB, {useNewUrlParser: true},function (err,client){
        if(err) {
            //console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
       }
       console.log('Connected...');
       //collection = client.db("test").collection("devices");
       // perform actions on the collection object
       database = client.db("RAF");
        collection = database.collection("people");
        console.log("Connected to `" + "database" + "`!");
      //  console.log(collection);
        
       client.close();
    });
   
    mongoose.Promise = global.Promise;


    // const MongoClient = require("mongodb").MongoClient;
    // const uri = "mongodb+srv://azhar001:<password>@raf-ejf62.gcp.mongodb.net/test?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true });
    // client.connect(err => {
    //   const collection = client.db("test").collection("devices");
    //   // perform actions on the collection object
    //   client.close();
    // });
module.exports = mongoose; 
