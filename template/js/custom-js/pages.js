// Add your custom JavaScript for storefront pages here.
if(window.innerWidth > 992) {
  window.addEventListener('scroll',(event) => {
    if(document.querySelector('.header').offsetTop > 60) {
      document.querySelector('.header').classList.add('reduce-header')
    } else {
      document.querySelector('.header').classList.remove('reduce-header')
    }
  })
}