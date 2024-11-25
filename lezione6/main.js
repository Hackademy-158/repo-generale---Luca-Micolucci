
// ricerca del contatto
// modifica contatto

// elementi catturati
let cardsWrapper = document.querySelector('#cardsWrapper');
let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');
let dateInput = document.querySelector('#dateInput');
let txtInput = document.querySelector('#txtInput')

// buttons
let showBtn = document.querySelector('#btnMostra');
let btnAggiungi = document.querySelector('#addContactBtn');
let removeContactBtn = document.querySelector('#removeContactBtn');

let txt = document.querySelector('#BtnTxt1')

const rubrica = {
    
    contacts : [
        {name: "Mattia", number : 3333333333, date : "", txt : ""},
        {name: "Sergio", number : 4444444444, date : "", txt : ""},
        {name: "Anna", number : 5555555555, date : "", txt : ""},
    ],
    
    
    
    //  funzione mostra contatto    
    showContacts : function(){
        cardsWrapper.innerHTML = ""
        this.contacts.forEach( (contact)=>{
            let div = document.createElement('div');
            div.classList.add('col-12', 'col-md-8');
            div.innerHTML = `
                <div class="card-custom rounded-4 d-flex align-items-center justify-content-between px-5 my-2">
                    <p class="pt-3 fw-bold fs-5">
                        ${contact.name}
                    </p>
            
                    <p class="pt-3 ">
                        ${contact.number}
                    </p>
            
                    <i>${contact.date}</i>
            
                    <p>${contact.txt}</p>
            
            
                </div>
            `
            
            cardsWrapper.appendChild(div)
        } )
    },


    //  funzione aggiungi contatto 
    
    addContacts : function (newNome, newNumero, newTempo, newtxt){
        this.contacts.push ({name:newNome, number:newNumero,date:newTempo, txt:newtxt})
    }
    
    
}    




let confirm = false

showBtn.addEventListener('click', ()=>{
    if(confirm == false){
        rubrica.showContacts();
        confirm =true;
        txt.innerText = 'Nascondi';
        console.log(confirm);   
    }else{
        cardsWrapper.innerHTML = "";
        confirm = false;
        txt.innerText = 'Mostra';
        console.log(confirm);
        
    }
})

btnAggiungi.addEventListener('click', ()=>{
    rubrica.addContacts(nameInput.value, numberInput.value, dateInput.value, txtInput.value)
})    

