// Creación de estructura HTML que representará la fecha a la que corresponden 1 o más tareas
// Función anónima
export default (fecha) => {
    const elementoFecha = document.createElement("li")
    elementoFecha.innerHTML = fecha;
    elementoFecha.classList.add("date");
    return elementoFecha;
}