const { Poll }  = require('../models/mern.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Mern belt exam"
    });
}

module.exports.createPoll = (request, response) => {
    const { question, optionOne, optionTwo, optionThree, optionFour, voteOne, voteTwo, voteThree, voteFour} = request.body;
    Poll.create({
        question,
        optionOne,
        optionTwo,
        optionThree,
        optionFour,
        voteOne,
        voteTwo,
        voteThree,
        voteFour,
    })
    .then(poll => response.json(poll))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllPoll = (request, response) => {
    Poll.find({})
        .then(polls => response.json(polls))
        .catch(err => response.json(err))
}

module.exports.getPoll = (request, response) => {
    Poll.findOne({_id:request.params.id})
        .then(poll => response.json(poll))
        .catch(err => response.json(err))
}

module.exports.updatePoll = (request, response) => {
    Poll.findOneAndUpdate({_id: request.params.id, runValidators: true}, request.body, {new:true})
        .then(updatedPoll => response.json(updatedPoll))
        .catch(err => response.json(err))
}

module.exports.deletePoll = (request, response) => {
    Poll.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}