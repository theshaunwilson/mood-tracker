const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Mood tracker api' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Connected on Port ${PORT}`);
});
