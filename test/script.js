const form = document.querySelector("form")
form.addEventListener("submit", formHandler)

async function formHandler(event) {
    event.preventDefault()

    const form = event.currentTarget
    const url = form.action
    const formdata = new FormData(form)

    await fetch(url, { method: "POST", body: formdata })
}
