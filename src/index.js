const beerForm = document.getElementById("beerForm")
const beerInput = document.getElementById("beerInput")
const beerList = document.getElementById("beerList")
const beerURL = "http://localhost:3000/beers"
const reviewURL = "http://localhost:3000/reviews"


function fetchBeers(){
    fetch(beerURL)
    .then(Response => Response.json())
    .then(beers => beers.forEach(displayBeer))

}
   

    
    // .then(beers => beers.forEach(beer => displayBeer(beer.content)))
    

    beerForm.addEventListener("submit", submitBeer)

function submitBeer(){
    event.preventDefault()
    const configObj= {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: beer.name
        })
    }
    
        fetch(beerURL, configObj)
        .then(r => r.json())
        .then(displayBeer)
        
}


function displayBeer(beer){
    const li = document.createElement("li")
    li.dataset.id = beer.id

    const h3 = document.createElement("h3")
    h3.innerText = beer.name
    console.log(beer)
    const reviewForm = document.createElement("form")
    reviewForm.innerHTML += `
        <input type="text" id="reviewInput">
        <input type="submit">
        `
        reviewForm.addEventListener("submit", renderReview)

        const reviewList = document.createElement("ul")


        li.append(h3, reviewForm, reviewList)
        beerList.appendChild(li)

        beerForm.reset()
}

    function renderReview(e){
        e.preventDefault()
        const reviewInput = e.target.children[0].value
        const reviewList = e.target.nextElementSibling

        const li = document.createElement("li")
        li.innerText = reviewInput
        reviewList.appendChild(li)

        submitReview(reviewInput)

        e.target.reset()
    }

    function submitReview(review){
        fetch(reviewURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                content: review
            })
        })
    
}

fetchBeers()