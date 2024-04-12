/** @type {HTMLElement} */
let input = document.querySelector("#parent input")
let list = document.getElementById("list")
let addBtn = document.querySelector("#parent button")
let clrBtn = document.querySelector("#parent button:last-child")
let todo = []

addEventListener("load", () => {
    localStorage.getItem("TODO_LIST")
        ? (todo = JSON.parse(localStorage.getItem("TODO_LIST")))
        : (todo = [])

    todo.forEach((element) => {
        let lItem = document.createElement("div")
        lItem.innerText = element
        lItem.className += "lItem"
        list.appendChild(lItem)
    })
})

addBtn.addEventListener("click", () => {
    if (input.value === "") {
        return
    }

    let lItem = document.createElement("div")
    lItem.innerText = input.value
    lItem.className += "lItem"
    list.appendChild(lItem)

    todo.push(input.value)
    localStorage.setItem("TODO_LIST", JSON.stringify(todo))

    input.value = ""
})

document.addEventListener("click", (e) => {
    if (e.target.className === "lItem") {
        e.target.remove()
        todo.splice(todo.indexOf(e.target.innerText), 1)
        localStorage.setItem("TODO_LIST", JSON.stringify(todo))
    }
})

input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        addBtn.click()
    }
})

clrBtn.addEventListener("click", () => {
    let items = document.querySelectorAll("#list div")
    items.forEach((i) => i.remove())
    todo = []
    localStorage.setItem("TODO_LIST", JSON.stringify(todo))
})
