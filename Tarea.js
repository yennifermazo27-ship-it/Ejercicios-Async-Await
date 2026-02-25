function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "David Vera" });
        }, 1500); 
    });
}

function getTasksByUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                " Hacer informe",
                "Revisar correos",
                "Asistir a reunion"
            ]);
        }, 1000); 
    });
}

async function loadUserTasks() {

    const lista = document.getElementById("userList");
    lista.innerHTML = ""; 

    const user = await getUser();
    const tasks = await getTasksByUser(user.id);

    const liUser = document.createElement("li");
    liUser.textContent = "Usuario: " + user.name;
    lista.appendChild(liUser);

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        lista.appendChild(li);
    });
}

document.getElementById("boton")
        .addEventListener("click", loadUserTasks);