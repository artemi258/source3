export default class VideoPlay {
    constructor(trigger, overlay) {
        this.btn = document.querySelectorAll(trigger);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
    }

    bindTriggers() {
        this.btn.forEach(btn => {
            if (btn.firstElementChild.classList.contains('closed')) {
                btn.setAttribute('data-disabled', 'true');
            }
            btn.addEventListener('click', () => {
                if (btn.getAttribute('data-disabled') !== 'true') {
                    this.activeBtn = btn;
                    if (document.querySelector('iframe#frame')) {
                        this.overlay.style.display = 'flex';
                        if (this.path !== btn.getAttribute('data-url')) {
                            this.path = btn.getAttribute('data-url');
                            this.player.loadVideoById({videoId: this.path});
                        }
                    } else {
                        this.path = btn.getAttribute('data-url');
                        this.createPlayer(this.path);
                    }
                }
               
            });
        });
    }

    bindCloseBtn() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
            events: {
                'onStateChange': this.onPlayerStateChange.bind(this)
              }
        });

        this.overlay.style.display = 'flex';
    }

    onPlayerStateChange(state) {
        try {
            this.blockedElem  = this.activeBtn.closest('.module__video-item').nextElementSibling;
        this.playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

        if (state.data == 0) {
            if (this.blockedElem.querySelector('.play__circle').classList.contains('closed')) {
                this.blockedElem.querySelector('.play__circle').classList.remove('closed');
                this.blockedElem.querySelector('svg').remove();
                this.blockedElem.querySelector('.play__circle').append(this.playBtn);
                this.blockedElem.querySelector('.play__text').textContent = 'play video';
                this.blockedElem.querySelector('.play__text').classList.remove('attention');
                this.blockedElem.style.opacity = 1;
                this.blockedElem.style.filter = 'none';
                this.blockedElem.querySelector('.play').setAttribute('data-disabled', 'false');
            }
        }
        } catch (error) {
            
        }
    }

    init() {
        if (this.btn.length > 0) {
            const tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            this.bindTriggers();
            this.bindCloseBtn();
        }
    }
}