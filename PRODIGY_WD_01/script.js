window.onscroll = function() {
    var navbar = document.querySelector(".navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.backgroundColor = "#000"; 
    } else {
      navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; 
    }
  };
  var menuItems = document.querySelectorAll(".navbar a");
  menuItems.forEach(function(item) {
    item.addEventListener("mouseover", function() {
      this.style.color = "#E50914"; 
    });
    item.addEventListener("mouseout", function() {
      this.style.color = "white";
    });
  });
  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }