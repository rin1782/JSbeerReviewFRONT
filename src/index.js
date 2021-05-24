const baseURL = "http://localhost:3000/"
const beerContainer = document.getElementById("beers-list")
const beerPage = document.getElementById("beer-show")
const home = document.getElementById("home")
const allBeers = document.getElementById("allBeers")

const sort = document.getElementById("sort-beers")
sort.addEventListener("click", (e) => Beer.handleSort(e))

document.addEventListener('DOMContentLoaded', function(){
  Beer.fetchBeers() 
  Review.listenForEvents()
})


// function handleSort(e){
//   let beers = Beer.all.slice();
//   let sortedBeer = beers.sort(function(a, b) {
//     let nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     let nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
    
//     return 0;
//   });
//     allBeers.innerHTML = ""
//     sortedBeer.forEach(b => {
//       b.
//     })
// }

