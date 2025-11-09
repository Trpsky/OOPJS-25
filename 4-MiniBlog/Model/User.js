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
        this.id = users.length + 1;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        console.log("User created:", this.first_name, this.last_name);
    }

    index() {
        return users.length;
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

}