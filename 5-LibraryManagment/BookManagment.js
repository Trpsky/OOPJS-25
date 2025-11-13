function booksManagment(){
    //.
    let books = ["To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "and Pride and Prejudice by Jane Austen"];
    console.log(books);

    //.
    books.push("New Title book");
    console.log(books);

    //.
    books.unshift("New Title book at the beginning");
    console.log(books);

    //.
    books.pop();
    console.log("Last book deleted");
    console.log(books);


    //.
    books.shift();
    console.log("First book deleted");
    console.log(books);


}

export default booksManagment;