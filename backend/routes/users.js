const router = require('express').Router();
let User = require('../models/user.model');
//const ObjectId = require('mongodb').ObjectId; 


//Adding a User
router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const student_name = req.body.student_name;
    const student_number = req.body.student_number;
    const student_age = req.body.student_age;

    const newUser = User({_id, student_name, student_number, student_age});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    
});

//Get all the students
router.route('/getStudents').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Get student by ID
router.route('/getStudent/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;

















/*
//Deleting a User
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.stuId)
        .then(() => res.json('User Deleted!'))
        .catch(err => res.status(400).json('Error' + err));
});

//Updating a User
router.route('/update').put((req, res) => {
    User.findById(req.params.stuId).then(user => {
        user.stuId = req.body.stuId,
        user.student_name = req.body.student_name,
        user.student_age = req.body.student_age,
        user.student_number = req.body.student_number;
        user.save();
    }).then(res.send("Student Updated"))
        .catch(err => res.status(400).json('Error '+ err));
});
*/


