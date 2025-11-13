function borrowManagment() {

    //.
    let borrows = new Map();
    console.log(borrows);

    //.
    borrows.set("Harry Potter", "Alice");
    borrows.set("The Hobbit", "Bob");
    borrows.set("1984", "Charlie");
    console.log(borrows);

    //.
    borrows.delete("1984");
    console.log(borrows);

    //.
    if(borrows.has("1984")){
        console.log("1984 is not borrowed");
    }
    else{
        console.log("1984 is borrowed");
    }

    if(borrows.has("The Hobbit")){
        console.log("The Hobbit is not borrowed");
    }
    else{
        console.log("The Hobbit is borrowed");
    }

}

export default borrowManagment;