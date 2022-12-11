const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

const app = express();
const port = 3000;
app.use(cors()); // cors 사용
app.use(bodyParser.json()); // body-parser 사용

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/records:id', (req, res) => {
  res.send(req.params);
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = router;
