const img = document.querySelector(".img")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2");
let p1 = document.querySelector(".p1")
const rep = document.querySelector(".rep")

function image (img, image){

img.addEventListener("click", () =>{
    img.style.transform = "scale(150%)"
    p1.textContent = `L'image que vous avez séléctionné est: ${image}`
    img.style.border = "2px solid red"
})





}

image(img, img.alt)
image(img1, img1.alt)
image(img2, img2.alt)