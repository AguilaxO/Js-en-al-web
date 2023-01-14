import { createTask } from "./añadirTarea.js";
import { revisarRepeticiones } from "../services/comprobarRepeticiones.js";
import elementoFecha from "./elementoFecha.js";

export const leerRegistro = () => {
    const lista = document.querySelector("[data-lista]");
    const listaTareas = JSON.parse(localStorage.getItem("Tareas")) || [];
    const fechasUnicas = revisarRepeticiones(listaTareas);

    fechasUnicas.forEach((fechaUnica) => {
        console.log(fechaUnica);
    })

    listaTareas.forEach((tarea) => {
        lista.appendChild(elementoFecha(tarea.fechaFormateada))
        lista.appendChild(createTask(tarea))
    });
}
