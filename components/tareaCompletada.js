const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", completeTask);
	return i;
}

const completeTask = (evento) => {
	const identificador = evento.target;
	identificador.classList.toggle("fas");
	identificador.classList.toggle("completeIcon");
	identificador.classList.toggle("far");

}

export default checkComplete