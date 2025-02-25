function opennews(){
  window.location.href = "news.html";
}
function openleague(){
  window.location.href = "leagues.html";
}

document.addEventListener("DOMContentLoaded", function () {
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add animation classes
  function animateOnScroll() {
    const elements = document.querySelectorAll(".hidden");
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("animate-fade-in"); // Add your desired animation class
        element.classList.remove("hidden");
      }
    });
  }

  // Animate elements on page load
  animateOnScroll();

  // Animate elements on scroll
  window.addEventListener("scroll", animateOnScroll);
});