  const myCarousel = document.querySelector('#carouselExampleCaptions');
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // 3 segundos
    ride: 'carousel'
  });


window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(window.scrollY > 0){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

