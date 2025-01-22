// seleziono gli elementi di output in pagina
const list = document.querySelector('.list-group');

//apro ciclo for per generare mail causali
for (let i = 0; i < 10; i++){

    //faccio partire la richiesta Ajax all'api per ricevere indietro la mail generata
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => {
        // console.log(response);
        const email = response.data.response;
        console.log(email);
        
        //inserisco in pagina il risultato 
        list.innerHTML += `<li>${email}</li>`;
        
        
    })  //altrimenti genera un errore
        .catch(error => {
        

    });
    

};




