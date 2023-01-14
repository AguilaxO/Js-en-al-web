export const revisarRepeticiones = (tareas) => {
    const fechasUnicas = [];
    tareas.forEach((tarea) => {
        if (!fechasUnicas.includes(tarea.fechaFormateada)) {
            fechasUnicas.push(tarea.fechaFormateada);
        }
    });
    return fechasUnicas; 
}