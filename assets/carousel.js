(function () {
  var carousel = document.querySelector('.hero-carousel');
  if (!carousel) return;

  carousel.querySelectorAll('label[for^="hero-slide"]').forEach(function (label) {
    label.addEventListener('click', function (event) {
      event.preventDefault();

      var id = label.getAttribute('for');
      var radio = id && document.getElementById(id);
      if (!radio || radio.checked) return;

      var scrollX = window.scrollX;
      var scrollY = window.scrollY;

      radio.checked = true;
      radio.blur();

      window.scrollTo(scrollX, scrollY);
    });
  });
})();
