import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("html").classList.add("is-loaded");
    let splideInstance;

    function initSplide() {
        if (window.innerWidth <= 767) {
            if (!splideInstance) {
                splideInstance = new Splide('.step-slider', {
                    type   : 'slide',
                  
                    arrows: true,
                    pagination: false,
                    gap: 15,
                    drag: true,
                }).mount();
            }
        } else {
            if (splideInstance) {
                splideInstance.destroy();
                splideInstance = null;
            }
        }
    }

    initSplide();

    window.addEventListener('resize', initSplide);



    new Splide( '.skins-splide',{
        focus: 'center',
        type   : 'loop',
        autoWidth: true,
        clones: 2,
        arrows: false,
        pagination: false,
        gap: 48,
        // autoplay: true,
        // interval: 4000,
        // pauseOnHover: true,
        drag: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        autoScroll: {
            speed: 2,
            pauseOnHover: false,
        },
        breakpoints: {
            767: {
                gap: 20,
                autoScroll: {
                    speed: 1,
                },
            },
      }
    } ).mount( { AutoScroll } );
});