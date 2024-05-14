import * as el from './elements.js'
import * as actions from './actions.js'
import { updateDisplay } from './timer.js'

export function registerControls() {

    el.controls.addEventListener('click', (event) => {
        if (typeof actions[event.target.id] != 'function') {
            return
        }
        actions[event.target.id]()
    })
}

export function setMinutes() {

    el.plus.addEventListener('click', () => {

        let currentValue = parseInt(el.minutes.textContent);

        el.minutes.textContent = el.minutes.textContent >= 60 ? 60 : currentValue + 5

        updateDisplay(el.seconds.textContent, el.minutes.textContent)
    })
}
    el.minus.addEventListener('click', () => {

        let currentValue = parseInt(el.minutes.textContent);

        el.minutes.textContent = el.minutes.textContent <= 5 ? actions.stop() : currentValue - 5

        updateDisplay(el.seconds.textContent, el.minutes.textContent)
    })
