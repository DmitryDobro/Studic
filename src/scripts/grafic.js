
let grafic = document.querySelector('#myCanvas').getContext('2d')
let myChart = new Chart(grafic, {
    type:'line',
    data:{
        labels:[2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,],
        datasets:[{
            label:'Проходной бал на платное',
            data:[120,200, 100, 225,170,135,200, 154,0,200],
            backgroundColor:['rgba(171, 200, 234, 0.6)'],
            borderColor:['rgba(171, 200, 234, 0.6)' ],
            borderWidth:4,
            fill:true
        },
        {
            label:"Проходной бал на бюджет",
            data:[20,110,138,225,50,143,135,20,0,150],
            backgroundColor:['rgba(6, 86, 180, 0.6)'],
            borderColor:['rgba(6, 86, 180, 0.6)' ],
            borderWidth:4,
            fill:true,

        }]
    },
    options:{
        scales: {
        y: {
            suggestedMin: 0,
            suggestedMax: 250,
            ticks:{
                stepSize: 100
            }
        }
    },
    // maintainAspectRatio:false,
    responsive:false,
    plugins: {
        legend: {
          display: false
        },

    
      }

},
        
    
})