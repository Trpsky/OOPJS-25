class Post{
    user_id;
    title; 
    description;
    created_at;
    constructor(user_id, title, description){   
        this.user_id = user_id;
        this.title = title;
        this.description = description;
        this.created_at = new Date();
    }
}