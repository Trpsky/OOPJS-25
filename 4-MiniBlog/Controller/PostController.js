import Post from '../Model/Post.js';
class PostController {
    constructor(formElement) {
        this.formElement = formElement;
        this.initialize();
    }

    initialize() {
        this.formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(this.formElement);
            const user_id = formData.get('user_id');
            const title = formData.get('title');
            const description = formData.get('description');
            console.log('Form Data:', { user_id, title, description });
        });
    }

    insertPost(formData) {
        this.initialize();
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
export default PostController;