
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const contactForm = document.querySelector("#contact-form");
const yearElement = document.querySelector("#year");

// Show the current year in the footer.
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Open and close the mobile navigation.
if (menuToggle && navLinks) {
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
}

// The contact form submits directly to Formspree.
// Do not prevent the browser's normal form submission.
