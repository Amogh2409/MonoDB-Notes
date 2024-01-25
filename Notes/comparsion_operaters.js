// Comparision Operators in MongoDB

//? 1 $eq: Matches values that are equal to the specified value.
// db.products.find({'price': {$eq:699}})

//? 2: $ne: Matches values that are not equal to the specified value.
// db.products.find({'price': {$ne:699}}).count()

// 3: $gt: Matches values that are greater than the specified value.
// db.products.find({'price': {$gt:699}})

// 4: $gte: Matches values that are greater than or equal to the specified value.
// db.products.find({'price': {$gte:699}})

// 5: $lt: Matches values that are less than the specified value.
// db.products.find({'price': {$lt:699}})

// 6: $lte: Matches values that are less than or equal to the specified value.
// Find products with price less than or equal to 699


// db.products.find({'price': {$lte:699}})

// db.Sample.find({'price': {$gt:600}})

// db.Sample.find({'price': {$gtE:600}})

// db.Sample.find({'price': {$lt:600}})

// db.Sample.find({'price': {$ltE:600}})

// db.Sample.find({'price': {$in:[600,700]}})
// db.Sample.find({'price': 129, 'price':39})



// db.Sample.find({'price': {$ne:600}})

// db.Sample.find({'price': {$eq:600}})
