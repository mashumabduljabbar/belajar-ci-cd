const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk parsing body dari request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint sederhana
app.get('/', (req, res) => {
  res.send('Selamat datang di server Node.js!');
});

// Endpoint lainnya
app.get('/api/data', (req, res) => {
  const data = { message: 'Ini adalah data dari server.' };
  res.json(data);
});

// Menjalankan server pada port 3000
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
