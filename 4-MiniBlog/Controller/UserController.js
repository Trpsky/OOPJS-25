import User from "../Model/User.js";
import usersJson from '../database/user.json' with  { type: 'json' };

export default class UserController {

    constructor(formElement, e) {
        this.formElement = formElement;
        this.event = e;
    }

    static async loadJSONToLocalStorage() {
        const res = await fetch(usersJson);
        const json = await res.json();
        localStorage.setItem('users', JSON.stringify(json));
    }

    initializeLogin() {
        console.log("UserController Initialized in signup");
        this.event.preventDefault();
        const formData = new FormData(this.formElement);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log('Form Data:', { email, password });
        return formData;
    }

    initializeSignUp() {
        console.log("UserController Initialized in login");
        this.event.preventDefault();
        const formData = new FormData(this.formElement);
        const firstName = formData.get('first_name');
        const lastName = formData.get('last_name');
        const email = formData.get('email');
        const password = formData.get('password');
        console.log('Form Data:', { firstName , lastName, email, password });
        return formData;
    }

    login() {
        
    }

    signUp() {
        let formData = this.initializeSignUp();
        let user = new User(
            formData.get('first_name'),
            formData.get('last_name'),
            formData.get('email'),
            formData.get('password'),
        );
        let newUser = user.store();
        console.log('New User Created:', newUser);
        return true;
    }
}