import { createTask } from "./añadirTarea.js";
import { revisarRepeticiones, ordenarFechas } from "../services/comprobarRepeticiones.js";
import elementoFecha from "./elementoFecha.js";

export const crearTarea = () => {
    const lista = document.querySelector("[data-lista]");
    const listaTareas = JSON.parse(localStorage.getItem("Tareas")) || [];
    const fechasUnicas = revisarRepeticiones(listaTareas);
    ordenarFechas(fechasUnicas);

    fechasUnicas.forEach((fechaUnica) => {
        const fechaUnicamoment = moment(fechaUnica, "DD/MM/YYYY");
        // Creación del elemento que determina el título de cada grupo de tareas en base a su fecha planeada
        lista.appendChild(elementoFecha(fechaUnica))
        listaTareas.forEach((tarea) => {
            const tareamoment = moment(tarea.fechaFormateada, "DD/MM/YYYY");
            const diferenciaFechas = fechaUnicamoment.diff(tareamoment);
            if (diferenciaFechas === 0)
                lista.appendChild(createTask(tarea))
        });
    })

    
}
