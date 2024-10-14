const correctAnswers=['E', 'E','E','E', 'E'];
const form =document.querySelector('.question-form');
const result=document.querySelector('.result');

form.addEventListener('submit', e=> {
    e.preventDefault(); //sayfa yenilenmesin ve aşağıdaki fonksiyonlarımı yapsın

    let score=0;
    const userAnswers=[form.q1.value, form.q2.value,form.q3.value,form.q4.value, form.q5.value];  //kullanıcının verdiği cevapları tutuyoruz

    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 20; // => score=score+20
        }
    })

   // console.log(score);
   result.classList.remove('d-none');

   let puan=0;
   const bastir=setInterval(() => {
    result.querySelector('span').textContent= `${puan}%` ;
    if(puan == score){
        clearInterval(bastir);
    }else{
        puan++;
    }
   }, 10);
   
})

/*setTimeout(() => {
    console.log('Javascript');
}, 2000); */ // setTimeout() => içerisinde yazdığımız kod tek bir kez çalışır verdiğin saniyeye göre. örn burada 2000 sn verdik o kadar saniye sonra çalışıyor
 
// setInterval(() => {
//     console.log('Javascript');
// }, 1000)   //setInterval() => yazdığımız kod verdiğimiz saniye kadar sonra sürekli kendini tekrarlar hiç durmaz


// let i=0;
// const bastir=setInterval(() => {
//     console.log('Javascript');
//     i++;
//     if(i == 4){
//         clearInterval(bastir);  //kod sürekliliğini durdurur.
//     }
// }, 1000) 
