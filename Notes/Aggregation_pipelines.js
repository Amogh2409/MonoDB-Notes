// db.posts.aggregate([
//   // Stage 1: Only find documents that have more than 1 like
//   {
//     $match: { likes: { $gt: 1 } }
//   },
//   // Stage 2: Group documents by category and sum each categories likes
//   {
//     $group: { _id: "$category", totalLikes: { $sum: "$likes" } }
//   }
// ])


//? Retrieve all products with a name = Sleek Wooden Tuna.

// db.products.aggregate([
//     {
//       $match: {
//         'name':'Sleek Wooden Tuna'
//       }
//     }
//   ])


// group by category and sum the price of each category
//  {
//   $group:
//     {
//       _id: <expression>, // Group key
//       <field1>: { <accumulator1> : <expression1> },
//       ...
//     }
//  }

// avg price of each category

// db.products.aggregate([
//     {
//       $group: {
//         _id: "$category",
//         avgPrice: { $avg: "$price" }
//       }



// Sort the documents by price in descending order
// db.products.aggregate([
//     { $match: { price: { $gt: 1200 } } },
//     {
//       $group: {
//         _id: "$category",
//         totalPrice: { $sum: "$price" },
//       },
//     },
//     { $sort: { totalPrice: 1 } },
//   ]);