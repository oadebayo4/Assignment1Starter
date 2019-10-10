// Enter your JavaScript for the solution here...
// Get refences to the select, top text and bottom text

const memeOptions = document.querySelector("#meme-image");
const inputTopText = document.querySelector("#meme-top-text");
const inputBottomText = document.querySelector("#meme-bottom-text");
const memeImage = document.querySelector(".meme-display img");
const memeTopText = document.querySelector(".meme-display .top-text");
const memeBottomText = document.querySelector(".meme-display .bottom-text");
const memeForm = document.querySelector(".meme-form");
const errorMessageDiv = document.querySelector(".error");

const originalSRC = memeImage.src;
const originalALT = memeImage.alt;

memeOptions.addEventListener("change", e => {
  const imageUrl = `img/${event.target.value}.png`;
  console.log(imageUrl);

  memeImage.src = imageUrl;

  memeImage.alt = event.target.value.replace(/-/g, " ");
});

// inputTopText.addEventListener("keyup", e => {
//     memeTopText.innerHTML = e.target.value;
// });
// inputBottomText.addEventListener("keyup", e => {
//     memeBottomText.innerHTML = e.target.value;
// });

memeForm.addEventListener("submit", function(e) {
  e.preventDefault();
  memeTopText.innerHTML = e.srcElement[1].value;
  memeBottomText.innerHTML = e.srcElement[2].value;
  if (inputTopText.value == "" || inputBottomText.value == "") {
    errorMessageDiv.innerHTML =
      "The top and bottom text fields cannot be blank \n";
  }
  if (memeOptions.value == "") {
    errorMessageDiv.innerHTML +=
      "A valid image must have been selected from the drop-down";
  }
});

memeForm.addEventListener("reset", function(e) {
  e.srcElement[1].value = memeTopText.innerHTML = "";
  e.srcElement[2].value = memeBottomText.innerHTML = "";
  memeImage.src = originalSRC;
  memeImage.alt = originalALT;
});
