
const weatherBlock = document.getElementById('weather');
const weatherInput = document.querySelector('.weather-input')

weatherInput.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        value = weatherInput.value
        city = value
        console.log(city);
        loadWeather()
    }
})


async function loadWeather(e){
    weatherBlock.innerHTML =` <div class="weather-loading">
    <img src="./images/loading-4.gif" alt="">
</div>`
const server = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=6da3b59ef163f4043df4ad655c6d4f33`;
const response = await fetch(server, {
    method: 'GET',
});
const data = await response.json()


if(response.ok){
    getWeather(data)
}else{
    weatherBlock.innerHTML = data.message
}

};
function getWeather(data){
    const location = data.name;
    const temp = Math.round( data.main.temp)
    const feelLike = Math.round(data.main.feels_like)
    const icon = data.weather[0].icon
    const statusWeather = data.weather[0].description
    const wind = data.wind.speed

    // Html шаблон
    const template = `
    
        <div class="weather-header">
            <div class="weather-main">
                <div class="weather-city">${location}</div>
                <div class="weather-status">${statusWeather}</div>
            </div>
            <div class="weather-icon">
                <img src="http://openweathermap.org/img/w/${icon}.png " alt="">
            </div>
        </div>
        <div class="weather-temp">Температура: ${temp} &deg;C</div>
        <div class="weather-feels-like">Ощущается,как ${feelLike} &deg;C</div>
        <div class="weather-wind">Ветер: ${wind}м/с</div>`
        
 

    weatherBlock.innerHTML = template
    // console.log(data)
}

// if(weatherBlock){
//     loadWeather();
// }

loadWeather()
// ====================================================





// let currenData;
// const climatInput = document.querySelector('.climat-input')
// let body = document.querySelector('body')
// climatInput.addEventListener('keydown', (e) => {
//     if(e.key == 'Enter'){
//         value = climatInput.value
//         city = value
//         console.log(city);
//         getData()
//     }
// })

// async function getData(){
    

//     let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=6da3b59ef163f4043df4ad655c6d4f33`;
//     let response = await fetch(url)
//     let data = await response.json()
// // ========Проверка
//     if(response.ok){
//         render(data)
//     }else{
//         console.log(data.message);
//     }
// // =======Вспомогтельные ф-ии
    
      

//       function getHoursString(dateTime) {
//         let date = new Date(dateTime);
//         let hours = date.getHours().pad();
//         return hours;
//       }

//     // ===================Вставка элементвов
//     function render(data) {
//         renderCity(data);
//         renderCurrentTemperature(data);
//         renderCurrentDescription(data);
//         renderForecast(data);
//         renderDetails(data);
//         renderDayOrNight(data);
//       }
//       // Получение название города===============
//     function renderCity(data){
//         let cityName = document.querySelector('.current__city')
//         // console.log(data);
//         cityName.innerHTML = data.city.name
//     }
//     // Получение температуры=======================
//     function renderCurrentTemperature(data) {
//         let tmp = data.list[0].main.temp;
//         let currentTmp = document.querySelector('.current__temperature');
//         currentTmp.innerHTML = Math.round(tmp) + `&deg;С`;
//       }
//       // Получение описания погоды=======================
//       function renderCurrentDescription(data){
//         let tmp = data.list[0].weather[0].description;

//         let description = document.querySelector('.current__description');
//         description.innerHTML = tmp;
//       }
//     //   Функция для получения прогноза======================
//       function renderForecast(data) {
//         let forecastDataContainer = document.querySelector('.forecast');
//         let forecasts = '';

//        // Перевод в красивое время(непонятно почему эта функция должна быть здесь)
//        Number.prototype.pad = function(size) {
//         var s = String(this);
//         while (s.length < (size || 2)) {s = "0" + s ;}
//         return s + ':00'; 
//       }

//         //   Бегаем циклом и дабавляем все куда надо
//         for (let i = 0; i < 6; i++) {
           
//           let item = data.list[i];  // Айтем будет равен массиву данных с прогнозом на определеннов время
      
//           let icon = item.weather[0].icon; //Берем иконку 
//           let temp =Math.round(item.main.temp) + `&deg;С`; //Температуру
//           let hours = ( i == 0 ? 'Сейчас' : getHoursString(item.dt * 1000));    
      
//           let template = `<div class="forecast__item">
//             <div class="forecast__time">${hours}</div>
//             <div class="forecast__icon icon__${icon}"></div>
//             <div class="forecast__temperature">${temp}</div>
//           </div>`;
//           // console.log(icon);
//           forecasts += template; //Создаем массиво дивов с данными
//         }
//         forecastDataContainer.innerHTML = forecasts;
//       }
//     //   =Получение детали погоды====================
//       function renderDetails(data) {
//         let item = data.list[0]; // Массив данных о погоде на данный момент
//         //Получаем конкретные данные из массива
//         let pressure = ((item.main.pressure / 33).toFixed()) + ' мм.рт.ст';
//         let humidity =item.main.humidity + '%';
//         let feels_like = Math.round(item.main.feels_like) + ` C`;
//         let wind = item.wind.speed + ' м/с';
       
//         // Вставляем данные с помощью следующей ф-ии
//         renderDetailsItem('feelslike', feels_like);
//         renderDetailsItem('humidity', humidity);
//         renderDetailsItem('pressure', pressure);
//         renderDetailsItem('wind', wind);
//       }
//       //=========Функция для вставки данных в конкретный массив
//       function renderDetailsItem(className, value) {   // первый аргумент название класса в html, второй- переменная с данными
//         let container = document.querySelector(`.${className}`).querySelector('.details__value'); //Получаем див в который будем вставлять данные
//         container.innerHTML = value;
//       }

//     //   =======Темная или светлая тема===========================================
//     function isDay(data) {
//         let sunrise = data.city.sunrise * 1000;
//         let sunset = data.city.sunset * 1000;
      
//         let now = Date.now();
//         return (now > sunrise && now < sunset);
//       }
      
//       function renderDayOrNight(data) {
//         let attrName = isDay(data) ? 'day':'night';
//         transition();
//         let climat = document.querySelector('.climat')
//         climat.setAttribute('data-theme', attrName);
//       }

//       //==========Переход между темами=======================================================
//       function transition() {
//         document.documentElement.classList.add('transition');
//         setTimeout(function() {
//           document.documentElement.classList.remove('transition');
//         }, 4000)
//       }

//     //   ============================================

//     function periodicTasks() {
//         setInterval(start, 6000000);
//         setInterval(function() {
//           renderDayOrNight(currentData);
//         }, 60000);
//       }

//     function start() {
//         getData().then(data => {
//           currentData = data;
//           render(data);
//           periodicTasks();
//         })
//       }
      
// // start();   
// }
// getData()


// =====Myscript=========================================================================================================================================
const weatheInput = document.querySelector('.weather-input')
let mainWeather = document.querySelector('.main')
weatheInput.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        value = weatheInput.value
        city = value.trim()
        console.log(value);
        myVijet()
        weatheInput.value = " "
    }
})

city = 'Токио'

async function myVijet(){
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=6da3b59ef163f4043df4ad655c6d4f33`;
  let response = await fetch(url)
  let data = await response.json()

  if(response.ok){
    dataVijet()
  
  }else{
    mainWeather.innerHTML = data.message
  }
  

  function dataVijet(){
    tempa(data);
    descrip(data);
    cityName(data);
    mainTime(data);
    prognozData(data);
    renderDetails(data)
    renderDayOrNight(data)
    console.log(data);

  }
 
  function getHours(dateTime) {

    Number.prototype.prod = function(size){
      s = String(this)
      while (s.length < (size || 2)) {s = "0" + s ;}
          return s + ':00'; 
      }

    let date = new Date(dateTime);
    let hours = date.getHours().prod();
    return hours;
  }
 
// ====================================================
   
// ===============================================================================
  function cityName(data){
    let city = document.querySelector('.main-city')
    city.innerHTML = data.city.name
  }
  function tempa(data){
    let tmp = document.querySelector('.main-temperatyre')
    tmp.innerHTML = Math.round(data.list[0].main.temp) + `&deg;С`;
  }
  function descrip(data){
    let desc = document.querySelector('.main-description')
    desc.innerHTML = data.list[0].weather[0].description
  }
  function mainTime(data){
    let timeLoc = document.querySelector('.main-time')
    Number.prototype.prodLocal = function(size){
      s = String(this)
      while (s.length < (size || 2)) {s = "0" + s ;}
          return s; 
    }
 

    let d = new Date()
    let localTime = d.getTime()
    let localOffset = d.getTimezoneOffset() * 60000
    utc = localTime + localOffset
    let local = utc + (1000 * `${data.city.timezone}`)
    nd = new Date(local)
    localHours = nd.getHours().prodLocal()
    localMinute = nd.getMinutes().prodLocal()
    localTime ="Местное время: " + localHours + ':' + localMinute
    
    // console.log(localTime);
    timeLoc.innerHTML = localTime
  }



  
  // ==================================================================================
  function prognozData(){
    let prognosis = document.querySelector('.prognosis')
    let template = ''

    for(let i = 0; i < 4; i++){
      let item = data.list[i]
      let icon = item.weather[0].icon
      let temp = Math.round(item.main.temp) + `&deg;С`;
      let time = i == 0 ? 'Сейчаc' : getHours(item.dt * 1000);
      let div = 
      `<div class="prognosis-item">
       <div class="prognosis-time">${time}</div>
      <div class="prognosis-icon">
        <img src="./images/${icon}.png" alt="">
      </div>
      <div class="prognosis-temperature">${temp}</div>
      </div>`
      template += div

    }
    prognosis.innerHTML = template

  }

    //   =Получение детали погоды====================
    function renderDetails(data) {
      let item = data.list[0]; // Массив данных о погоде на данный момент
      //Получаем конкретные данные из массива
      let pressure = ((item.main.pressure / 33).toFixed()) + ' мм.рт.ст';
      let humidity =item.main.humidity + '%';
      let feels_like = Math.round(item.main.feels_like) + ` C`;
      let wind = item.wind.speed + ' м/с';
     
      // Вставляем данные с помощью следующей ф-ии
      renderDetailsItem('_feellike', feels_like);
      renderDetailsItem('_myHumidity', humidity);
      renderDetailsItem('_myPressure', pressure);
      renderDetailsItem('_myWind', wind);
      console.log(wind);
    }
    //=========Функция для вставки данных в конкретный массив
    function renderDetailsItem(className, value) {   // первый аргумент название класса в html, второй- переменная с данными
      let container = document.querySelector(`.${className}`).querySelector('.detali-value'); //Получаем див в который будем вставлять данные
      container.innerHTML = value;
    }

        //   =======Темная или светлая тема===========================================
        function isDay(data) {
          let sunrise = data.city.sunrise * 1000;
          let sunset = data.city.sunset * 1000;
        
          let now = Date.now();
          let isDay = (now > sunrise && now < sunset);
          let weatherBlock = document.querySelector('.weather-block')
          if(isDay){
            weatherBlock.classList.remove('night')
          }else{
            weatherBlock.classList.add('night')
          }
          // return isDay
        }
        console.log(isDay(data));

        function renderDayOrNight(data) {
          let attrName = isDay(data) ? 'day':'night';
          transition();
          let climat = document.querySelector('.climat')
          climat.setAttribute('data-theme', attrName);
        
        }
  
        //==========Переход между темами=======================================================
        function transition() {
          document.documentElement.classList.add('transition');
          setTimeout(function() {
            document.documentElement.classList.remove('transition');
          }, 4000)
        }
  
      //   ============================================











  
}












myVijet()


