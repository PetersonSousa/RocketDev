export default function(){
    const bgAudio = new Audio('../music/WhatsApp Audio 2024-01-21 at 20.18.42.mpeg')
    const pressButton = new Audio('../music/Pokemon-Text-Tone.mp3')
    const clock = new Audio('../music/Minions-iPhone.mp3')

    bgAudio.loop

    function timeEnd(){
        clock.play()
    }

    function pressButtonStart(){
        pressButton.play()
    }
    
    return{
        bgAudio,
        timeEnd,
        pressButtonStart
    }
}

