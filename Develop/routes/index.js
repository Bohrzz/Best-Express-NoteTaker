const express = require('express');

// Import our modular routers for /tips and /feedback
const apiRouter = require('./notes_api.js');
const notesRouter = require('./notes_router');

const app = express();

app.use('/notes_api', apiRouter);
app.use('/notes', notesRouter);

module.exports = app;
