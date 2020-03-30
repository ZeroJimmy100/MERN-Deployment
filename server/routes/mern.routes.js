const MernController = require('../controllers/mern.controller');

module.exports = function(app){
    app.get('/api/', MernController.index);
    app.get('/api/polls', MernController.getAllPoll);
    app.get('/api/polls/:id', MernController.getPoll);
    app.put('/api/polls/:id', MernController.updatePoll);
    app.post('/api/polls/new', MernController.createPoll);
    app.delete('/api/polls/:id', MernController.deletePoll);
}