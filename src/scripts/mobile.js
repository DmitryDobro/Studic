let mobileBlock = document.querySelector('.mobile-block')
let swiperWrapper = document.querySelector('.mobile-block_swiper-wrapper') //элементы мобильного блока


let specializationBody = document.querySelector('.specialization-body')
let cards = document.querySelectorAll('.specialization-card') //карточки/слайды,
let btnSpc = document.querySelector('.specialization-link') //кнопка, которые будем переносить
const viewport_width = Math.max(document.documentElement.clientWidth);

window.addEventListener('resize', cardMobile);
function cardMobile(){
	const viewport_width = Math.max(document.documentElement.clientWidth);
	if (viewport_width < 768) {
		if (!specializationBody.classList.contains('mobile')) { // проверяем наличие класса, чтобы функция не работала каждый раз
			for(let i = 0; i < cards.length; i++){
				let slide = cards[i]
				slide.classList.add('swiper-slide')
				swiperWrapper.prepend(slide)
			}
			mobileBlock.append(btnSpc)
			specializationBody.classList.add('mobile');
		}
	} else {
		if (specializationBody.classList.contains('mobile')) {
			for(let i = 0; i < cards.length; i++){
				let slide = cards[i]
				slide.classList.remove('swiper-slide')
				specializationBody.prepend(slide)
			}
			specializationBody.append(btnSpc)
			specializationBody.classList.remove('mobile');
		}
	}
}

// ===Адаптив шапки========================================================================================
let profile, headerCity, ul, header, mobileMenu
let body =  document.querySelector('body')
header = document.querySelector('.header')

mobileMenu = document.querySelector('.mobile-menu')
mobileMenuContent = document.querySelector('.mobile-menu_content')
mobileMenuConteiner = document.querySelector('.mobile-menu_conteiner') //элементы мобильного меню

profile = document.querySelector('.header-profile')
headerCity = document.querySelector('.header-city')
ul = document.querySelector('.header-navbar_list ')// элементы шапки которые будем переносить

let colomnProfile, colomnCity,headerNavbar
headerNavbar = document.querySelector('.header-navbar-conteiner')
colomnProfile = document.getElementById('colomnProfile')
colomnCity = document.getElementById('colomnCity') // блоки, в которые будем возвращать

window.addEventListener('resize', mobileModal);

function mobileModal(){
	if (viewport_width < 1000){
		if (!header.classList.contains('mobile')){
			for(let i = 0; i < ul.length; i++){
				let li = ul[i]
				li.classList.remove('swiper-slide')
			}
			mobileMenuContent.prepend(ul)
			mobileMenuContent.prepend(headerCity)
			mobileMenuContent.prepend(profile)
			ul.classList.remove('swiper-wrapper')
			header.classList.add('mobile');
		}
	}else{
		if (header.classList.contains('mobile')){
			for(let i = 0; i < ul.length; i++){
				let li = ul[i]
				li.classList.add('swiper-slide')
			}
			ul.classList.add('swiper-wrapper')
			headerNavbar.prepend(ul)
			colomnCity.append(headerCity)
			colomnProfile.append(profile)
			header.classList.remove('mobile');
		}
		
	}
}

// События на бургер
let close = document.querySelector('.close')
let burger = document.querySelector('.header-burger ')
burger.addEventListener('click', () => {
	body.classList.add('block')
	burger.classList.add('active')
	mobileMenu.classList.add('active')
	mobileMenuConteiner.classList.add('active')
	mobileMenuContent.classList.add('active')
	
})
close.addEventListener('click', () => {
	body.classList.remove('block')
	burger.classList.remove('active')
	setTimeout(() => mobileMenu.classList.remove('active'), 1000);	
	mobileMenuContent.classList.remove('active')
	mobileMenuConteiner.classList.remove('active')
})


// =Адаптив банера===========================================================

let bannerLink = document.querySelector('.banner-links')
let bannerLinkImg = document.querySelector('.banner-img_link')

let favorite = document.getElementById('fovorite')
let bell = document.getElementById('bell')
let btnBanner = document.getElementById('chains')

window.addEventListener('resize', mobileBanner);

function mobileBanner(){
	const viewport_width = Math.max(document.documentElement.clientWidth);
	if (viewport_width < 768){
		if (!bannerLink.classList.contains('done')){
			bannerLinkImg.prepend(favorite)
			bannerLinkImg.prepend(bell)
			bannerLink.prepend(btnBanner)
			bannerLink.classList.add('done');
		}
	}else{
		if(bannerLink.classList.contains('done')){
			let bannerColums = document.querySelector('.banner-links_row ')
			bannerLinkImg.prepend(btnBanner)
			bannerColums.prepend(bell)
			bannerColums.prepend(favorite)
			bannerLink.classList.remove('done');
		}
		}

}