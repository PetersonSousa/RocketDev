export const AlertErro = {
    element: document.querySelector('.alert-error'),
    open() {
        AlertErro.element.classList.add('open')
    },
    close(){
        AlertErro.element.classList.remove('open')
    }
}



