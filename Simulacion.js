const users = [
    { id: 1, name: "David vera", email: "Davidvera@email.com" },
    { id: 2, name: "Juan David", email: "Jdavid@email.com" },
    { id: 3, name: "David moreno", email: "Davidmoreno@email.com" }
];

async function getUsers() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Error al cargar usuarios");
                return;
            } else {
                resolve(users)
            }
        }, 2000);
    });
}

async function loadUsers() {
    const list = document.getElementById("userList");
    list.innerHTML = "Cargando...";

    try {
        const data = await getUsers();

        list.innerHTML = "";

        data.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name + " - " + user.email;
            list.appendChild(li);
        });

    } catch (error) {
        list.innerHTML = error;
    }
}