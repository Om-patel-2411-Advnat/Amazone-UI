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


let products = [];

for(let i=0 ; i< 27 ;i++){
    products.push({
        img: "./images/paging-1.jpg",
        tittle: "Dr. Sheth's Neem & Salicylic Acid Serum For Active Acne,Blackheads & Open Pores|2% Salicylic Acid & 1% Niacinamide|For Oily &" ,
        discount: "-12%",
        Price:"₹438.00",
        UnitPrice: "(₹438.00/100 g)",
        button:"Limited time deal"
    });
}
 function createProductCard(products){

    return `
    
    <div class="flex flex-col flex-shrink-0">
        <div class="h-auto w-auto">
            <img src="${products.img}">
        </div>
        <p class="text-blue-500 w-[160px] text-xs line-clamp-4">${products.tittle}</p>
        <p class="text-red-500">${products.discount}<span class="text-black">${products.Price}</span></p>
        <p class="text-xs">${products.UnitPrice}</p>
        <button class="h-[1.5rem] w-[8rem] bg-red-600 text-white text-xs rounded-sm">${products.button}</button>    
    </div>

    `;
 }

const container = document.querySelector(".paging-track");
const nextpage = document.querySelector(".next-page");
const prevpage = document.querySelector(".prev-page");
const pageNo = document.querySelector(".page-no");
const totalPagesText = document.querySelector(".total-pages");
const gostart_btn  = document.querySelector('.gostart-btn');

function getItemsPerPage() {
    const w = window.innerWidth;

    if (w >= 1536){
        return 9;
    }else if (w >= 1280){ 
        return 8
    }else if (w >= 1024){
       return 6; 
    } else if (w >= 768){
        return 5;
    } else if (w >= 640){
        return 4;
    } else{
        return 2;
    }
}

let currentPage = 0;
let itemsPerPage = getItemsPerPage();
let totalPages = Math.ceil(products.length / itemsPerPage);

function renderPage() {

    itemsPerPage = getItemsPerPage();
    totalPages = Math.ceil(products.length / itemsPerPage);

    if (currentPage >= totalPages){
        currentPage = totalPages - 1;
    } 

    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    const visibleProducts = products.slice(start, end);

    setTimeout(()=>{
        container.innerHTML = "";
    
        visibleProducts.forEach(product => {
            container.innerHTML += createProductCard(product);
        });
    
    },1000);
    pageNo.textContent = currentPage + 1;
    totalPagesText.textContent = totalPages;

    prevpage.disabled = currentPage === 0;
    nextpage.disabled = currentPage === totalPages - 1;
}
prevpage.addEventListener("click", () => {

    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
});
nextpage.addEventListener("click", () => {

    if (currentPage < totalPages - 1) {
        currentPage++;
        renderPage();
    }
});
gostart_btn.addEventListener('click', () => {
    currentPage = 0;
    renderPage();
});


window.addEventListener("resize", () => {
    const newItems = getItemsPerPage();
    if (newItems !== itemsPerPage) {
        renderPage();
    }
});
renderPage();



