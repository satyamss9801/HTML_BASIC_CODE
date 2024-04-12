class Timer {
    interval = null

    constructor(label) {
        this.label = label

        let cont = document.querySelector(".container")
        cont.innerHTML += `
            <div class="item" data-label="${label}">
                <p>1</p>

                <div class="btn-group">
                    <button onclick="pause(${label})">Pause</button>
                    <button onclick="resume(${label})">Resume</button>
                </div>
             </div>
        `

        this.setTimer()
    }

    setTimer() {
        if (this.interval == null) {
            this.interval = setInterval(() => {
                let p = document.querySelector(
                    `[data-label = "${this.label}"] p`
                )
                let cnt = Number(p.innerText)
                cnt++
                p.innerText = cnt
            }, 100)
        }
    }

    pause() {
        clearInterval(this.interval)
        this.interval = null
    }

    resume() {
        this.setTimer(this.label)
    }
}

let arr = []
let label = 0

function addItem() {
    let obj = new Timer(label)
    arr.push(obj)

    label++
}

function pause(label) {
    arr[label].pause()
}

function resume(label) {
    arr[label].resume()
}
