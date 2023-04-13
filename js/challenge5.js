const image = document.querySelector('#thumbs img');

image.addEventListener('mouseover', function(event) {
  console.log("Hovering")
  console.log(image.src)
  console.log(image.alt)

document.querySelector("#display").style.backgroundImage = "url('" +
element.src + "')"
document.querySelector("#display").innerHTML = element.alt
},
function challenge5leave(element){
console.log("Leaving")
document.querySelector("#display").style.backgroundImage = ""
document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text."
});