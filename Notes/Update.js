// Updating Values in mongoDB

// Update One
// db.name.updateOne(
//     ... {
//     ... _id: 2},
//     ... {$set: {name: 'Amogh'}}
//     ... )


// Update Many field
// db.Sample.updateOne(
//     ... { _id: ObjectId('64c236a2e32f4a51b19b9282')},
//     ... {$set: {
//     ... name: 'Outdoor Game Set',
//     ... price: '12990',
//     ... }}
//     ... )


// Rename a field
//db.collectionName.updateOne(
    //     { _id: ObjectId("12345") },
    //     { $rename: { oldFieldName: "newFieldName" } }
    //   );


//* Adding a new field in a document
// db.collectionName.updateOne(
//     { _id: ObjectId("12345") },
//     { $set: { newField: "new value" } }
//   );


//* Removing or Deleting the Field in a document
// To remove a field from documents in MongoDB, you can use the $unset update operator.
// db.collectionName.updateOne(
//     { _id: ObjectId("12345") },
//     { $unset: { fieldName: 1 } }
//   );


// The following operators can be used to update fields:

// $currentDate: Sets the field value to the current date
// $inc: Increments the field value
// $rename: Renames the field
// $set: Sets the value of a field
// $unset: Removes the field from the document

// The following operators assist with updating arrays.

// $addToSet: Adds distinct elements to an array
// $pop: Removes the first or last element of an array
// $pull: Removes all elements from an array that match the query
// $push: Adds an element to an array