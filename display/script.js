let inp = document.getElementsByClassName("inp");
let btn = document.getElementsByTagName("button");
let output = document.querySelector("#val input");

btn[0].addEventListener("click", () => {
    if (isNaN(inp[0].value) || isNaN(inp[1].value)) {
        alert("Input numbers only");
    } else if (inp[0].value == "" || inp[1].value == "") {
        alert("Provide the inputs");
    } else {
        output.value = Number(inp[0].value) + Number(inp[1].value);
    }
})

btn[1].addEventListener("click", () => {
    inp[0].value = inp[1].value = "";
    output.value = "";
})