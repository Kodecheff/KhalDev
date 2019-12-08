var slideImage = document.getElementById("slideImage");
var arraySlideImage = ["image1.jpg", "image2.jpg", "image3.jpg"];
var imageIndex = 0;

// Change the image source in the HTML document
function changeImage(){
    document.getElementById("slideImage").setAttribute("src", arraySlideImage[imageIndex]);
    imageIndex++;

    if(imageIndex >= arraySlideImage.length){
        imageIndex = 0;
    }

}

setInterval(changeImage, 3000);