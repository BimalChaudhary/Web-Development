use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  {
    "_id": ObjectId("67927c6f8f632409344bf8af"),
    "name": "Java",
    "price": 20000,
    "instructor": "Bimal"
  },
  {
    "_id": ObjectId("67927c6f8f632409344bf8b0"),
    "name": "Python",
    "price": 18000,
    "instructor": "Anita"
  },
  {
    "_id": ObjectId("67927c6f8f632409344bf8b1"),
    "name": "C++",
    "price": 15000,
    "instructor": "Rahul"
  },
  {
    "_id": ObjectId("67927c6f8f632409344bf8b2"),
    "name": "JavaScript",
    "price": 22000,
    "instructor": "Kiran"
  },
  {
    "_id": ObjectId("67927c6f8f632409344bf8b3"),
    "name": "HTML & CSS",
    "price": 10000,
    "instructor": "Priya"
  },
  {
    "_id": ObjectId("67927c6f8f632409344bf8b4"),
    "name": "Data Science",
    "price": 30000,
    "instructor": "Vikram"
  },
  {
    "_id": ObjectId("67927c6f8f632409344bf8b5"),
    "name": "Machine Learning",
    "price": 35000,
    "instructor": "Sonia"
  },
  {
    "_id": ObjectId("67927c6f8f632409344bf8b6"),
    "name": "SQL",
    "price": 12000,
    "instructor": "Rajesh"
  },
  {
    "_id": ObjectId("67927c6f8f632409344bf8b7"),
    "name": "DevOps",
    "price": 25000,
    "instructor": "Neha"
  },
  {
    "_id": ObjectId("67927c6f8f632409344bf8b8"),
    "name": "Cloud Computing",
    "price": 28000,
    "instructor": "Arjun"
  }
]);

// Print a message to the output window.
print("Done inserting data");
