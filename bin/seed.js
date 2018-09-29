mongoose.connect('mongodb://localhost/i-Track');


// User Seed Info ------------------------
const UserModel = require('../models/user-model.js');

const userListArray = [{
    "title": "Mr.",
    "firstName": "John",
    "lastName": "Johnson",
    "email": "johnjohnson@browardschools.com",
    "encryptedPassword": "",
  },
  {
    "title": "Mrs.",
    "firstName": "Sue",
    "lastName": "Smith",
    "email": "suesmith@browardschools.com",
    "encryptedPassword": "",
  }
];

UserModel.create(
  userListArray, //1st Argument -> array of users info objects
  (err, usersResults) => { //2nd Argument -> callback!
    if (err) {
      console.log('No Users for you! DataBase Error.');
      console.log(err);
      return; //early return
    }

    usersResults.forEach((user) => {
      console.log('New User!!! ' + user.firstName);
    });
  }
); //create new instances and save using teacher objects
