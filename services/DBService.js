var MongoClient=require('mongodb').MongoClient;

exports.createConnection=function(){
  MongoClient.connect("mongodb://admin:admin@ds111138.mlab.com:11138/projector18").then(function(client){
    console.log("Connected to mongodb");
    exports.database=client.db("projector18");
    //console.log(database);
  });

}
