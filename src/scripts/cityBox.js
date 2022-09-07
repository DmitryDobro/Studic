
let arr = []
let allCity = document.querySelector('.allCity')
let citySelected = document.querySelector('.city-selected')
let close =  document.querySelector('.close')

citySelected.addEventListener('click',chooseCity)
allCity.addEventListener('click', chooseCity)

async function loadCities(e){
    const server = `https://api.hh.ru/areas`;
  const response = await fetch(server, {
      method: 'GET',
  });
  const data = await response.json()
  let location = data[0].areas
  let allCity = document.querySelector('.allCity')
  let template = ''
  for(let i = 0; i < location.length;i++){
    let item = location[i]
    let district = item.name
    let id = item.id
    let div = 
      `<div class="city-name">
           <span data-id=${id}>${district}</span>
       </div>`
      
      template += div
      allCity.innerHTML = template

  }

}


// Функция для выборо города
 function chooseCity() {
    if(event.target.closest('.city-name')){
        
       let itemText = event.target.textContent
       let itemId = event.target.dataset.id // получаем id и названеи региона, по которому кликнули

        function Span(name, id){  
            this.name = name;
            this.id = id;
        }
        let span = new Span(itemText,itemId) // создаем объект с полями id и имя

        arr.push(span) 
        let localArr = arr.reduce((acc, city) => {   // создаем массив с уникальными объктами, чтобы, если по городу кликали несколько разБ он не повторялся в массиве
                if (acc.map[city.name]) // если данный город уже был
                return acc; // ничего не делаем, возвращаем уже собранное

                acc.map[city.name] = true; // помечаем город, как обработанный
                acc.cities.push(city); // добавляем объект в массив городов
                return acc; // возвращаем собранное
            }, {
                map: {}, // здесь будут отмечаться обработанные города
                cities: [] // здесь конечный массив уникальных городов
            })
            .cities; // получаем конечный массив

        localStorage.setItem('active', JSON.stringify(localArr)); // добавляем все в localStorage, чтобы потом оттуда брать нужные нам города
        let result = JSON.parse(localStorage.getItem("active"))
        let template = ''
        for(let i = 0; i < result.length;i++){ // делаем span который потом вставим в нужный нам блок
           let item = result[i]
           let nameCity = item.name
           let idCity = item.id
            let span = `<span class='_active' data-id=${idCity}>${nameCity} <span class="close"> &#10006;</span></span>`
            template += span
        }  
        
        citySelected.innerHTML = template
    } else  
    if(event.target.closest('.close')){ // функция для крестика в выбранных городах
        event.target.parentNode.classList.remove('_active')
       let targetId = event.target.parentNode.dataset.id // получем id города по которуму кликнули

        arr = arr.filter(item =>  item.id !== targetId) // фильтруем массив, исключая оттуда выбранный город
        localStorage.setItem('active', JSON.stringify(arr));
    }
}

// Сохранить выбранные города=========================================================================

let btn = document.querySelector('.btnCity')
  function sendCities(){
    let cityBox = document.querySelector('.city-box')
    let template = ''
    cityBox.classList.remove('isVisable')
    let result = JSON.parse(localStorage.getItem("active"))
    let cityChose = document.querySelector('.header-city_name').querySelector('span')
    for(let i = 0; i < result.length;i++){
       let item = result[i]
       let nameCity = item.name
       let idCity = item.id
       let span = `<span data-id=${idCity}>${nameCity}</span>`
        template += span
    }
    cityChose.innerHTML = template
    citySelected.innerHTML = ""
    arr = []
    // window.localStorage.clear();
  } 
  btn.addEventListener('click', sendCities)

// Открыть окно с выбором городов==========================================================

  let cityArrow = document.querySelector('.header-city_arrow')
  let cityBox = document.querySelector('.city-box')
  let cityConteiner = document.querySelector('.city-box_conteiner')
cityArrow.addEventListener('click', showWindowCity)
async function showWindowCity (){
    await  cityBox.classList.toggle('isVisable')
    await loadCities()
    await cityConteiner.classList.remove('loading')
}

// Фильтр в инпуте для поиска городов==================================
let input = document.getElementById('inputHeader');
function filterInputHeader() {
    let filter = input.value.toLowerCase();
    let allCityBloc = document.querySelector(".allCity");
    let cityBlock = allCityBloc.querySelectorAll('.city-name');
    
    cityBlock.forEach(item =>{
             if (item.textContent.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    })
}

input.addEventListener("keyup",filterInputHeader )