window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backtop.style.opacity = 1;
    } else {
      backtop.style.opacity = 0;
    }
  }

  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
      navbar.classList.remove("navbar-shrink");
    }
  }