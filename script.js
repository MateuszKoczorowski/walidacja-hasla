const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/d;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
    if( pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
        p.textContent =' Masz bardzo dobre hasło!'
        p.style.color = 'lime'
    }else if ( pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.textContent = "Masz dobre hasło"
        p.style.color = 'gold'
    }else{
        p.textContent =' masz zle haslo'
        p.style.color = ' tomato'
    }
}

const checkPassword = () => {
    if(pass.value !== '') {
        showMsg()
    }else{
    p.textContent='Nie podałes hasła'
    p.style.color = ''
}
}


pass.addEventListener('keyup',checkPassword)