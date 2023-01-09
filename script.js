import checkComplete from "./components/tareaCompletada.js";
import iconoBorrar from "./components/borrarTarea.js";

// Immediately invoked function expression IIFE
( () => {
const btn = document.querySelector("[data-form-btn]");
const createTask = (evento) => {
    // Evitar el comportamiento normal del evento, en este caso el click al elemento botón
    evento.preventDefault();
    // Seleccionar el elemento input, donde se ingresa el texto de la tarea que se realizará
    const input = document.querySelector("[data-form-input]");
    // Obtener el texto que se ingreso en el input
    const value = input.value;
    // Establecer el valor del input en un string vacio
    input.value = "";
    // Seleccionar el elemento lista del html
    const lista = document.querySelector("[data-lista]");
    // Crear un nuevo li
    const task = document.createElement("li");
    // Añadir una clase al li creado arriba
    task.classList.add("card");
    // Al elemento lista agregar el li creado anteriormente
    lista.appendChild(task);
    const taskContenido = document.createElement("div");
    taskContenido.appendChild(checkComplete());
    task.appendChild(taskContenido);
    task.appendChild(iconoBorrar());
    const taskTitulo = document.createElement("span");
    taskTitulo.classList.add('task');
    taskTitulo.innerText = value;
    taskContenido.appendChild(taskTitulo);
	
};

btn.addEventListener("click", createTask);

}) ();