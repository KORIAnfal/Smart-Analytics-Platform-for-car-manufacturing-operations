// server.js (Node.js)
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let clients = [];

// Handle incoming WebSocket connections
wss.on('connection', (ws) => {
  clients.push(ws);
  ws.on('close', () => {
    clients = clients.filter((client) => client !== ws);
  });
});

// Webhook endpoint to receive data from the webhook
app.post('/webhook', (req, res) => {
  const machineData = req.body;
  
  // Broadcast the data to all connected WebSocket clients
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(machineData));
    }
  });
  
  res.status(200).send('Webhook received');
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
