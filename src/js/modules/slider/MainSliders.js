import Slides from "./Slides";

export default class MainSliders extends Slides {
    constructor(slides) {
        super(slides);
    }
    showSlides(n) {
        try {
            if (n > this.slides.length) {
                this.slideIndex = 1;
            }
            if (n < 1) {
                this.slideIndex = this.slides.length;
            }
    
            this.slides.forEach(item => {
                item.style.display = 'none';
                item.classList.add('imgFadeIn');
            });
    
            this.slides[this.slideIndex - 1].style.display = 'block';
    
                this.hanson.style.opacity = '0';
                if (n === 3) {
                    setTimeout(() => {
                        this.hanson.style.opacity = '1';
                        this.hanson.classList.add('fadeInBottom');
                    }, 3000);
                } else {
                    this.hanson.classList.remove('fadeInBottom');
                }
        } catch (error) {
            
        }
        
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bingTrigger() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });
        this.showSlides(this.slideIndex);

        this.prevModules.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.plusSlides(-1);
            });
        });
        this.nextModules.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.plusSlides(1);
            });
        });
    }

    render() {
        try {
            try {
                this.hanson = document.querySelector('.hanson'); 
            } catch (error) {}
            this.bingTrigger();
        } catch (error) {
        }
    }
}