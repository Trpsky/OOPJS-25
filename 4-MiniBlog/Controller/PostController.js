import Post from '../Model/Post.js';
export default class PostController {
    constructor(formElement, e) {
        this.formElement = formElement;
        this.event = e;
    }

    initialize() {
        console.log("PostController Initialized");
        this.event.preventDefault();
        const formData = new FormData(this.formElement);
        const user_id = formData.get('user_id');
        const title = formData.get('title');
        const description = formData.get('description');
        console.log('Form Data:', { user_id, title, description });
        return formData;
    }

    insertPost() {
        let formData = this.initialize();
        let post = new Post(
            formData.get('user_id'),
            formData.get('title'),
            formData.get('description')
        );
        let newPost = post.store();
        console.log('New Post Created:', newPost);
        return newPost;
    }
}