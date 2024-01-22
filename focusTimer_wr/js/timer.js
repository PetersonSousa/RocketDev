
import Sounds from './sounds.js'

const sound = new Sounds()

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
    minutes
}){
    let timerTimeOut

    function hold(){
        clearTimeout(timerTimeOut)
    }

    function updateMinutes(  newMinutes) {
        minutes = newMinutes
    }

    function resetTimer(){
        minutesDisplay.textContent = String(minutes).padStart(2,"0")
        secondsDisplay.textContent = "00"
        clearTimeout(timerTimeOut)
    }
    
    function countDonw() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
    
            if (seconds <= 0) {
                seconds = 60
                minutes -= 1
                if (minutes < 0) {
                    resetControls()
                    sound.timeEnd()
                    return
                }
                minutesDisplay.textContent = String(minutes).padStart(2, "0")
            }
    
    
            //VAI EXIBIR SEMPRE DOIS ALGARISMOS COMPLETANDO COM ZERO
            secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    
            countDonw()
    
        }, 1000)
    }

    return{
        countDonw,
        resetTimer,
        updateMinutes,
        hold
    }
}

