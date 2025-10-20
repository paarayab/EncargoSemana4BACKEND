const express = require('express'); // la profesora dijo que era irse a la segura
const router = express.Router();// yo había usado import express from 'express'

let tareas = require('./data');// se importan los datos

//CRUD

//GET (listar los registros) ./api/tareas
router.get('/tareas', (req, res) => {
  res.status(200).json(tareas);
});

// listar registros por ID
router.get('/tareas/:id', (req, res) => {
  const tareaId = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === tareaId);

  if (!tarea) { //Si el recurso no existe
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  res.status(200).json(tarea);//operación exitosa
});

//POST (crea nuevos registros)
router.post('/tareas', (req, res) => {
  const { titulo, descripcion, completada } = req.body;

  // Validación básica
  if (!titulo || !descripcion) {
    return res.status(400).json({ error: 'El título y la descripción son obligatorios' });
  }
  if (typeof completada !== 'boolean') {
    return res.status(400).json({ error: 'El campo "completada" debe ser un booleano' });
  }

  // Creación de nueva tarea
  const newtarea = {
    id: tareas.length + 1, // ID automático
    titulo: titulo,
    descripcion: descripcion,
    completada: completada
  };

  tareas.push(newtarea);
  res.status(201).json(newtarea); // 201 significa "creado"
});

//PUT (Actualizar registro existente)
router.put('/tareas/:id', (req, res) => {
  const tareaId = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === tareaId);

  if (!tarea) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  const { titulo, descripcion, completada } = req.body;

  // Se actualiza según lo señalado
  if (titulo) tarea.titulo = titulo;
  if (descripcion) tarea.descripcion = descripcion;
  if (typeof completada === 'boolean') tarea.completada = completada;
  
  res.status(200).json(tarea);
});

//DELETE (eliminar un registro)
router.delete('/tareas/:id', (req, res) => {
  const tareaId = parseInt(req.params.id);
  const tareaIndex = tareas.findIndex(t => t.id === tareaId);

  if (tareaIndex === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  // Se elimina la tare usando el índice
  tareas.splice(tareaIndex, 1);
  
  // Tarea eliminada con éxito.
  res.status(200).json({ message: 'Tarea eliminada exitosamente' });
});


module.exports = router;