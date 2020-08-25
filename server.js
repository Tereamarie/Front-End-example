const express = require('express');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("Code for Back-end");
});

module.exports = server;