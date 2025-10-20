# 🚀 Mi Primera API con Express.js (CRUD de tareas)

API RESTful básica que gestiona tareas con operaciones **CRUD** usando **Node.js** y **Express.js**.

Los requisitos y lineamientos siguen lo enunciado en la evaluación de la semana 4.

## ⚙️ Tecnologías

- Node.js + Express
- Sin base de datos (array en 'data.js')
- Respuestas en **JSON**

## 🛠️ Instalación y Ejecución

1. Clonar este repositorio:
   ```bash
   git clone 
   cd <img width="1240" height="643" alt="Captura de pantalla 2025-10-20 002013" src="https://github.com/user-attachments/assets/f2317cae-51ce-4a95-81f0-a06ae99aaaad" />

   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir la URL que aparece en consola (por defecto [http://localhost:3000](http://localhost:3000)).

## 📂 Endpoints de la API

Todas las rutas están bajo el prefijo `/api`.

---

### 1. Listar todas las tareas `(GET /api/tareas)`

Obtiene la lista completa de tareas.
<img width="1820" height="962" alt="image" src="https://github.com/user-attachments/assets/73089c26-4c4f-41d8-acb0-b487fab36aa7" />

* **Ejemplo de Petición (cURL):**
   http://localhost:3000/api/tareas/

* **Ejemplo de Respuesta JSON:**
[
    {
        "id": 1,
        "titulo": "Crear Carpeta",
        "descripcion": "se debre crear la carpeta que alojará la API RESful",
        "completada": false
    },
    {
        "id": 2,
        "titulo": "Abrir Carpeta",
        "descripcion": "se debe abrir la carpeta con VSC",
        "completada": false
    },
    {
        "id": 3,
        "titulo": "Instalar Express",
        "descripcion": "Se debe instalar Express a través de la terminal",
        "completada": true
    }
]
    
### 2. Crear una nueva tarea `(POST /api/tareas)`

Agrega una nueva tarea a la lista.
<img width="1363" height="721" alt="Captura de pantalla 2025-10-20 001211" src="https://github.com/user-attachments/assets/582ec73a-19c2-4e7f-b2b9-b7ce4e2eaffc" />

* **Ejemplo de Petición (cURL):**
   
 {
        "titulo": "Crear archivos",
        "descripcion": "se deben crear los archivos para comenzar a trabajar",
        "completada": true
 }
* **Ejemplo de Respuesta JSON (código 201 Created):**
    {
    "id": 4,
    "titulo": "Crear archivos",
    "descripcion": "se deben crear los archivos para comenzar a trabajar",
    "completada": true
}

### 3. Actualizar una tarea existente `(PUT /api/tareas/:id)`

Modifica los datos de una tarea existente, identificada por su `id`.
<img width="1229" height="631" alt="Captura de pantalla 2025-10-20 001636" src="https://github.com/user-attachments/assets/414eeb5c-204c-49d8-992a-aae4b130cd46" />

* **Ejemplo de Petición (cURL para marcar la tarea 2 como completada):**
{
        "titulo": "Abrir Visual Studio Codec",
        "descripcion": "Se debe ejecutar el programa VSC para comenzar la programación",
        "completada": true
 }

* **Ejemplo de Respuesta JSON:**
  {
    "id": 2,
    "titulo": "Abrir Visual Studio Codec",
    "descripcion": "Se debe ejecutar el programa VSC para comenzar la programación",
    "completada": true
}

### 4. Eliminar una tarea `(DELETE /api/tareas/:id)`

Elimina una tarea de la lista según su `id`.
<img width="1240" height="643" alt="Captura de pantalla 2025-10-20 002013" src="https://github.com/user-attachments/assets/74ebe190-4d1b-4b63-acbc-b2b638645114" />




* **Ejemplo de Respuesta JSON:**

  

