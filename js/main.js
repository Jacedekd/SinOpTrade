let body = document.querySelector('body');

let contactForm = document.querySelectorAll('.contactForm');


let feedback__alert = document.querySelector('.feedback__alert');

contactForm.forEach(item => {
    item.addEventListener('submit', function (e) {
        e.preventDefault()

        const TOKEN = `5405927534:AAElGurDiQ6w4oYH54bXlhrr4o44U7OJx8A`;
        const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
        const CHAT_ID = `-655746630`;

        let text =
            `
    <b>Заявка с сайта!</b>\n
    Имя отправителя: ${this.name.value},
    Телефон: ${this.phone.value}
    `;

        axios.post(URL_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: text
        })
            .then((res) => {

                this.name.value = "";
                this.phone.value = "";
                feedback__alert.classList.add('is-active')
                setTimeout(() => {
                    feedback__alert.classList.remove('is-active')
                }, 5000)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                console.log('end');
            })

    })
})

let hamburger = document.querySelector(".hamburger");
let toolbarB = document.querySelector('.toolbar__Burger')
let menuBg = document.querySelector('.menu-bg')
  hamburger.addEventListener("click", function() {

    hamburger.classList.toggle("is-active");
    menuBg.classList.toggle("isActive");
    body.classList.toggle('is-active');
    toolbarB.classList.toggle('is-active');
  });