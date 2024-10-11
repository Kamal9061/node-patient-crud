const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({
    patientName:{
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9_]{3,20}$/,
        description: "Username of the user. It can only contain letters, numbers, and underscores. Length must be between 3 and 20 characters."
    },
    Address:{
        type:String,
        required:true,
        trim:true
    },
    EmailAddress: {
        type:String,
        required:true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        description: "Email address of the user. It must be a valid email format."
      },
    MobileNo:{
        type:Number,
        min:10,
        required:true,
        unique:true
     },
    createdDate:{
        type:Date,
        required:true,
        trim:true
    },
    City:{
        type:String,
        required:true,
        trim:true
    },
    Isactive :{
        type:Number,
        required:true,
    },
    createdbyName :{
        type:String,
        required:true,
        trim:true
    },
    updateDate :{
        type: Date,
        default:Date.now
    },
})

const MensRanking = new mongoose.model("PatientRanking" , menSchema)

module.exports = MensRanking;