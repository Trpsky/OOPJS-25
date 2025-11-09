import users from '../database/user.json' with  { type: 'json' };

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const usersPath = resolve(__dirname, '../database/user.json');

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

    index() {
        return users;
    }

    store() {
        let newUser = {
            "id": this.id,
            "first_name": this.first_name,
            "last_name": this.last_name,
            "email": this.email,
            "password": this.password
        };
        users.push(newUser);

        writeFileSync(usersPath, JSON.stringify(users, null, 2));

        return newUser;
        // console.log("User stored:", newUser);
    }

    checkIfEmailExists(email = "") {
        return users.some(user => user.email === email);
    }
    static login(email, password) {
        let user = users.find(user => user.email === email && user.password === password);
        if (user) {
            return true
        }
        return false;
    }
}