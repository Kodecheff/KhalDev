// Set the content in the slider to change automatically

var slideContent = document.getElementById("slider-content");

var arraySlideContent = [
    `<h1>A WEB DEVELOPMENT AND DESIGN AGENCY</h1>
    <p>We love the web and what we do. We work best with our client to 
      deliver the best quality website for their needs </p>`,

      `<h1>Responsive Design</h1>
      <p>We provide the best responsive design for your website</p>`
];
slideContentIndex = 0;

function changeContent(){
    slideContent.innerHTML = (arraySlideContent[slideContentIndex]);
    slideContentIndex++;

    if(slideContentIndex >= arraySlideContent.length){
        slideContentIndex = 0;
    }
}

setInterval(changeContent, 3000);
