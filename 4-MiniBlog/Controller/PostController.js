import Post from '../Model/Post.js';
import posts from '../database/post.json' with  { type: 'json' };

export default class PostController {
    constructor(formElement, e) {
        this.formElement = formElement;
        this.event = e;
    }

    static async loadJSONToLocalStorage() {
        const res = await fetch(posts);
        const json = await res.json();
        localStorage.setItem('posts', JSON.stringify(json));
    }

    initialize() {
        console.log("PostController Initialized");
        this.event.preventDefault();
        const formData = new FormData(this.formElement);
        const user_id = localStorage.getItem("user_id");
        const title = formData.get('title');
        const description = formData.get('description');
        console.log('Form Data:', { user_id, title, description });
        return {
            "formData": formData,
            "user_id": user_id
        };
    }

    insertPost() {
        let response = this.initialize();
        let post = new Post(
            response.user_id,
            response.formData.get('title'),
            response.formData.get('description')
        );
        let newPost = post.store();
        console.log('New Post Created:', newPost);
        return newPost;
    }

    static renderPosts(user_id) {
        const posts = Post.index(user_id);
        return posts;
    }
}