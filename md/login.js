document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const password = loginForm.password.value;

        const validPassword = "nullpro228.pro";

        if (password === validPassword) {
            window.location.href = "Максим Денис/index.html";
        } else {
            window.location.href = "loginError.html";
        }
    });
});