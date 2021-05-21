class Beer {
    static all = []
    constructor({id, name}){
        this.id = id;
        this.name = name;
        Beer.all.push(this)
    }

    static fetchBeers(){
        fetch(beerURL)
        .then(r => r.json())
        .then(data => {
            data.forEach(b => {
                let beer = new Beer(b)
                beer.showBeer()
            })
        })
    }
    
        showBeer(){
        const h3 = document.createElement("h3")
        const ul = document.createElement("ul")
        const reviewForm = document.createElement("form")
        reviewForm.innerHTML += `
            <input type="text" id="reviewInput">
            <input type="submit">
        `
        reviewForm.addEventListener("submit", (e) => {renderReview()})

        const reviewList = document.createElement("ul")

        
        h3.id = `beer-${this.id}`
        h3.innerText = this.name

        
        
        
        
        ul.append(h3, reviewForm, reviewList)
        beerList.appendChild(ul)
    }

        renderReview(e){
        e.preventDefault()
        const reviewInput = e.target.children[0].value
        const reviewList = e.target.nextElementSibling

        const li = document.createElement("li")
        li.innerText = reviewInput
        reviewList.appendChild(li)

        submitReview(reviewInput)

        e.target.reset()
    }

        submitReview(review){
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

        

    }}