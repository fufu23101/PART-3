document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const errorDiv = document.getElementById("formErrors");
    const successDiv = document.getElementById("formSuccess");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      errorDiv.innerHTML = "";
      successDiv.style.display = "none";

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      const errors = [];
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if (name.length < 3) errors.push("Name must be at least 3 characters.");
      if (!emailPattern.test(email)) errors.push("Enter a valid email.");
      if (subject.length < 3) errors.push("Subject must be at least 3 characters.");
      if (message.length < 10) errors.push("Message must be at least 10 characters.");

      if (errors.length > 0) {
        errorDiv.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
        return;
      }

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          form.reset();
          successDiv.style.display = "block";
          successDiv.style.color = "green";
          successDiv.innerHTML = "<p>✅ Thank you! Your message was sent successfully.</p>";
        } else {
          return response.json().then(data => {
            if (data.errors) {
              errorDiv.innerHTML = data.errors.map(err => `<p>${err.message}</p>`).join("");
            } else {
              errorDiv.innerHTML = "<p>Something went wrong. Please try again.</p>";
            }
          });
        }
      })
      .catch(() => {
        errorDiv.innerHTML = "<p>Network error. Please try again later.</p>";
      });
    });
  });