export default class Slides {
    constructor({container = null, btns = null, next = null, prev = null, active = '', animate, auto} = {}) {
        this.container = document.querySelector(container);
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slides = this.container.children;
        this.active = active;
        this.animate = animate;
        this.auto = auto;
        this.slideIndex = 1;
    }

}