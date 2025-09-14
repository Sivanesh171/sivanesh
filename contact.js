document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "⚠️ Please fill all fields!";
      status.style.color = "red";
      return;
    }

    // Simulate success
    status.textContent = `✅ Thank you, ${name}! Your message has been sent.`;
    status.style.color = "green";

    // Reset form
    form.reset();
  });

  // Auto update year in footer
  const footer = document.querySelector("footer p");
  const year = new Date().getFullYear();
  footer.textContent = `© ${year} Sivanesh N. All Rights Reserved.`;
});
