const express = require("express");

const ourApp = express();

ourApp.get("/", (request, response) => {
    response.json({message : "Hello there"})
})

ourApp.listen(4000, () => {console.log("Server at 4000")});