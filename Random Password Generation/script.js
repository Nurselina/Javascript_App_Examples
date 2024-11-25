const passwordButton= document.querySelector('.passwordButton');
const input = document.querySelector('input');
const faCopy= document.querySelector('.fa-copy');
const alertContainer = document.querySelector('.alertContainer');

passwordButton.addEventListener('click', createPassword);
faCopy.addEventListener('click', copyPassword);

function createPassword(){
    const passwordLength=14;
    const characters = '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   // console.log(characters[randomNumber]);

   let password = '';
   for(let i=0; i<passwordLength; i++){
    const randomNumber = Math.floor(Math.random() * characters.length);
    password += characters[randomNumber];
   }

   input.value =password;
   //console.log(password);
}

function copyPassword() {

    if(input.value){
        input.select();
        navigator.clipboard.writeText(input.value);
        alertContainer.classList.remove('active');
        setTimeout(() => {
            alertContainer.classList.add('active');
        }, 2000);
    }
   }