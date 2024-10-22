const bars =document.querySelector('.fa-bars');
const sidebar=document.querySelector('.sidebar');
const closingButton=document.querySelector('.fa-xmark');

bars.addEventListener('click', () =>{
    sidebar.classList.toggle('showSidebar');  //toggle methodu ile varsa kaldıracak yoksa ekleyecek.
})


closingButton.addEventListener('click', () => {
    sidebar.classList.remove('showSidebar');
})