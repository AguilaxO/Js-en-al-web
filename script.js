const btn = document.querySelector("[data-form-btn]");

console.log(btn);

btn.addEventListener("click", function (evento) {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
})