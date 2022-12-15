const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require("./routes")
const PORT = process.env.PORT||3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use("/api",api);











app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
