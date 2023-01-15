export const revisarRepeticiones = (tareas) => {
    const fechasUnicas = [];
    tareas.forEach((tarea) => {
        if (!fechasUnicas.includes(tarea.fechaFormateada)) {
            fechasUnicas.push(tarea.fechaFormateada);
        }
    });
    return fechasUnicas; 
}

export const ordenarFechas = (fechas) => {
    return fechas.sort((a, b) => {
        const primeraFecha = moment(a, "DD/MM/YYYY");
        const segundaFecha = moment(b, "DD/MM/YYYY");
        return primeraFecha - segundaFecha;
    })
}