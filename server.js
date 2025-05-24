
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

app.post('/save-history', (req, res) => {
  const newEntry = req.body;

  const filePath = path.join(__dirname, 'history.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    let history = [];

    if (!err && data) {
      try {
        history = JSON.parse(data);
      } catch (e) {
        console.error('JSON parse error:', e);
      }
    }

    history.push(newEntry);

    fs.writeFile(filePath, JSON.stringify(history, null, 2), (err) => {
      if (err) {
        console.error('Write error:', err);
        return res.status(500).send('Failed to save');
      }

      res.status(200).send('Saved successfully');
    });
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
