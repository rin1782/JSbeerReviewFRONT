


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
        let beerName = document.createElement('h3');
        beerName.innerText = this.name 
        beerName.id = `beer-${this.id}`
        allBeers.appendChild(beerName)
        beerContainer.appendChild(allBeers)
        beerName.addEventListener('click',(e) => this.handleClick(e))
    }

    addToBeerPage(){
        let div = document.createElement('div');
        let beerLi = document.createElement('h2');
        beerLi.innerText = this.name
        div.appendChild(beerLi)
        beerPage.prepend(div)
        let input = document.createElement('input');
        input.type="hidden"
        input.value= this.id
        input.id="beer_id"
        reviewForm.prepend(input)
    }

    static handleSort(e){
        let beers = Beer.all.slice();
        let sortedBeer = beers.sort(function(a, b) {
          let nameA = a.name.toUpperCase(); // ignore upper and lowercase
          let nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          
          return 0;
        });
          allBeers.innerHTML = ""
          sortedBeer.forEach(b => {
              b.addToDom()
          })
          }
      }


