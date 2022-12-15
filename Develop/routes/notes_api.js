const fb = require('express').Router();

// GET Route for retrieving all the feedback
fb.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
fb.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  
    readAndAppend(newFeedback, './db/feedback.json');

});

module.exports = fb;
