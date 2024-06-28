/**
 * Importación del framework Express.
 * @type {import('express').Express}
 */
import express from 'express';

// Inicialización de la aplicación Express.
const app = express();

// Ruta para manejar peticiones GET a la raíz del sitio.
app.get('/', (req, res) => {
  /**
   * Maneja peticiones GET a la raíz del sitio.
   * @param {import('express').Request} req - Objeto de solicitud.
   * @param {import('express').Response} res - Objeto de respuesta.
   */
  res.send('Hello World!');
});

// Ruta para manejar peticiones GET con un parámetro de nombre.
app.get('/saludo/:nombre', (req, res) => {
  /**
   * Maneja peticiones GET con un parámetro de nombre.
   * @param {import('express').Request} req - Objeto de solicitud.
   * @param {import('express').Response} res - Objeto de respuesta.
   */
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}`);
});

// Inicia el servidor en el puerto 3000.
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
