import * as el from './elements.js'
import state from './state.js'
import { stop } from './actions.js'

export function updateDisplay(seconds, minutes){
    el.seconds.textContent = String(seconds).padStart(2, "0") //preencher o começo, quero um número com 2 caracteres, e se tiver só um, ele preenche com 0
    el.minutes.textContent = String(minutes).padStart(2, "0")
}

export function countdown(){

    clearTimeout(state.countdownId)

    if(!state.isRunning){
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    
    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        stop()
        return
    }

    updateDisplay(seconds, minutes)

    state.countdownId = setTimeout(() => countdown(), 1000);
}