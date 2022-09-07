let btnPoints = document.getElementById('points')
let btnPlaces = document.getElementById('places')
// let target = document.querySelectorAll('.specialization-card')


function resort(selector, parametr) {
  const nodeList = document.querySelectorAll(selector);
  const dict = {};
  const parent = nodeList[0].parentNode;
  nodeList.forEach(node => {
   const key = node.querySelector(parametr).innerText.trim();
   console.log(key);
    dict[key] = node;

  });
  const keys = Object.keys(dict);
   keys.sort((a, b) => a - b).forEach(k => parent.appendChild(dict[k]));
}

btnPoints.addEventListener("click", () => {
  resort('.specialization-card', '.points')
})
btnPlaces.addEventListener("click", () => {
  resort('.specialization-card', '.places')
})