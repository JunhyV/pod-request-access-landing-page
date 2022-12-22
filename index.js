const input = document.getElementById('email');
const submitButton = document.getElementById('button');
const msjSuccess = document.getElementById('success');
const msjError = document.getElementById('error');
const msj = document.getElementById('msj');
console.log(msj);

const showError = () => {
    msj.style.display = 'none'
    msjError.style.display = 'initial';
    msjSuccess.style.display = 'none';
}
const showSuccess = () => {
    msj.style.display = 'none'
    msjError.style.display = 'none';
    msjSuccess.style.display = 'initial';
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!input.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        return showError();
    }

    showSuccess();
});