document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = loginForm.username.value;
        const password = loginForm.password.value;

        const users = [
            { username: "Yurash", password: "QaZwSxEdC1029[]", page: "Юрій Шарабун/index.html" },
            { username: "baslk228", password: "nullpro228.pro", page: "Максим Денис/index.html" }
        ];

        let userFound = false;

        for (const user of users) {
            if (username === user.username && password === user.password) {
                userFound = true;
                window.location.href = user.page;
                break;
            }
        }

        if (!userFound) {
            window.location.href = "loginError.html";
        }
    });
});
