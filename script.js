let number1 = 0
let number2 = 0
let operator = "add"

document.getElementById("number1").addEventListener("input", (e) => {
    if (e.target.value.trim() !== " ") {
        number1 = Number(e.target.value.trim())
    } else {
        number1 = 0
    }

})

document.getElementById("number2").addEventListener("input", (e) => {
    if (e.target.value.trim() !== " ") {
        number2 = Number(e.target.value.trim())
    } else {
        number2 = 0
    }



})
document.getElementById("operator").addEventListener("change", (e) => {
    if (e.target.value.trim() !== "") {
        operator = e.target.value
    }

})

document.getElementById("button").addEventListener("click", (e) => {
    result = 0
    if (operator === "add") {
        result = number1 + number2

    } else if (operator === "sub") {
        result = number1 - number2

    } else if (operator === "mul") {

        result = number1 * number2

    } else if (operator === "divid") {
        result = number1 / number2
    }

    document.getElementById("res").innerHTML = result
})