
const mongoose = require("mongoose")

async function test() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB")
    const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required :true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String
    });

    const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
    })

    const Person = mongoose.model("Person", personSchema);
    const Fruit = mongoose.model("Fruit", fruitSchema);

    const fruit_pine = new Fruit( {
    name: "pineapple",
    rating: 9,
    review:" decent goodsz"
    })

    const raspberry = new Fruit( {
    name: "raspberry",
    rating: 10,
    review:" da best"
    })

    // raspberry.save();

    // const person  = new Person({
    //     name: "amy",
    //     age: 12,
    //     favoriteFruit: fruit_pine
    // })
    // person.save();
    // person.save();


    // const fruit = new Fruit( {
    //     name: "Peach",
    //     rating: 10,
    //     review:" goodsz"
    // })



    // fruit.save(function(err){
    //     console.log(err);
    //     // mongoose.connection.close(function(err) {
    //     //     console.log("save success");
    //     //     process.exit(0)
    //     // })
    // })

    const x = await Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        fruits.forEach(element => {
            console.log(element.name);
        });
        // mongoose.connection.close(function(err) {
        //     process.exit(0)
        // })
        // mongoose.connection.close(function () {
        //     console.log('Mongoose disconnected on app termination');
        //     process.exit(0);
        //   });
    }
    })

    mongoose.connection.close();
}
test()

// Person.updateOne({name:"John"}, {favoriteFruit: raspberry}, function(err) {
//     if (err)
//     {
//         console.log(err);
//     } else {
//         console.log("succes");
//     }
// });

// Fruit.deleteOne({name: "Peach"}, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Success delete");
//         mongoose.connection.close(function () {
//             console.log('Mongoose disconnected on app termination');
//             process.exit(0);
//         });
//     }
// })
// async function close() {
//     await mongoose.connection.close()
// }
// close()


  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(fruits)
      callback(fruits);
    });
  }