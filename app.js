const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Pushed from local repo. Anton, welcome to Node.js running on Google Cloud Platform.This is for the FrontendMasters course .Anton Dementiev");
});

app.listen(port, ()=> console.log(`Example app listenting on port ${port}`));
