$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        centerMode: true,
        centerPadding: '20px',
        dots: true,
      },
    },
  ],
})
function myFunction() {
  let links = document.getElementById('myTopnav')
  let btn = document.getElementById('menu-toggle')
  body = document.querySelector('body')
  if (links.className === 'links') {
    links.className += ' responsive'
    btn.className += ' responsive'
    body.style.backgroundImage = 'linear-gradient(to bottom, ' + '#fff' + ', ' + '#000' + ')'
    body.style.transition = ' 0.4s'
  } else {
    links.className = 'links'
    btn.className = 'menu-icon'
    body.style.backgroundImage = 'none'
  }
}
const validateEmail = (email) =>{
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
function submitFunction() {
  const input = document.getElementById('input')
  const form = document.querySelector('form')
  const error = document.getElementById(('error'))
  const email = input.value
  if (!validateEmail(email)) {
    error.innerText ='Please enter a valid  email adress'
    error.style.display = 'block'}
    else{
      form.submit()
    }
}

var width;
$(window).resize(function() {
  let links = document.getElementById('myTopnav')
  let btn = document.getElementById('menu-toggle')
  body = document.querySelector('body')
  width = $(window).width();
  
  if(width >= 800 && links.className === 'links responsive'){
    myFunction()
    console.log('pass')
  }
});
