
function login(email, password) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (email === "Yennifer@email.com" && password === "1234") {
                resolve("Login exitoso");
            } else {
                reject("Credenciales incorrectas");
            }
        }, 2000);
    });
}

async function startLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    message.innerHTML = "Validando...";

    try {
        const response = await login(email, password);
        message.innerHTML = response;
    } catch (error) {
        message.innerHTML = error;
    }
}