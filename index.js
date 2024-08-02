let githubBtn = document.getElementById("githubBtn");
let frontendMentorBtn = document.getElementById("frontendMentorBtn");
let linkedinBtn = document.getElementById("linkedinBtn");
let twitterBtn = document.getElementById("twitterBtn");
let instagramBtn = document.getElementById("instagramBtn");

// Add event listeners to each button
githubBtn.addEventListener("click", function() {
  window.location.href = "https://github.com/"; 
});

frontendMentorBtn.addEventListener("click", function() {
  window.location.href = "https://www.frontendmentor.io";
});

linkedinBtn.addEventListener("click", function() {
  window.location.href = "https://www.linkedin.com/"; 
});
twitterBtn.addEventListener("click", function() {
  window.location.href = "https://twitter.com/"; 
});

instagramBtn.addEventListener("click", function() {
  window.location.href = "https://www.instagram.com/"; 
});
