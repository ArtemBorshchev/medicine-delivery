const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  next();
});


app.use(bodyParser.json());

app.post('/api/createFile/:phoneNumber', (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  const fileContent = req.body;

  const fileName = phoneNumber;

  fs.writeFile(`./server/${fileName}`, JSON.stringify(fileContent), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log(`File ${fileName} created successfully!`);
    res.status(200).send('File created successfully');
  });
});

app.get('/medicine', (req, res) => {
  fs.readFile('medicine.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
