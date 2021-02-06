// CRUD -- create read update and delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID


//object destructuring (shorthand for the above code)
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id.length)
// console.log(id.getTimestamp())
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error) {
      return console.log('Unable to connect to database!')
    } 

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Abhinaba',
    //     age: 20
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Rajdeep', 
    //         age: 21
    //     }, {
    //         name: 'Sayantan',
    //         age: 20
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     }, {
    //         description: 'Renew inspection', 
    //         completed: false
    //     }, {
    //         description: 'Pot plants', 
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return cosole.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })
})
