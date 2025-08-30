const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('User Service Running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`User Service listening on port ${PORT}`);
});
