let input = document.querySelector('input')
let text = document.querySelector('textarea')
let btn = document.querySelector('button')
let container = document.querySelector('.container')

btn.addEventListener('click', ()=>{
    let date = new Date ()
    let inserimento = date.toLocaleString()



    if(input.value == `` && text.value == ``){
        alert(`riempi i campe pls`)
    }else{
        let div = document.createElement('div')
        div.innerHTML = `<h2>${input.value}</h2> <p>${text.value}</p> <i>${inserimento}`
        container.appendChild(div)
        div.style.background = `#D4EBF8`
        div.style.width = `33vh`
        div.style.border = `1.5px solid black`
        div.style.margin = `10px`
        input.value = ``
        text.value = ``
    }
})

