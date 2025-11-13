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
        const formData = new FormData(this.formElement);
        const firstName = formData.get('first_name');
        const lastName = formData.get('last_name');
        const email = formData.get('email');
        const password = formData.get('password');
        console.log('Form Data:', { firstName, lastName, email, password });
        return formData;
    }

    static login(email, password) {
        let response = User.login(email, password);
        if (response.success) {
            localStorage.setItem('user_id', response.user_id);
            return response;
        }
        else {
            localStorage.setItem('user_id', null);
            return {
                success: false,
                "message": "Incorrect credentials"
            }
        }
    }

    signUp() {
        let formData = this.initializeSignUp();
        if (User.checkIfEmailExists(formData.get("email"))) {
            return {
                "message" : "Email already exist !",
                "success" : false
            }
        }
        let user = new User(
            formData.get('first_name'),
            formData.get('last_name'),
            formData.get('email'),
            formData.get('password'),
        );
        let response = user.store();
        if (response.success) {
            return {
                "success": true,
                "user": user,
                "message": "Signup successful! 🎉\nYou will be redirected to login. Make sure to use the same credentials."
            };
        }
        else {
            return response;

        }

    }
}