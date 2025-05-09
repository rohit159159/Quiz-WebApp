
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Reveal nav links with delay
window.addEventListener('load', () => {
  setTimeout(() => {
    navLinks.style.opacity = 1;
    navLinks.style.transform = 'translateY(0)';
  }, 300);
});
const selectTopicBtn = document.getElementById("selectTopicBtn");
const topicMenu = document.getElementById("topicMenu");

selectTopicBtn.addEventListener("click", () => {
  topicMenu.style.display = topicMenu.style.display === "flex" ? "none" : "flex";
});

const faders = document.querySelectorAll('.fade-scroll');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
faders.forEach(fader => observer.observe(fader));
const toggleBtn = document.getElementById('toggleDarkMode');
const iconSpan = document.getElementById('darkModeIcon');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change the icon based on mode
  if (document.body.classList.contains('dark-mode')) {
    iconSpan.textContent = '🌞'; // Light mode icon
  } else {
    iconSpan.textContent = '🌙'; // Dark mode icon
  }
});

//redirect login page
document.getElementById("loginBtn").addEventListener("click", function() {
  window.location.href = "login-page.html"; // Replace with your actual login page path
});

document.getElementById("signupBtn").addEventListener("click", function() {
  window.location.href = "login-page.html"; // Replace with your actual signup page path
});
