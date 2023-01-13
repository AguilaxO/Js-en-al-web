import { createTask } from "./añadirTarea.js";

export const leerRegistro = () => {
    const lista = document.querySelector("[data-lista]");
    const listaTareas = JSON.parse(localStorage.getItem("Tareas")) || [];
    listaTareas.forEach((tarea) => {
        lista.appendChild(createTask(tarea))
    });
}
