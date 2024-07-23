const regName = /^[a-zA-Zа-яА-ЯЁё \s]{2,20}$/;
const regEmail = /^\w+@\w+\.\w+$/;
const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const form = document.forms.form;
const inputList = document.querySelectorAll('.form-input')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const age = document.querySelector('#age');
const selectProf = document.querySelector('#profession');
const passwordInput = document.querySelector('#password');
const termsCheckbox = document.querySelector('#agreeTerms');

const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorAge = document.querySelector('#errorAge');
const errorProf = document.getElementById('errorProf')
const errorPassword = document.querySelector('#errorPassword');
const errorTerms = document.querySelector('#errorTerms');

const submitBtn = document.getElementById('sumbitBtn');

inputList.forEach(function(input) {
    input.addEventListener('focus', function() {
        input.style.outline = 'none'
        input.style.border = '3px solid violet'
    })
    input.addEventListener('blur', function() {
        input.style.border =''
    })
})

form.addEventListener('submit', function(evt) {
    evt.preventDefault()
    let hasError = false

    errorName.style.display = 'none'
    errorEmail.style.display = 'none'
    errorPassword.style.display = 'none'
    errorProf.style.display = 'none'

    if (!regName.test(nameInput.value)) {
        errorName.textContent = 'Некорректно введённое имя!'
        errorName.style.display = 'block'
        hasError = true
    }
    if (!regEmail.test(emailInput.value)) {
        errorEmail.textContent = 'Некорректно введённый Email!'
        errorEmail.style.display = 'block'
        hasError = true
    }
    if (!regPassword.test(passwordInput.value)) {
        errorPassword.textContent = 'Некорректно введённый пароль!'
        errorPassword.style.display = 'block'
        hasError = true
    }
    if (age.value == '') {
        errorAge.textContent = 'Введите возраст!'
        errorAge.style.display = 'block'
        hasError = true
    }
    if (selectProf.value == '') {
        errorProf.textContent = 'Выберите профессию!'
        errorProf.style.display = 'block'
        hasError = true
    }
    if (!termsCheckbox.checked) {
        errorTerms.textContent = 'Вы должны дать своё согласие!'
        errorTerms.style.display = 'block'
        hasError = true
    }

    if (hasError === false) {
        console.log('Проверка пройдена успешно!')
        form.reset()
    }
});

