const messages = [
  "Bienvenue sur notre espace",
  "Welcome to our space",
  "I ni ce ye fɔ̀lɔ kɛla la"
];

let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeText() {
  if (charIndex < messages[index].length) {
    typingElement.textContent += messages[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(() => {
      typingElement.textContent = '';
      charIndex = 0;
      index = (index + 1) % messages.length;
      setTimeout(typeText, 1000);
    }, 2000);
  }
}

typeText();

function filterCars(type) {
  const allCars = document.querySelectorAll('.car-card');
  allCars.forEach(car => {
    if (type === 'all') {
      car.style.display = 'block';
    } else {
      car.classList.contains(type) ? car.style.display = 'block' : car.style.display = 'none';
    }
  });
}

let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((el, i) => {
    el.classList.remove('active');
    if (i === index) el.classList.add('active');
  });
}

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 5000);

// EMAIL JS 
(function () {
  emailjs.init("7Fs7hYM2kowi6bhxt"); // remplace par ta clé publique
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_e5wacly", "template_nwjqolp", this)
    .then(function () {
      alert("Message envoyé avec succès !");
      document.getElementById("contact-form").reset();
    }, function (error) {
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
      console.error(error);
    });
});
