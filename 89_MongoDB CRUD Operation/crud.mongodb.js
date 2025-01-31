// CRUD Operation
use("CrudDB")

db.createCollection("courses")

// db.courses.insertOne({
//     "name": "Bimal Web Dev free course",
//     "price":0,
//     "assignment": 12,
//     "projeect":45
// })

// READ
// let a = db.courses.find({ price: 0 })
// console.log(a);

// console.log(a.toArray())

// let b = db.courses.findOne({price:0})
// console.log(b)

// UPDATE
// db.courses.updateOne({price:0}, {$set:{price:100}})

// db.courses.updateMany({assignment:12},{$set:{assignment:22}})

// DELETE
// db.courses.deleteOne({price:100})
// db.courses.find({assignment:10})
db.courses.deleteMany({price:0})