const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser'); // Для разбора JSON из запроса
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Разбор JSON из тела запроса
app.use(bodyParser.json());

// Маршрут для создания файла JSON и записи в него данных
app.post('/api/createFile/:phoneNumber', (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  const fileContent = req.body; // Получаем данные из тела запроса

  const fileName = `${phoneNumber}.json`; // Создаем имя файла на основе номера телефона

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
