document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const password = loginForm.password.value;

        const validPassword = "QaZwSxEdC1029[]";

        if (password === validPassword) {
            window.location.href = "Юрій Шарабун/index.html";
        } else {
            window.location.href = "loginError.html";
        }
    });
});