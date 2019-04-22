const express = require("express");

//setup the app

const app = express();

//use the environment port or 8000 if not supplied
const port = process.env.PORT || 8000;

//listen on the port defined
app.listen(port, ()=>{
    console.log(`App listenting on ${port}`);
});

//serve static files
app.use(express.static('public'));