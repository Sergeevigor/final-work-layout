  /* search */
  
  let btnsearch = document.querySelector('.header-btn-search');
  let searchOpen = document.querySelector('.header-menu-search');
  let searchClose = document.querySelector('.btn-searc-open');

    btnsearch.addEventListener('click',

    function () {

      searchOpen.classList.toggle('search--visible');

    });

    searchClose.addEventListener('click', 

    function () {

      searchOpen.classList.remove('search--visible');

    });

  /* podcasts show more */

    const btnMore = document.querySelector('.podcasts-btn-more')
    const podcastsItem = document.querySelectorAll('.podcasts-list__item')

      btnMore.addEventListener('click', () => {
        podcastsItem.forEach(el => { el.classList.add('podcasts-list__item--visible') });
        btnMore.classList.add('podcasts-btn-more--hidden');
      });


      /* button pause play */

      let btnPlay = document.querySelector('.header-btn-play');
      let imgPause = document.querySelector('.header-img-pause');
      let imgPlay = document.querySelector('.header-img-play');
  
      btnPlay.addEventListener('click',
  
      function () {
  
        imgPause.classList.toggle('header-img-pause--visible');
        imgPlay.classList.toggle('header-img-play--none');

      });

    
      let btnPlayNow = document.querySelector('.header-btn-play-now');
      let imgPauseNow = document.querySelector('.header-img-pause-now');
      let imgPlayNow = document.querySelector('.header-img-play-now');
  
      btnPlayNow.addEventListener('click',
  
      function () {
  
        imgPauseNow.classList.toggle('header-img-pause--visible');
        imgPlayNow.classList.toggle('header-img-play-now--none');

      });


      /* podcasts button play pause */

      let playBtns = document.querySelectorAll('.podcast-btn-play');
      playBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          btn.querySelector('.podcast-img-play').classList.toggle('podcast-img-play-none')
          btn.querySelector('.podcast-img-pause').classList.toggle('podcast-img-pause-visible')
        });
      })



      /* slider */

      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 4, 
        loop: true,
        spaceBetween: 30,

        // pagination: {
        //   el: '.swiper-pagination', 
        // },

        navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev', 
        }, 
      });


     