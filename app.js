const express = require('express');
const bodyParser = require('body-parser'); // For parsing JSON in request bodies

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET route
app.get('/number/:num', (req, res) => {
  const { num } = req.params; // Extract the number from the route parameter
  res.send(`${num}를 불러왔습니다`);
});

// POST route
app.post('/square', (req, res) => {
  const { number } = req.body; // Extract the number from the request body
  if (!number || isNaN(number)) {
    return res.status(400).send('유효한 숫자를 입력해주세요.');
  }

  // Check if the number is 0 or negative
  if (number <= 0) {
    return res.status(400).send('0 또는 음수는 입력할 수 없습니다.');
  }  

  const squaredNumber = number * number;
  res.send(`입력된 숫자의 제곱은 ${squaredNumber}입니다.`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
