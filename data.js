
let tareas = [// variable solo existe en el bloque
  {
    id: 1,
    titulo: "Crear Carpeta",
    descripcion: "se debre crear la carpeta que alojará la API RESful",
    completada: false
  },
  {
    id: 2,
    titulo: "Abrir Carpeta",
    descripcion: "se debe abrir la carpeta con VSC",
    completada: false
  },
  {
    id: 3,
    titulo: "Instalar Express",
    descripcion: "Se debe instalar Express a través de la terminal",
    completada: true
  }
];

module.exports = tareas; // para importar desde otros archivos