// Option 2 - jQuery smooth scroll

// $('.navbar a').on('click',  function(e) {
//   // eslint-disable-next-line no-invalid-this
//   if (this.hash !== '') {
//     e.preventDefault();

//     const hash = this.hash;
//     $('html, body').animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       800
//     );
//   }
  
// });

// Option 3, smoothscroll script from GitHub

// eslint-disable-next-line no-undef

// const scroll = new SmoothScroll('.navbar a[href*="#"]', {
//   speed: 800
// });