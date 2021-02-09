// CRUD -- create read update and delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID


//object destructuring (shorthand for the above code)
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error) {
      return console.log('Unable to connect to database!')
    } 

    const db = client.db(databaseName)

   db.collection('users').updateOne({
      _id: new ObjectID("60192eb5dca8dd874a475e84")      
    }, {
      $inc: {
        age: 1
      }
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })

  })
