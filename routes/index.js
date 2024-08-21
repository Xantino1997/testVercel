const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta principal que sirve el archivo HTML
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Nueva ruta que envía el texto desde el backend
router.get('/mensaje-backend', (req, res) => {
  res.send('Hola, soy el backend de tu proyecto');
});

module.exports = router;
