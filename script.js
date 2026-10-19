
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const yearElement = document.querySelector("#year");

// Show the current year in the footer.
yearElement.textContent = new Date().getFullYear();

// Open and close the mobile navigation.
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    menuToggle.textContent = isOpen ? "×" : "☰";
});

// Close the mobile navigation after selecting a link.
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});

// Demonstration form: it does not send data to a server.
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();

    formStatus.textContent =
        `Thanks, ${name}! This demo form works in your browser, ` +
        "but it does not send your message anywhere.";

    contactForm.reset();
});
