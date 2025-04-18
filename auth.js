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
    } else {
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
        signupToggle.classList.add("active");
        loginToggle.classList.remove("active");
      }
    }
    function handleLogin(event) {
        event.preventDefault();
        localStorage.setItem("isLoggedIn", "true");