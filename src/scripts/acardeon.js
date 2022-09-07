
let link = document.querySelector('.univers-seeMore')
let block =  document.querySelector('._hideBlock')

link.addEventListener('click', () => {
    link.classList.toggle('active')
    if(link.classList.contains('active')){
        link.innerHTML = 'Свернуть'
    }else{
        link.innerHTML = 'Развернуть'
    }
    if (block.style.maxHeight){
        block.style.maxHeight = null;
      } else {
        block.style.maxHeight = block.scrollHeight + "px";
      
      }
})



