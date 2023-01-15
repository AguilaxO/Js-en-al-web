import { crearTarea } from "./leerRegistro.js";

// Aquí se está creando un nuevo icono borrar y se estable su comportamiento cuando es clickeado
const iconoBorrar = (id) => {
	const i = document.createElement("i");
	i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
	i.addEventListener("click", () => borrarTarea(id))
	return i;
}

const borrarTarea = (id) => {
	// Buscar en el registro en que indice se ubica el elemento correspondiente a nuestro id
	// Leer los registros
	const listaTareas = JSON.parse(localStorage.getItem("Tareas"));
	// Obtner el indice de dicho elemento
	const indice = listaTareas.findIndex((elemento) => elemento.id === id);
	// Eliminar el elemento 
	listaTareas.splice(indice, 1);
	// Actualizar el registro de localstorage
	localStorage.setItem("Tareas", JSON.stringify(listaTareas));
	// Volver a cargar el contenido del elemento lista
	const lista = document.querySelector("[data-lista]");
	lista.innerHTML = "";
	crearTarea();
};

export default iconoBorrar;