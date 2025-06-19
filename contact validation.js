document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const errorDiv = document.getElementById("formErrors");
  const successDiv = document.getElementById("formSuccess");

  form.addEventListener("submit", function (event) {
    const errors = [];

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Validation
    if (name.length < 3) errors.push("Full Name must be at least 3 characters.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push("Enter a valid email address.");
    if (subject.length < 3) errors.push("Subject must be at least 3 characters.");
    if (message.length < 10) errors.push("Message must be at least 10 characters.");

    // If errors found
    if (errors.length > 0) {
      event.preventDefault(); // Stop form from submitting
      errorDiv.innerHTML = errors.map(err => `<p>${err}</p>`).join("");
      successDiv.style.display = "none";
    } else {
      // Allow native form submit (Formspree handles it)
      errorDiv.innerHTML = "";
      successDiv.style.display = "block";
      successDiv.innerHTML = "<p>✅ Submitting your message...</p>";
    }
  });
});

  