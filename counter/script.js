function addItem() {
    let cont = document.querySelector(".container")

    let item = document.createElement("div")

    let p = document.createElement("p")

    let btnGrp = document.createElement("div")

    let btn1 = document.createElement("button")
    let btn2 = document.createElement("button")

    btn1.innerText = "Pause"
    btn2.innerText = "Resume"

    p.innerText = "1"

    item.classList.add("item")
    btnGrp.classList.add("btn-group")

    btnGrp.appendChild(btn1)
    btnGrp.appendChild(btn2)

    item.appendChild(p)
    item.appendChild(btnGrp)

    cont.appendChild(item)

    let isPaused = false

    let i = setInterval(() => {
        let cnt = Number(p.innerText)
        cnt++
        p.innerText = cnt
    }, 100)

    btn1.addEventListener("click", (e) => {
        clearInterval(i)
        isPaused = true
    })

    btn2.addEventListener("click", (e) => {
        if (isPaused) {
            i = setInterval(() => {
                let cnt = Number(p.innerText)
                cnt++
                p.innerText = cnt
            }, 100)
        }

        isPaused = false
    })
}
