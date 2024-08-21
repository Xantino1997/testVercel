const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Usa el router definido en "routes/index.js"
app.use('/', indexRouter);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
