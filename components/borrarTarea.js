const iconoBorrar = () => {
	const i = document.createElement("i");
	i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
	i.addEventListener("click", borrarTarea)
	return i;
}

const borrarTarea = (evento) => {
	const elementoPadre = evento.target.parentElement;
	elementoPadre.remove();
}

export default iconoBorrar