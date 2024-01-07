export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    btnClose: document.querySelector('.close'),
    textCard: document.querySelector('.text-card'),

    open(){
        Modal.wrapper.classList.add('open');    
    },
    close(){
        Modal.wrapper.classList.remove('open')        
    }
}


Modal.btnClose.onclick = function () {
    Modal.close()
}

window.addEventListener('keydown',(e) =>{
    if(e.key == "Escape"){
        Modal.close()
    }
})
