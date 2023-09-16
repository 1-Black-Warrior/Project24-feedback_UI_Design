const rating = document.querySelectorAll('.rating')
const ratingcontainer = document.querySelector('.rating-container')
const sendbtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'satisfied'


ratingcontainer.addEventListener('click' , (e) =>{
    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})


sendbtn.addEventListener('click' , (e) =>{
    panel.innerHTML = `
           <i class = "fas fa-heart"></i>
           <strong> Thank You! </strong>
           <br>
           <strong> FeedBack : ${selectedRating} </strong>
           <p>We'll use your feedback to improve our customer support</p>
    `
})


function removeActive(){
    for(let i=0; i< rating.length ; i++){
            rating[i].classList.remove('active')
    }
}