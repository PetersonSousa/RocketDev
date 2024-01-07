import { Modal } from "./modal.js"; 
import { alertError } from "./alert-error.js";
import { notNumber, IMC } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');
const input = document.querySelector('input')

form.onsubmit = function (event) {
    event.preventDefault();
    const weight = inputWeight.value;
    const height = inputHeight.value;
    const isError = notNumber(weight) || notNumber(height)

    if(isError){
        alertError.open()
        return
    }

    alertError.close()

    const result = IMC(weight, height);

    Modal.textCard.innerText = `Seu IMC é de ${result}`;
    Modal.open()
}

input.addEventListener('keydown',(e) => {
    if(e.key){
        alertError.close()
    }
})