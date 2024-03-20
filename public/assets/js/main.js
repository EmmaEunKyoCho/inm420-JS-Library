// fullpage
new fullpage('#fullpage', {
    sectionSelector: '.fullpage-section',
    slideSelector: '.fullpage-slide',
    css3: true,
    navigation: false,
    scrollingSpeed: 600,
    fitToSectionDelay: 100,
    scrollOverflow: false,
    sectionsColor : ['#434682', '#c34511', '#334455', '#d10099'],
    credits: { enabled: false },
    // licenseKey: '',  ( Not Free..)
});

// lightbox2
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true,
})

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,

    autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

// typeit
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#hero-copy-head", {
        speed: 50,
        startDelay: 1000,
        waitUntilVisible: true,
        afterComplete: function (instance) {
            instance.destroy();
        }
    })
    .pause(1500)
    .move(-9, { delay: 1000 })
    .type(' Timeless')
    .pause(1000)
    .go();
});
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#hero-copy-body", {
        speed: 1,
        startDelay: 8000,
        waitUntilVisible: true,
        afterComplete: function (instance) {
            instance.destroy();
        }
    })
    .go();
});

