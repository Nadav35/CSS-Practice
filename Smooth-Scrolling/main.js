// Option 2 - jQuery smooth scroll

$('.navbar a').on('click',  function(e) {
  // eslint-disable-next-line no-invalid-this
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
  
});