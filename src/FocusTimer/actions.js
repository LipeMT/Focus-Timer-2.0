import * as timer from './timer.js'
import state from './state.js'
import * as el from './elements.js'

export function toggleRunning() {
    if(el.minutes.textContent == 0 && el.seconds.textContent == 0){
        return
    }
    state.isRunning = document.documentElement.classList.toggle('running')
    console.log(document.documentElement.classList)
    timer.countdown()
}

export function stop() {
    document.documentElement.classList.remove('running')
    timer.updateDisplay(0, 0)
}

