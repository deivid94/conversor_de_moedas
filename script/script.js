function convertMoeda() {

const input = document.querySelector("input")
input.addEventListener("input", (event)=>{
    return input.value
})

const select = document.querySelector("select")
select.addEventListener("change", ()=>{
    return select.value
})

const result = parseInt((input.value * select.value))
document.getElementById("resultado")
.innerHTML = result

}

