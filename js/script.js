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

    /* burger */

  let burger = document.querySelector('.burger');
  let burgerMenuOpen = document.querySelector('.burger-menu');
  let burgerMenuClose = document.querySelector('.burger-close');

  burger.addEventListener('click',

    function () {

      burgerMenuOpen.classList.toggle('burger--visible');

    });

    burgerMenuClose.addEventListener('click', 

    function () {

      burgerMenuOpen.classList.remove('burger--visible');

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
        // slidesPerView: 4, 
        // loop: true,
        // spaceBetween: 30,

        breakpoints: {
          
        310: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },

        540: {
          slidesPerView: 2,
          spaceBetween: 30,
       },

       860: {
        slidesPerView: 3,
        spaceBetween: 30,
     },

        1000: {
          slidesPerView: 4,
          spaceBetween: 30,
      },



      },
        // pagination: {
        //   el: '.swiper-pagination', 
        // },

        navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev', 
        }, 

      });

      /* accordion */

      new Accordion('.accordion-container', {
        openOnInit: [0]
      }
      );

      document.querySelectorAll('.guests-mame-list__link').forEach(function(tabsBtn){ 
        tabsBtn.addEventListener('click', function(e){ 
          const path = e.currentTarget.dataset.path;
    
        // document.querySelectorAll('.guests-mame-list__link').forEach(function(btn){ 
        //   btn.classList.remove('guests-mame-list__link--active')}); 
        //   e.currentTarget.classList.add('guests-mame-list__link--active');
    
          document.querySelectorAll('.guests-profile').forEach(function(tabsBtn){ 
            tabsBtn.classList.remove('guests-profile--active')});
    
            document.querySelector(`[data-target="${path}"]`).classList.add('guests-profile--active'); 
          }); 
        });
    
        /* modal */

        let btnOpenModal = document.querySelector('.modal-btn');
        let openModalWindow = document.querySelector('.modal');
        let closeModalWindow = document.querySelector('.btn-closed-modal');

        btnOpenModal.addEventListener('click',

    function () {

      openModalWindow.classList.toggle('modal--visible');

    });

    closeModalWindow.addEventListener('click', 

    function () {

      openModalWindow.classList.remove('modal--visible');

    });


    /* form */

    const validation = new JustValidate('.forus-form',
{
  errorLabelCssClass: 'just-validate-error-label',
  errorLabelStyle: {
    color: '#D52B1E',
  }
}
);

validation


.addField('.forus-form__message', [
  {
    rule: 'required',
    errorMessage: '???? ???? ?????????? ??????????????????',
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: '?????????????????????? ?????????????????????? ???????????????? 3',
  },
  {
    rule: 'maxLength',
    value: 500,
    errorMessage: '?????????????????????? ?????????????????????? ???????????????? 500',
  },
])

  .addField('.forus-form__name', [
    {
      rule: 'required',
      errorMessage: '???? ???? ?????????? ??????',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '?????????????????????? ?????????????????????? ???????????????? 3',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: '?????????????????????? ?????????????????????? ???????????????? 30',
    },
    {
      rule: 'customRegexp',
      value: /^[a-zA-Z??-????-??????]+$/,
      errorMessage: '????????????',
    },
  ])

  .addField('.forus-form__email', [
    {
      rule: 'required',
      errorMessage: '???? ???? ?????????? E-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Email ???????????? ???? ??????????',
    },
  ])

  
  /* choices */

  const element = document.querySelector('.transfers-select');
  const choices = new Choices(element, {
    searchEnabled: false,
    openState: 'is-open',
  });


  
