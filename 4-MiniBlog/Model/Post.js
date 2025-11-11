import posts from '../database/post.json' with  { type: 'json' };

export default class Post {
    user_id;
    title;
    description;
    created_at;
    constructor(user_id, title, description) {
        this.id = posts.length + 1;
        this.user_id = user_id;
        this.title = title;
        this.description = description;
        this.created_at = new Date();
    }

    static async loadJSONToLocalStorage() {
        const res = await fetch(posts);
        const json = await res.json();
        localStorage.setItem('posts', JSON.stringify(json));
    }

    index(user_id) {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts = posts.filter(post => post.user_id === user_id);
        return posts;
    }

    store() {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        let newPost = {
            "user_id": this.user_id,
            "title": this.title,
            "description": this.description,
            "created_at": this.created_at
        };
        posts.push(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));
        return newPost;
    }
}