const input = document.querySelector("input")
input.addEventListener("input", (event)=>{
    console.log(input.value)
})

const select = document.querySelector("select")
select.addEventListener("change", ()=>{
    console.log(select.value)
})


function converMoeda (inputValue, selectValue){
const result = (inputValue * selectValue)
return result

}