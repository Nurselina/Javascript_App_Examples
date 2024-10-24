const currencyFirst = document.getElementById('currencyFirst');
const currencySecond = document.getElementById('currencySecond');
const count =document.getElementById('count');
const equal =document.getElementById('equal');
const exchangeRate =document.getElementById('exchangeRate');

updateRate();


function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/156a09f937278d7163793c7c/latest/${currencyFirst.value}`)
    .then((res) =>res.json()).then((data) =>{
        console.log(data);
        const rate =data.conversion_rates[currencySecond.value]; //Neye çevirmek istiyorsak onun key değerini veriyoruz

        exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;

        equal.textContent = (count.value * rate).toFixed(2); //toFixed ile virgülden sonra kaç basamak girmek istediğimizi belirtiriz.

    })
}

currencyFirst.addEventListener('change', updateRate); //currencyFirst her değiştiğinde updateRate fonksiyonu tetiklenecek
currencySecond.addEventListener('change', updateRate);
count.addEventListener('input', updateRate);