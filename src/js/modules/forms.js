export default class Forms {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.mask = document.querySelector('#phone');
    }

    postData(url, data) {
    const post = async () => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
        };
        return post();
    }

    sortingForm() {
        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                const formData = new FormData(item);

                this.postData('./assets/question.php', formData)
                .then(item => {
                    console.log(item);
                });
            });
        });
    }

    checkMailInputs() {
        const inputs = document.querySelectorAll('[name="email"]');
        inputs.forEach(item => {
            item.addEventListener('input', () => {
                if (item.value.match(/[а-яё]/ig)) {
                    item.value = '';
                }
            });
            
        });
    }

    phoneMask() {

        let setCursorPosition = (pos, elem) => {
            elem.focus();
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
    
        function createMask(event) {
            let matrix = '+1 (___) ___-____',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, ''),
                checkMask = matrix.charAt(1);
    
                if (def.length >= val.length || this.value.charAt(1) !== checkMask) {
                    val = def;
                }
    
                this.value = matrix.replace(/./g, function(a) {
                    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
                });
    
                if (event.type === 'blur') {
                    if (this.value.length == 2) {
                        this.value = '';
                    }
                } else {
                    setCursorPosition(this.value.length, this);
                }
        }

        let phone = document.querySelector('[name="phone"]');
        
            phone.addEventListener('input', createMask);
            phone.addEventListener('focus', createMask);
            phone.addEventListener('blur', createMask);

        }

    init() {
        this.sortingForm();
        this.phoneMask();
        this.checkMailInputs();
    }
}
