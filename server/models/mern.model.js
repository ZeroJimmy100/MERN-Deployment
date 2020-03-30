const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const MernSchema = new mongoose.Schema({
    question: {
        type: String,
        require: [true, "Question is required"],
        minlength: [10, "Question must contain about 10 characters or more"],
        unique: true,
    },
    optionOne: {
        type: String,
        require: [true, "Option 1 is require"],
    },
    optionTwo: {
        type: String,
        require: [true, "Option 2 is require"],
    },
    optionThree: {
        type: String,
    },
    optionFour: {
        type: String,
    },
    voteOne: {
        type: Number,
        default: 0
    },
    voteTwo: {
        type: Number,
        default: 0
    },
    voteThree: {
        type: Number,
        default: 0
    },
    voteFour: {
        type: Number,
        default: 0
    },
}, {timestamps:true});
MernSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator'});
module.exports.Poll = mongoose.model('Poll', MernSchema);