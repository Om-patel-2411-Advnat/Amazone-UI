document.addEventListener('DOMContentLoaded', function () {

  const paging_track = document.querySelector(".paging-track");
  const pages = Array.from(paging_track.children);
  const nextbtn_paging = document.querySelector('.next-page');
  const backbtn_paging = document.querySelector('.prev-page');
  const page = document.querySelector('.page-no');
  const gostart = document.querySelector('.gostart-btn')

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
