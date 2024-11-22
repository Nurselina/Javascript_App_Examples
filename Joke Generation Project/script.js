const jokeButton =document.getElementById('jokeButton');
const joke = document.getElementById('joke');


const apiKey = 'KzIRB/2fBEs/33lkx4CBYg==jyrzFgH8ZD2Cl1Lm';
const apiURL='https://api.api-ninjas.com/v1/dadjokes';

const options={
    method:'GET',
    headers:{
        'X-Api-Key':apiKey 
    }
}



async function getJoke() { //api istek atma işlemi

try {
    joke.textContent = 'Updating...';
    jokeButton.textContent = 'Loading...';
    jokeButton.disabled = true;

  const response = await fetch(apiURL,options); //dönen data response
  const data = await response.json(); //json formatına dönüştürüp await ile gelen datayı bekliyoruz
 //console.log(data);

 jokeButton.disabled = false;
 jokeButton.textContent = 'Tell me a joke';
  joke.textContent = data[0].joke;
} catch (error) {
    joke.textContent ="Try again later";

    jokeButton.disabled = false;
    jokeButton.textContent = 'Tell me a joke';
}
}

jokeButton.addEventListener('click', getJoke)