import MainSliders from './modules/slider/MainSliders';
import SliderMini from './modules/slider/slider-mini';
import Difference from './modules/difference';
import VideoPlay from './modules/playVideo';
import Forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSliders({ container : '.page', btns : '.next'});
    slider.render();

    const showUpSlider = new SliderMini ({container: '.showup__content-slider', next: '.showup__next', prev: '.showup__prev', active: 'card-active', animate: true});
    showUpSlider.init();

    const modulesSlider = new SliderMini ({container: '.modules__content-slider', next: '.modules__info-btns .slick-next', prev: '.modules__info-btns .slick-prev', active: 'card-active', animate: true, auto: true});
    modulesSlider.init();

    const feedSlider = new SliderMini ({container: '.feed__slider', next: '.feed__slider .slick-next', prev: '.feed__slider .slick-prev', active: 'feed__item-active'});
    feedSlider.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new Forms().init();


    const player = new VideoPlay('.showup .play', '.overlay');
    player.init();
});