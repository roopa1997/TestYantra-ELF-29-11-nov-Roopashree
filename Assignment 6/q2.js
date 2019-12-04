// get all img class
let images = document.getElementsByTagName('img')
let c1 = document.getElementById('c1')
c1.className = "c1"
for (let element of images) {
    element.className = "img"
}

let img1 = document.getElementById('img1')
img1.addEventListener("mouseover", function () {
    document.getElementById("img2").src = "./images/Melaka.jpg";
    document.getElementById("img3").src = "./images/europe.jpg";
    
})
img1.addEventListener('mouseout',function(){
    document.getElementById("img2").src = "./images/Bintan-Island.jpg";
    document.getElementById("img3").src = "./images/Digha-West-Bengal.jpg";
})
img1.addEventListener('click',function(){
   /*  document.getElementById('img4').scr="./images/Digha-West-Bengal.jpg"
    document.getElementById('img5').src="./images/img3.jpg" */

    document.getElementById("img4").src = "./images/Mahabalipuram.jpg";
    document.getElementById("img5").src = "./images/Digha-West-Bengal.jpg";

})