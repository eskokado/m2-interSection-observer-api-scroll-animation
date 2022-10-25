const observer = new IntersectionObserver((entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const divs = document.querySelectorAll('div');

divs.forEach((div) => {
  observer.observe(div);
});