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

document.addEventListener('DOMContentLoaded' , function(){
    const track = document.querySelector('.track');
    const petslides = Array.from(track.children);
    const prev_btn = document.querySelector('.prev-btn');
    const frow_btn = document.querySelector('.forw-btn');

    let currentSlide = 0 ;
    const totalslides = petslides.length; 

    function slidechange(slide){
        currentSlide = (slide + totalslides) % totalslides;
        const size = -currentSlide * 100;
        track.style.transform = `translateX(${size}%)`;
    }
    prev_btn.addEventListener('click' , function(){
        slidechange(currentSlide + 1);
    })
    frow_btn.addEventListener('click' , function(){
        slidechange(currentSlide - 1);
    })
    slidechange(0);
})

document.addEventListener('DOMContentLoaded' , function(){
    const track_bike = document.querySelector('.track-bike');
    const bikeslides = Array.from(track_bike.children);
    const prev_bike = document.querySelector('.prev-bike');
    const frow_bike = document.querySelector('.forw-bike');

    let currentSlide = 0 ;
    const totalslides = bikeslides.length; 

    function bikechange(bike){
        currentSlide = (bike + totalslides) % totalslides;
        const b_size = -currentSlide * 100;
        track_bike.style.transform = `translateX(${b_size}%)`;
    }
    prev_bike.addEventListener('click' , function(){
        bikechange(currentSlide + 1);
    })
    frow_bike.addEventListener('click' , function(){
        bikechange(currentSlide - 1);
    })
    bikechange(0);
})

document.addEventListener('DOMContentLoaded' , function(){
    const track_phone = document.querySelector('.track-phone');
    const phoneslides = Array.from(track_phone.children);
    const prev_phone = document.querySelector('.prev-phone');
    const frow_phone = document.querySelector('.forw-phone');

    let currentSlide = 0 ;
    const totalslides = phoneslides.length; 

    function phonechange(phone){
        currentSlide = (phone + totalslides) % totalslides;
        const b_size = -currentSlide * 100;
        track_phone.style.transform = `translateX(${b_size}%)`;
    }
    prev_phone.addEventListener('click' , function(){
        phonechange(currentSlide + 1);
    })
    frow_phone.addEventListener('click' , function(){
        phonechange(currentSlide - 1);
    })
    phonechange(0);
})

document.addEventListener('DOMContentLoaded', function () {

  const paging_track = document.querySelector(".paging-track");
  const pages = Array.from(paging_track.children);
  const nextbtn_paging = document.querySelector('.next-page');
  const backbtn_paging = document.querySelector('.prev-page');
  const page = document.querySelector('.page-no');
  const gostart = document.querySelector('.gostart-btn');

  let currentpage = 0;
  const pageCount = pages.length;

  function goTopage(index) {
    currentpage = (index + pageCount) % pageCount;
    page.innerHTML = `${currentpage + 1}`;
    const offset = -currentpage * 100;
    paging_track.style.transform = `translateX(${offset}%)`;
  }

  nextbtn_paging.addEventListener('click', () => {
    goTopage(currentpage + 1);
  });

  backbtn_paging.addEventListener('click', () => {
    goTopage(currentpage - 1);
  });

  gostart.addEventListener('click' , ()=>{
    goTopage(0);
  })

  goTopage(0);
});
