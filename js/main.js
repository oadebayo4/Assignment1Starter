// Enter your JavaScript for the solution here...
// Get refences to the select, top text and bottom text

const memeOptions = document.querySelector('#meme-image')
const inputTopText = document.querySelector('#meme-top-text')
const inputBottomText = document.querySelector('#meme-bottom-text')
const memeImage = document.querySelector('.meme-display img')
const memeTopText = document.querySelector('.meme-display .top-text')
const memeBottomText = document.querySelector('.meme-display .bottom-text')




memeOptions.addEventListener('change', (e) => {
    const imageUrl = `/img/${event.target.value}.png`;
    console.log(imageUrl);
    
    memeImage.src = imageUrl;
    const temp = Array.from (e.target.options)
    const index = e.target.selectedIndex
   console.log(temp[index])

})

inputTopText.addEventListener('keydown', (e) =>{
    memeTopText.innerHTML = e.target.value
    
})
inputBottomText.addEventListener('keydown', (e) =>{
    memeBottomText.innerHTML = e.target.value
    
})