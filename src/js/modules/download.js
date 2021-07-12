export default class Download {
    constructor(trigger) {
        this.trigger = document.querySelectorAll(trigger);
        this.path = 'assets/img/evolve6.jpg';
    }

    download(path) {
        const elem = document.createElement('a');

        elem.style.display = 'none';
        elem.setAttribute('href', path);
        elem.setAttribute('download', 'img');
        elem.click();
        elem.remove();
    }

    init() {
        this.trigger.forEach(item => {
            item.addEventListener('click', () => {
                this.download(this.path);
            });
        });
    }
}