let ques = document.getElementsByClassName("q")
let btn = document.getElementById("btn")
let popup = document.getElementById("popup")
let popclose = document.getElementById("popclose")

btn.addEventListener("click", () => {
    let allCorAns = true

    let arr = Array.from(ques)
    arr.forEach((q) => {
        let corrAns = false

        let opt = document.querySelectorAll(`#${q.id} input`)
        opt.forEach((o) => {
            if (o.name == "ind") {
                if (o.checked && o.value == "1947") {
                    corrAns = true
                }
            }
            else {
                if (o.checked && o.value == "Tiger") {
                    corrAns = true
                }
            }
        })

        if (corrAns) {
            q.style.color = "Green"
        }
        else {
            q.style.color = "Red"
            allCorAns = false
        }
    })

    if (allCorAns) {
        popup.style.display = "flex"
    }
})

popclose.addEventListener("click", () => {
    popup.style.display = "none"
})