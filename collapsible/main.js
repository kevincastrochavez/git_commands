const collapsible = document.querySelector('.input__title');

collapsible.addEventListener('click', function () {
  this.classList.toggle('active');
  const content = this.nextElementSibling;

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + 'px';
  }
});
