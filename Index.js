const express = require('express');
const tareasRoutes = require('./routes'); //se importan las rutas

const app = express();
const PORT = 3000;

// Middleware clave: Le dice a Express que interprete el body de las peticiones como JSON.
app.use(express.json());// Express interpretará como json el body.

//Todas las rutas tendrán el prefijo 'api'
app.use('/api', tareasRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    // el servidor cambia automáticamente si el usuario cambia el puerto
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.get("/", (req, res) => { // muestra mensaje en 
    res.send("Bienvenidos a la tarea de la semana 4 API RESTful");
});