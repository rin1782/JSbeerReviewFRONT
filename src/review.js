const newReview = document.querySelector("#new-review")
const reviewForm = document.querySelector("#review-form")

class Review {
    constructor({id, content}){
        this.content = content

        this.element = document.createElement("div")
        this.element.id = `review-${id}`
        this.reviewsList = document.querySelector("#reviews-list")
    
      }

    static fetchReviews(id){

        fetch(`http://localhost:3000/beers/${id}/reviews`)
        .then(res => res.json())
        .then(reviewInfo => {
                reviewInfo.forEach(review => {
                    let r = new Review(review)
                    r.addToDom()
                })
        })

    }

    static createReview(e){
        e.preventDefault()
        let content = document.querySelector("#content").value
        let beerID = document.querySelector("#beer_id").value

        reviewForm.reset()

        let reviewObj = {
            content
        }

        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(reviewObj)
        }

        fetch(`http://localhost:3000/beers/${beerID}/reviews`, config)
        .then(res => res.json())
        .then(res => {
            let r = new Review(res)
            r.addToDom()
            newReview.style.display=""
            reviewForm.style.display="none"

        })
    }

    static listenForEvents(){
        newReview.addEventListener('click', this.showForm)
        reviewForm.addEventListener('submit', (e) => Review.createReview(e))
        home.addEventListener('click', this.goHome)
    }


    static showForm(){
        newReview.style.display="none"
        reviewForm.style.display=""
    }

    addToDom(){
        this.reviewsList.appendChild(this.setElementHTML())
    }

    static goHome(){
        beerPage.style.display="none"
        beerContainer.style.display=""
    }

    setElementHTML(){
         this.element.innerHTML = `
         <p>${this.content}</p>
         `   
         return this.element
    }
}