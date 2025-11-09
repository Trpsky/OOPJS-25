import posts from '../database/post.json' with  { type: 'json' };

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const usersPath = resolve(__dirname, '../database/post.json');
export default class Post{
    user_id;
    title; 
    description;
    created_at;
    constructor(user_id, title, description){  
        this.id = posts.length + 1; 
        this.user_id = user_id;
        this.title = title;
        this.description = description;
        this.created_at = new Date();
    }
    index(user_id){
        posts = posts.filter(post => post.user_id === user_id);
        return posts;
    }

    store(){
        let newPost = {
            "user_id": this.user_id,
            "title": this.title,
            "description": this.description,
            "created_at": this.created_at
        };
        posts.push(newPost);

        writeFileSync(usersPath, JSON.stringify(posts, null, 2));

        return newPost;
    }
}