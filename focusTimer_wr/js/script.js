import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,
    minutesDisplay,
    secondsDisplay,
    minutes
} from "./elements.js"

const sound = new Sounds()

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    minutes
})


buttonPlay.addEventListener('click', (e) => {
    controls.play()  
    timer.countDonw()
    sound.pressButtonStart()
})

buttonPause.addEventListener("click", () => {
    controls.pause()
    timer.hold()
    sound.pressButtonStart()
})

buttonStop.addEventListener('click', () => {
    controls.reset()
    timer.resetTimer()
    sound.pressButtonStart()
})

buttonSoundOn.addEventListener("click", () => {
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')
    sound.bgAudio.play()
})

buttonSoundOff.addEventListener("click", () => {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.pause()
})

buttonSet.addEventListener('click', () => {
    let minutes = prompt('Digite o tempo do contador em minutos') || 0
    timer.updateMinutes(minutes)
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
})


