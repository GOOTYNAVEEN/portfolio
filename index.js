// ✅ Email sending logic using EmailJS
function sendMail(event) {
  event.preventDefault(); // prevent default form submit

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("topic").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && subject && message) {
    emailjs.init("p97pgnUkvChKsPF0E"); // Your Public Key

    const mailParams = {
      from_name: name,
      email_id: email,
      subject: subject,
      message: message
    };

    emailjs
      .send("service_pn3rj6v", "template_r2igx1k", mailParams)
      .then(() => {
        document.getElementById("alert").style.visibility = "visible";

        // Clear form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("topic").value = "";
        document.getElementById("message").value = "";
      })
      .catch((error) => {
        alert("Failed to send mail. Please try again later.");
        console.error("EmailJS error:", error);
      });
  } else {
    alert("Please fill in all fields.");
  }
}

// ✅ Resume unavailable logic (optional)
function myresume() {
  document.getElementById("alert2").style.visibility = "visible";
}
// ✅ Hamburger menu logic (fixed selector)
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn"); // Correct hamburger button
  const menu = document.querySelector(".navbar .menu");
  const icon = document.querySelector(".menu-btn i");

  // Toggle hamburger menu and icon animation
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icon.classList.toggle("active");
  });

  // Close menu when clicking a nav link
  document.querySelectorAll(".navbar .menu li a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      icon.classList.remove("active");
    });
  });
});
