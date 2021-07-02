import Slides from "./Slides";

export default class SliderMini extends Slides {
    constructor(container, next, prev, active, animate, auto) {
        super(container, next, prev, active, animate, auto);
    }

    bindSlider() {
        

        this.next.addEventListener('click', () => {
            let active = this.slides[this.slides.length - 1];
            this.container.appendChild(this.slides[0]);
            this.bindActive();
            
                for (let i = this.slides.length - 1; i > 0; --i) {
                    if (this.slides[i].closest('button')) { 
                        this.container.insertBefore(this.slides[i], this.slides[this.slides.length - 2]);
                    }
                }
            //     this.container.insertBefore(this.slides[1], active);
            // } else if (this.slides[2].closest('button')) {
            //     this.container.insertBefore(this.slides[2], active);
            // }
        });

        this.prev.addEventListener('click', () => {
            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== "BUTTON") { 
                    console.log('pop');
                    let active = this.slides[this.slides.length - 1];
                    this.container.insertBefore(active, this.slides[0]);
                    this.bindActive();
                    break;
                }
            }
           
               
                // if (active.closest('button')) {
                //     this.container.insertBefore(active, this.slides[2]);
                // } else if (this.slides[this.slides.length - 2].closest('button')) {
                //     this.container.insertBefore(this.slides[this.slides.length - 2], this.slides[2]);
                // }
        });
    }

    autoSlider() {
        if (this.auto) {
          const autoplay = setInterval(() => {
                this.container.appendChild(this.slides[0]);
                this.bindActive();
            }, 5000);
            this.next.addEventListener('mouseenter', () => {
                clearInterval(autoplay);
            });
            this.prev.addEventListener('mouseenter', () => {
                clearInterval(autoplay);
            });
            this.container.addEventListener('mouseenter', () => {
                clearInterval(autoplay);
            });
            this.next.addEventListener('mouseleave', () => {
                this.autoSlider();
            });
            this.prev.addEventListener('mouseleave', () => {
                this.autoSlider();
            });
            this.container.addEventListener('mouseleave', () => {
                this.autoSlider();
            });
        }
    }

    bindActive() {
            this.slides.forEach(item => {
                item.classList.remove(this.active);
                if (this.animate) {
                    item.querySelector('.card__controls-arrow').style.opacity = '0';
                    item.querySelector('.card__title').style.opacity = '0.4';
                }
            });
                this.slides[0].classList.add(this.active);
                if (this.animate) {
                    this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
                    this.slides[0].querySelector('.card__title').style.opacity = '1';
                }
    }

    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-item: flex-start;
        `;

        this.bindSlider();
        this.bindActive();
        this.autoSlider();
    }
}