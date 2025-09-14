// Typing animation for hero subtitle
document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.querySelector(".hero-text h2");
  const text = "Aspiring AI & Web Developer";
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 80); // typing speed
    }
  }
  subtitle.textContent = ""; // clear before typing
  typeEffect();

  // Button hover animation
  const btn = document.querySelector(".btn");
  btn.addEventListener("mouseover", () => {
    btn.style.boxShadow = "0 0 15px rgba(37, 99, 235, 0.8)";
    btn.style.transform = "scale(1.05)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.boxShadow = "none";
    btn.style.transform = "scale(1)";
  });

  // Smooth scroll when clicking "Contact Me"
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "contact.html";
  });

  // Auto year update in footer
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  footer.textContent = `© ${year} Sivanesh N. All Rights Reserved.`;
});
