$('.slider').slick({
    dots:false,
    infinite:true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll:1,
    variableWidth: true,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          centerMode:true,
          centerPadding : '20px',
          dots:true,
        }
      },
    ]
});
function myFunction() {
  let links = document.getElementById("myTopnav");
  let btn = document.getElementById('menu-toggle')
  body = document.querySelector("body");
  if (links.className === "links") {
    links.className += " responsive";
    btn.className += " responsive";
    body.style.backgroundImage = "linear-gradient(to bottom, "+ '#fff' +", "+ '#000' +")"
    body.style.transition = ' 0.4s'
  } else {
    links.className = "links";
    btn.className = "menu-icon";
    body.style.backgroundImage = 'none';
  }
  }

