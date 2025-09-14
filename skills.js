document.addEventListener("DOMContentLoaded", () => {
  // Create progress fill divs dynamically
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    const fill = document.createElement("div");
    fill.classList.add("progress-fill");
    bar.appendChild(fill);

    // Animate after small delay
    setTimeout(() => {
      fill.style.width = percent + "%";
    }, 300);
  });

  // Add hover effect text
  const cards = document.querySelectorAll(".skill-card");
  // cards.forEach(card => {
  //   card.addEventListener("mouseover", () => {
  //     card.style.background = "linear-gradient(135deg, #fdfbfb, #ebedee)";
  //   });
  //   card.addEventListener("mouseout", () => {
  //     card.style.background = "#fff";
  //   });
  // });

  // Auto-update footer year
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  footer.textContent = `© ${year} Sivanesh N. All Rights Reserved.`;
});
