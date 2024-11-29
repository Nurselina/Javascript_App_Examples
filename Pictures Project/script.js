
const imageContainer = document.getElementById('imageDiv');
const loader= document.getElementById('loading');


const count =30;
const apiKey = 'SRmsWolUm-fVUzJBcOZoFwq7prHCKxU5NUdsiUMJ7oE';
const apiUrl= `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let imagesLoaded=0;
let totalImages=0;
let imagesArray= [];
getImages();
async function getImages(){
    try{
        const response= await fetch(apiUrl);
        imagesArray = await response.json();
        //debugger;
        displayImages();
    }catch{

    }
}
function displayImages(){

    imagesLoaded = 0;
    totalImages=imagesArray.length;
    imagesArray.forEach((image)=>{
        const item = document.createElement('a');
        setAttributes(item,{href:image.urls.regular})
        //item.setAttribute('href', image.urls.regular);

        const img =  document.createElement('img');
        setAttributes(img,
             {src:image.urls.regular,
              alt: image.alt_description
             });
       // img.setAttribute('src', image.urls.regular);
       // img.setAttribute('alt', image.alt_description);

       img.addEventListener('load', imageLoaded);
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

function imageLoaded(){
    imageLoaded++;
   // console.log('Resim yüklendi.');
   if(imagesLoaded === totalImages){
    loader.hidden=true;
   }
}

function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key,attributes[key])
    }
}

window.addEventListener('scroll', ()=> {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
        console.log(window.innerHeight); // tarayıcının görünür alanının (viewport) yüksekliğini belirtir
        console.log(window.scrollY); // bu özellik sayfanın dikey kaydırma miktarını temsil eder.
        console.log(window.innerHeight + window.scrollY); 
        console.log(document.body.offsetHeight - 1000); //Burada 1000, bir eşik değeri olarak kullanılmıştır. Bu değer, sayfanın sonuna gelmeden önce bir 1000 piksel uzaklık kalmasını sağlar. 
        //Yani, 1000 piksel aşağı kaydırılana kadar koşul tetiklenmez.
        console.log('Resimleri yükle.');
        getImages();
    }
})

