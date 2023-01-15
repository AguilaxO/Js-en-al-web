const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", (evento) => completeTask(evento, id));
	return i;
}

const completeTask = (evento, id) => {
	const identificador = evento.target;
	identificador.classList.toggle("fas");
	identificador.classList.toggle("completeIcon");
	identificador.classList.toggle("far");
	// Obtener un objeto javascript con los datos guardados en local storage
	const tareas = JSON.parse(localStorage.getItem("Tareas"));
	// Obtener el index en el local storage del elemento actual
	const indice = tareas.findIndex(elemento => elemento.id === id)
	tareas[indice]["tareaCompletada"] = !tareas[indice]["tareaCompletada"];
	localStorage.setItem("Tareas", JSON.stringify(tareas))


}

export default checkComplete