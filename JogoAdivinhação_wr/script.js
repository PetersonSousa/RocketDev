let randomNumber = Math.round(Math.random() * 10)
let cont = 0
console.log(randomNumber)
function handleClick(event){
    event.preventDefault()
    const input = document.querySelector("#inputNumber")
    let number = Number(input.value)
    cont++
    if(number == randomNumber){
        const screenOne = document.querySelector(".screen-one")
        const screenTwo = document.querySelector(".screen-two")      
        screenOne.classList.add("hide")
        screenTwo.classList.remove("hide")

        const h2 = document.querySelector(".screen-two h2")
        h2.innerText = cont == 1 ? `Acertou em ${cont} tentativa` : `Acertou em ${cont} tentativas`
    }
}

const btnReset = document.querySelector("#btn-reset")

btnReset.addEventListener("click", recharge)

function recharge(){
    document.querySelector(".screen-one").classList.remove("hide")
    document.querySelector(".screen-two").classList.add("hide")
    document.querySelector("#inputNumber").value = ""
    cont = 0
    randomNumber = Math.round(Math.random() * 10)
}

// h2.style.color = "green"