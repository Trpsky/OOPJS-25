import usersJson from '../database/user.json' with  { type: 'json' };

export default class User {
    id;
    first_name;
    last_name;
    email;
    password;
    constructor(first_name, last_name, email, password) {
        if (this.checkIfEmailExists(email)) {
            throw new Error("Email already exists!");
        }
        this.id = users.length + 1;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        console.log("User created:", this.first_name, this.last_name);
    }

    static async loadJSONToLocalStorage() {
        const res = await fetch(usersJson);
        const json = await res.json();
        localStorage.setItem('users', JSON.stringify(json));
    }

    index() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        return users;
    }

    store() {
        let users = this.index();
        let newUser = {
            "id": this.id,
            "first_name": this.first_name,
            "last_name": this.last_name,
            "email": this.email,
            "password": this.password
        };
        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        return newUser;
        // console.log("User stored:", newUser);
    }

    checkIfEmailExists(email = "") {
        let users = this.index();
        return users.some(user => user.email === email);
    }
    static login(email, password) {
        let users = this.index();
        let user = users.find(user => user.email === email && user.password === password);
        if (user) {
            return true
        }
        return false;
    }
}