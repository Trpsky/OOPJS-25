import User from "./Model/User.js";
import Post from "./Model/Post.js";

// let user1 = new User("Ahmed", "Jamal", "ahmedjamal@gmail.com" , "123456789");
// console.log(user1.store()); 

let post1 = new Post(1, "My First Post", "This is the content of my first post.");
console.log(post1.store());