let h1 = document.querySelector('#title');
let paragrafi = document.querySelectorAll('.paragrafi')
let body = document.querySelector('body');
let changeBtn1 = document.querySelector('#changeBtn1');
let changeBtn2 = document.querySelector('#changeBtn2');
let changeBtn3 = document.querySelector('#changeBtn3');

//  toogle paragrafi
changeBtn1.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo=>{
        paragrafo.classList.toggle('alakazam')
    })
})

//  colori random
changeBtn2.addEventListener('click', ()=>{
    paragrafi.forEach(paragrafo=>{
        let r = Math.floor(Math.random()*(255 - 0 + 1) + 0)
        let g = Math.floor(Math.random()*(255 - 0 + 1) + 0)
        let b = Math.floor(Math.random()*(255 - 0 + 1) + 0)

        paragrafo.style.color = `rgb(${r}, ${g}, ${b})`
    })
})

//   grassetto
changeBtn3.addEventListener('click' , ()=>{
    paragrafi.forEach(paragrafo=>{
        paragrafo.classList.toggle('grassetto')
    })

})
