const { getDatabase } = require("./mongo");
const { ObjectID } = require("mongodb");

const collectionName = "users";

async function addUser(user) {
  const database = await getDatabase();
  const { insertedId } = await database
    .collection(collectionName)
    .insertOne(user);
  return insertedId;
}

async function getUser() {
  const database = await getDatabase();
  return await database
    .collection(collectionName)
    .find({})
    .toArray();
}

async function deleteUser(id) {
  const database = await getDatabase();
  await database.collection(collectionName).deleteOne({
    _id: new ObjectID(id)
  });
}

async function updateUser(id, user) {
  const database = await getDatabase();
  delete user._id;
  await database.collection(collectionName).updateOne(
    { _id: new ObjectID(id) },
    {
      $set: {
        ...user
      }
    }
  );
}

module.exports = {
  addUser,
  getUser,
  deleteUser,
  updateUser
};
