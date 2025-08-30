const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Product Service Running!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Product Service listening on port ${PORT}`);
});
