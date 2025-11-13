import usersJson from '../database/user.json' with  { type: 'json' };

export default class User {
    id;
    first_name;
    last_name;
    email;
    password;
    constructor(first_name, last_name, email, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        console.log(users.length);
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

    static index() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        return users;
    }

    store() {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        let newUser = {
            "id": this.id,
            "first_name": this.first_name,
            "last_name": this.last_name,
            "email": this.email,
            "password": this.password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        return {
            "success" : true,
            "user" : newUser
        };
    }

    static checkIfEmailExists(email = "") {
        let users = User.index();
        return users.some(user => user.email === email);
    }
    static login(email, password) {
        let users = User.index();
        let user = users.find(user => user.email === email && user.password === password);
        if (user) {
            return {
                "user_id": user.id,
                "success": true
            }
        }
        return {
            "success": false
        }
    }
}