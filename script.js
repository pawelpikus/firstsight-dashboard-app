const UNSPLASH_CLIENT_ID = ""; //provide your own unsplash client ID here
const QUERY = 'nature'; //change it to your liking

renderBg();
showTime();

//fetch background image
async function renderBg() {
    try {
        const res = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&query=${QUERY}&client_id=${UNSPLASH_CLIENT_ID}`);
        const unsplashImgData = await res.json();
        document.body.style.backgroundImage = `url(${unsplashImgData.urls.regular})`;
        document.querySelector(".bg-author").textContent = `Image by ${unsplashImgData.user.name} on Unsplash`;
    } catch (err) {
        document.body.style.backgroundImage = `url("./img/default-img.jpg")`;
        document.querySelector(".bg-author").textContent = `Image by Mattia Faloretti on Unsplash`;
        console.log(`${err}. Loading default image...`);
    }
}
//time widget
function showTime() {
    let date = new Date();
    let time = date.toLocaleTimeString([], {timeStyle: "short"});
    document.querySelector(".time").textContent = time;
    setTimeout(showTime, 1000);

}

// crypto widget
const coinsArr = ['bitcoin',  'ethereum', 'tether']; //change the names to your liking

const priceFormatter = new Intl.NumberFormat(
    'en-US', 
{ 
    style: 'currency', 
    currency: 'USD', 
    minimumFractionDigits: 2
})

Promise.all([
	fetch(`https://api.coingecko.com/api/v3/coins/${coinsArr[0]}`),
	fetch(`https://api.coingecko.com/api/v3/coins/${coinsArr[1]}`),
    fetch(`https://api.coingecko.com/api/v3/coins/${coinsArr[2]}`)
]).then(function (responses) {
	return Promise.all(responses.map((response) => response.json()));
}).then(function (data) {
    let cryptoView = '';
    let priceChangePerc24h;
    let priceChangePerc7d;
    let priceChangePerc30d;
    let price;
    
    for(let coin of data){
        price = priceFormatter.format(parseInt(coin.market_data.current_price.usd));
        priceChangePerc24h = Number(coin.market_data.price_change_percentage_24h).toFixed(2);
        priceChangePerc7d = Number(coin.market_data.price_change_percentage_7d).toFixed(2);
        priceChangePerc30d = Number(coin.market_data.price_change_percentage_30d).toFixed(2);
        
        priceChangePerc24h = (priceChangePerc24h > 0) ?
        "+" + priceChangePerc24h : priceChangePerc24h;
        priceChangePerc7d = (priceChangePerc7d > 0) ?
        "+" + priceChangePerc7d : priceChangePerc7d;
        priceChangePerc30d = (priceChangePerc30d > 0) ?
        "+" + priceChangePerc30d : priceChangePerc30d;

        cryptoView += `
        <div class="coin-container">
            <img src="${coin.image.small}" alt="crypto icon" class="crypto-icon">
            <h3 class="crypto-name">${coin.name}</h3>
            <p>${price}</p>
            <p>24h&#8597: ${priceChangePerc24h}%</p>
            <p>7d&#8597: ${priceChangePerc7d}%</p> 
            <p>30d&#8597: ${priceChangePerc30d}%</p>
        </div>`
       document.querySelector(".crypto-main-container").innerHTML = cryptoView;
    }
	
}).catch(function (error) {
	document.querySelector(".crypto-main-container").innerHTML = "<h3>Couldn't fetch data</h3>";
	console.log(error);
});


// weather widget
const WEATHER_API_KEY = ''; //provide your own weather api key here
const CITY = 'Zamość'; // change it to whatever city you want

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`)
.then(res =>  res.json())
.then(data =>{
    const iconLink = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    let weatherView = `
                    <h2>${data.name}</h2> 
                    <h3>${Math.round(data.main.temp)}°C</h3>
                    <p>${data.weather[0].description}</p>
                    <img class="weather-icon" src="${iconLink}" alt="weather conditions"></img>
    `;
    document.querySelector(".weather-container").innerHTML = weatherView;
    
})
.catch(err => {
    document.querySelector(".weather-container").innerHTML = "<h3>Couldn't fetch data</h3>";
    console.error(err)
})
