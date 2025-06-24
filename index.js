<<<<<<< HEAD
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Dockerized CI/CD Pipeline!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
=======
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Dockerized CI/CD Pipeline!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
>>>>>>> 94e3d46 (First commit from /root/app)
