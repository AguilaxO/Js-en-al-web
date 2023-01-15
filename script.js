import { agragarTarea } from "./components/añadirTarea.js";
import { crearTarea } from "./components/leerRegistro.js";
//Nota: cdnjs Es una página para obtner código
const btn = document.querySelector("[data-form-btn]");
btn.addEventListener("click", agragarTarea);

crearTarea();