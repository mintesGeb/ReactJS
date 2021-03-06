const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");
let _db;

let mongoConnect = (callback) => {
  MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
    .then((client) => {
      _db = client.db("testDB2");
      callback();
    })
    .catch((err) => console.log(err));
};

function getDB() {
  if (_db) {
    return _db;
  } else {
    throw new Error("Cannot get DB");
  }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
exports.ObjectId = ObjectId;
