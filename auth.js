function showForm(form) {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const loginToggle = document.getElementById("loginToggle");
    const signupToggle = document.getElementById("signupToggle");
  
    if (form === "login") {
      loginForm.classList.add("active");
      signupForm.classList.remove("active");
      loginToggle.classList.add("active");
      signupToggle.classList.remove("active");