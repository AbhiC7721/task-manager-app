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

    // db.collection('users').findOne({_id: new ObjectID ("6016d7b7f7213ef88d6fecf2")}, (error, user) => {
    //   if(error) {
    //     console.log('Unable to fetch')
    //   }

    //   console.log(user)
    // })

  //   db.collection('users').find({ age:20 }).toArray((error, users)=> {
  //       console.log(users)
  //   })

  //   db.collection('users').find({ age:20 }).count((error, count)=> {
  //     console.log(count)
  // })

  db.collection('tasks').findOne({_id: new ObjectID("6016df67e9a80506934ea469")}, (error, task) => {
    if(error) {
      console.log('Ubable to fetch')
    }

    console.log(task)
  })

  db.collection('tasks').find({ completed:false }).toArray((error, tasks)=> {
          console.log(tasks)
  })
  

  })
