const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    _id:{type:Number,required:true, unique:true},
    student_name:{type:String,required:true},
    student_number:{type:Number,required:true},
    student_age:{type:Number,required:true}
 },{
     timstamps:true,
 });

const User = mongoose.model('User',userSchema);

module.exports = User;