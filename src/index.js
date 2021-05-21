const beerForm = document.getElementById("beerForm")
const beerInput = document.getElementById("beerInput")
const beerList = document.getElementById("beerList")

beerForm.addEventListener("submit", submitBeer)

function submitBeer(e){
    e.preventDefault()
    console.log(beerInput.value)
    const li = document.createElement("li")
    
    const h3 = document.createElement("h3")
    h3.innerText = beerInput.value

    const reviewForm = document.createElement("form")
    reviewForm.innerHTML += `
        <input type="text" id="reviewInput">
        <input type="submit">
        `
        reviewForm.addEventListener("submit", submitReview)

        const reviewList = document.createElement("ul")


        li.append(h3, reviewForm, reviewList)

        beerList.appendChild(li)

        beerForm.reset()
}

    function submitReview(e){
        e.preventDefault()
        const reviewInput = e.target.children[0].value
        const reviewList = e.target.nextElementSibling

        const li = document.createElement("li")
        li.innerText = reviewInput
        console.log(e.target)
}