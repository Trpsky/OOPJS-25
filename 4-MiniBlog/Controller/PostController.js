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
        const user_id = formData.get('user_id');
        const title = formData.get('title');
        const description = formData.get('description');
        console.log('Form Data:', { user_id, title, description });
        return formData;
    }

    insertPost(e) {
        let formData = this.initialize();
        let post = new Post(
            formData.get('user_id') || 1,
            formData.get('title'),
            formData.get('description')
        );
        let newPost = post.store();
        console.log('New Post Created:', newPost);
        console.log(e);
        this.form.reset();
        return newPost;
    }

    static renderPosts(user_id) {
        const post = new Post();
        const posts = post.index(user_id);
        console.log('Posts for User ID', user_id, ':', posts);
        return posts;
    }   
}