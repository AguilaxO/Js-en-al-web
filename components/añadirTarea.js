import checkComplete from "./tareaCompletada.js";
import iconoBorrar from "./borrarTarea.js";
import { crearTarea } from "./leerRegistro.js";



// Función para añadir una nueva tarea en una nuesta página de 
export const agragarTarea = (evento) => {
    // Evitar el comportamiento normal del evento, en este caso el click al elemento botón
    evento.preventDefault();

    // Seleccionar el elemento lista del html, que es donde aparecen todas las tareas
    const lista = document.querySelector("[data-lista]");
    // Seleccionar el elemento input, donde se ingresa el texto de la tarea que se realizará
    const input = document.querySelector("[data-form-input]");
    const calendario = document.querySelector("[data-form-date]")

    // Obtener el texto que se ingreso en el input
    const value = input.value;
    const fecha = calendario.value;
    const fechaFormateada = moment(fecha).format("DD/MM/YYYY");

    // Comprobar que los campos "nombre de la tarea" y "fecha" no esten vacios
    if (value === "" || fecha === "") {
        return;
    }

    const tareaCompletada = false;

    // Establecer el valor del input en un string vacio
    input.value = "";
    calendario.value = "";
    
    // Obtener lo que está guardado en el almacenamiento local o iniciar con una lista vacia y convertir cualquiera de ellas en un objeto JavaScript para facilitar su manejo
    const listaTareas = JSON.parse(localStorage.getItem("Tareas")) || [];
    
    // Objeto donde se guardarán los valores deseados de mi elemento tarea
    const objetoTarea = {
        value,
        fechaFormateada,
        tareaCompletada,
        id: uuid.v4(),
    };

    listaTareas.push(objetoTarea)

    // Guardar mi objeto junto con sus datos en almacenamiento de sesión, la cual se pierde cada vez que se cierra la ventana
    // sessionStorage.setItem("Tareas", JSON.stringify(listaTareas));
    // Guardar mi objeto ahora en almacenamiento local
    localStorage.setItem("Tareas", JSON.stringify(listaTareas));
    // Borrar todas las tareas previo a volver a crearlas de forma ordenada
    lista.innerHTML = '';
    crearTarea();
}

export const createTask = ({value, fechaFormateada, tareaCompletada, id}) => {
    const check = checkComplete(id);

    if (tareaCompletada) {
        check.classList.toggle("fas");
	    check.classList.toggle("completeIcon");
	    check.classList.toggle("far");
    }
    
    // Crear un nuevo li
    const task = document.createElement("li");
    // Añadir una clase al li creado arriba
    task.classList.add("card");
    const taskContenido = document.createElement("div");
    taskContenido.appendChild(check);
    const taskTitulo = document.createElement("span");
    taskTitulo.classList.add('task');
    taskTitulo.innerText = value;
    taskContenido.appendChild(taskTitulo);

    // const elementoFecha = document.createElement("span");
    // elementoFecha.innerHTML = fechaFormateada;
    
    

    task.appendChild(taskContenido);
    // task.appendChild(elementoFecha);
    task.appendChild(iconoBorrar(id));
	return task;
};