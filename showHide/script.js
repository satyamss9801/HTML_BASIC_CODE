let btn = document.getElementsByTagName("button")

Array.from(btn).forEach((button) => {
    button.addEventListener("click", () => {
        let bodyElement = button.parentElement.parentElement.lastElementChild

        if (button.innerText === "Expand") {
            bodyElement.removeAttribute("hidden")
            button.innerText = "Collapse"
        } else {
            bodyElement.setAttribute("hidden", "")
            button.innerText = "Expand"
        }
    })
})
