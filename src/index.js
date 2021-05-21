const beerForm = document.getElementById("beerForm")
const beerInput = document.querySelector("#beerInput")
const beerList = document.getElementById("beerList")
const newBeer = document.getElementById("newBeer")

const beerURL = "http://localhost:3000/beers"



document.addEventListener('DOMContentLoaded', function(){
    Beer.fetchBeers() 
})

beerForm.addEventListener("submit", submitBeer)

function submitBeer(e){

    e.preventDefault();
    
    const beerObj = {
        name: e.target[0].value,
    }
    
    fetch(beerURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify(beerObj)
    })
        .then(r => r.json())
        .then(res => {
            let b = new Beer(res)
            b.showBeer()
        })
        // .then(data =>  {() => {Beer.showBeer(data)}})
}
        










