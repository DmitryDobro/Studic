let modal = document.querySelector('.modal')

window.addEventListener('scroll', function(event){
  let scrollLength = window.scrollY
  if(scrollLength > 700){
      modal.classList.add('_active')
  } else if(scrollLength < 700){
      modal.classList.remove('_active')
  }

})