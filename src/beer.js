const baseURL = "http://localhost:3000/"
const beerContainer = document.querySelector("#beers-list")
const beerPage = document.querySelector("#beer-show")


class Beer {
    static all = []
    constructor({id, name}){
        this.id = id
        this.name = name
        Beer.all.push(this)
    }

    static fetchBeers(){
        fetch(baseURL + "beers")
        .then(res => res.json())
        .then(beerInfo => {
            beerInfo.forEach(beer => {
                let newBeer = new Beer(beer)
                newBeer.addToDom()
            })
        })
    }

    handleClick(e){
        beerContainer.style.display="none"
        beerPage.style.display=""
        this.addToBeerPage()
        let beerID = parseInt(e.target.id.split("-")[1])
        Review.fetchReviews(beerID)

    }

    addToDom(){
        let beerName = document.createElement('li');
        beerName.innerText = this.name
        beerName.id = `beer-${this.id}`
        beerContainer.appendChild(beerName)
        beerName.addEventListener('click',(e) => this.handleClick(e))
    }

    addToBeerPage(){
        let div = document.createElement('div');
        let beerLi = document.createElement('h2');
        beerLi.innerText = this.name
        div.appendChild(beerLi)
        beerPage.prepend(div)
        let input = document.createElement('input')
        input.type="hidden"
        input.value= this.id
        input.id="beer_id"
        reviewForm.prepend(input)
    }

}