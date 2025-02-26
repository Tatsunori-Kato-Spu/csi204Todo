function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            let userList = document.getElementById("user-list");
            userList.innerHTML = "";
            users.forEach(user => {
                let li = document.createElement("li");
                li.className = "user-item";
                li.innerHTML = `<strong>${user.name}</strong><br>Email: ${user.email}<br>Address: ${user.address.street}, ${user.address.city}`;
                userList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching users:", error));
}