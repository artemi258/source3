export default class Slides {
    constructor({container = null, btns = null, next = null, prev = null, nextModules = null, prevModules = null, active = '', animate, auto} = {}) {
        try {
            this.container = document.querySelector(container);
            this.btns = document.querySelectorAll(btns);
            this.prev = document.querySelector(prev);
            this.next = document.querySelector(next);
            this.prevModules = document.querySelectorAll(prevModules);
            this.nextModules = document.querySelectorAll(nextModules);
            this.slides = this.container.children;
            this.active = active;
            this.animate = animate;
            this.auto = auto;
            this.slideIndex = 1;
        } catch (error) {
            
        }
    }

}