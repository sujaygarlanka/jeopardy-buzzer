// const express = require("express");
const path = require("path");
// const { WebSocket } = require('ws');

const publicPath = path.join(__dirname, "..", "build");
// const PORT = process.env.PORT || 3001;

// const app = express();
// app.use(express.static(publicPath));

// const wsServer = new WebSocket.Server({
//     noServer: true,
//     path: "/websockets",
// });

// app.on("upgrade", (request, socket, head) => {
//     wsServer.handleUpgrade(request, socket, head, (websocket) => {
//         wsServer.emit("connection", websocket, request);
//         console.log("test")
//     });
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

// app.get("*", (req, res) => {
//     res.sendFile(path.join(publicPath, "index.html"));
// });

// // I'm maintaining all active connections in this object
// const clients = {};

// // A new client connection request received
// wsServer.on('connection', function(connection) {
//   // Generate a unique code for every user
//   const userId = uuidv4();
//   console.log(`Recieved a new connection.`);

//   // Store the new connection and handle messages
//   clients[userId] = connection;
//   console.log(`${userId} connected.`);
// });
  

var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(express.static(publicPath));

app.get("*", (req, res) => {
    console.log("test")
    res.sendFile(path.join(publicPath, "index.html"));
});

const teamClients = {};
const adminClient = {};
app.ws('/team', function(ws, req) {
    console.log("jello")

    ws.on('connection', function(connection) {
        // Generate a unique code for every user
        const userId = uuidv4();
        console.log(`Recieved a new connection.`);
        
        // Store the new connection and handle messages
        teamClients[userId] = connection;
        console.log(`${userId} connected.`);
        connection.on('message', (message) => console.log(message));
    });
    ws.on('message', function(msg) {
        JSON.parse(msg.toString());
    });
    console.log('socket', req.testing);
});

app.ws('/admin', function(ws, req) {

    ws.on('connection', function(connection) {
        // Generate a unique code for every user
        const userId = uuidv4();
        console.log(`Recieved a new connection.`);
        
        // Store the new connection and handle messages
        adminClient = connection;
        console.log(`${userId} connected.`);
    });
    ws.on('message', function(msg) {
        console.log("hello");
    });
    console.log('socket', req.testing);
});

app.listen(3000);
  