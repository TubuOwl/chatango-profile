const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mainData = 'memory.json';

app.get('/', function(req, res) {
  res.send(':)');
});

app.get('/teach', (req, res) => {
  const { message, respond } = req.query;
  const memory = loadMemory();
  memory[message] = respond;
  saveMemory(memory);
  res.json({ message: 'Success' });
});

app.get('/get', (req, res) => {
  const { message } = req.query;
  const memory = loadMemory();
  const matchedKeys = Object.keys(memory).filter(key => message.includes(key));
  const selectedKey = matchedKeys.sort()[0];
  const response = memory[selectedKey] || `I don't know about '${message}', can you teach me?`;
  res.json({ response });
});


function loadMemory() {
  try {
    const memoryData = fs.readFileSync(mainData);
    return JSON.parse(memoryData);
  } catch (error) {
    console.error('Error loading memory:', error);
    return {};
  }
}

function saveMemory(memory) {
  try {
    fs.writeFileSync(mainData, JSON.stringify(memory, null, 2));
  } catch (error) {
    console.error('Error saving memory:', error);
  }
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
