const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
event.preventDefault();
console.log('Evento prevenido');
setResult(`Olá mundo`);
});

function setResult (resulta) {
    const Result = document.querySelector('#result');
    result.innerHTML = resulta;
}