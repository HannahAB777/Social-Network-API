const express = require('express');
// Run npm install mongodb and require mongodb and MongoClient class
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;
//api.users 


//get all users
app.get('/users', (req, res) => {
    
    db.collection('userCollection')
      .find()
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
  });
  

//get a single user by its _id and populated thoughts and data

app.get('/users/:id/:thoughts', (req, res) => {

    User.findOne({ _id: req.params.userId })
    .select('-__v')
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
})

//post a new user

//put to update a user by its id


//delete to remove a user by its _id


//bonus remove a users associated thoughts when deleted







//api/users/:userId/friends/:friendsId

//post to add a new friend to a users friends list

//delete to remove a friend from a users friend list