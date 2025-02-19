document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero-content h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".hero-content p", { duration: 1.2, y: 50, opacity: 0, delay: 0.3, ease: "power2.out" });
    gsap.from(".btn", { duration: 1.5, scale: 0.8, opacity: 0, delay: 0.5, ease: "elastic.out(1, 0.5)" });

    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        gsap.from(card, { duration: 1, opacity: 0, y: 30, delay: index * 0.2, ease: "power2.out" });
    });

    document.querySelector("#contact-form").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you! We will get back to you soon.");
    });
});
