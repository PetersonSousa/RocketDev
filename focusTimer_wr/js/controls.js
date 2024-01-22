
export default function Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet }
) {
    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')

    }
    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonStop.classList.remove('hide')
        buttonSet.classList.add('hide')
    }
    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')
    }

    return {
        reset,
        play,
        pause
    }

}




