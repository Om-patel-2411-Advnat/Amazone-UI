document.addEventListener('DOMContentLoaded' , function(){
    const carousel = document.querySelector(".carousel");
    const carouselTrack = document.querySelector(".carouselTrack");
    const slides = Array.from(carouselTrack.children);
    const  nextbtn = document.querySelector('.next');
    const backbtn = document.querySelector('.back');

    let currentIndex = 0;
    const slideCount = slides.length;
    // console.log(carouselTrack); //from this we will get the whole div of CarouselTrack 
    // console.log(slides); // and from the carouselTrack dic we will count the images 

    function gotoslide(index){
        // console.log(index); //here we will ge the current index of the image 
        currentIndex = (index +slideCount) % slideCount;
        // console.log(currentIndex); //this will se the value of the current index
        const offset = -currentIndex * 100;
        // console.log(offset); //make the width of every image 100%
        carouselTrack.style.transform = `translateX(${offset}%)`;
    }
    nextbtn.addEventListener('click' , function(){
        gotoslide(currentIndex + 1);
    })
    backbtn.addEventListener('click' , function(){
        gotoslide(currentIndex - 1);
    })
    //auto-play every 4 seconds
    setInterval(() => {
        gotoslide(currentIndex + 1);
    },10000);
    //start from the first image 
    gotoslide(0);
})