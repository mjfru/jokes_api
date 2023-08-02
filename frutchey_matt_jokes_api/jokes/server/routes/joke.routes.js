const JokeController = require('../controllers/joke.controller')

module.exports = app => {
  app.get('/api/jokes', JokeController.findAllJokes);
  app.get('/api/oneJoke/:id', JokeController.findOneJoke)
  app.post('/api/addJoke', JokeController.addJoke);
  app.put('/api/editJoke/:id', JokeController.editJoke);
  app.delete('/api/deleteJoke/:id', JokeController.deleteJoke);
}