export default class Accordeon {
    constructor(button, content) {
        this.button = document.querySelectorAll(button);
        this.content = document.querySelectorAll(content);
    }

    showContent() {
        this.content.forEach(item => {
            item.style.display = 'none';
        });
    }

    hideContent() {
        this.button.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                this.content.forEach(item => {
                    item.classList.remove('fadeInBottomAccordBack');
                });
                if (this.content[i].classList.contains('fadeInBottomAccord')) {
                    this.content[i].classList.remove('fadeInBottomAccord');
                    this.content[i].classList.add('fadeInBottomAccordBack');
                    setTimeout(() => {this.content[i].style.display = 'none';}, 300);
                    
                } else if (!this.content[i].classList.contains('fadeInBottomAccord')) {
                    this.content[i].classList.add('fadeInBottomAccord');
                    this.content[i].style.display = 'flex';
                }
                
                
            });
        });
    }

    init() {
        this.showContent();
        this.hideContent();
    }
}