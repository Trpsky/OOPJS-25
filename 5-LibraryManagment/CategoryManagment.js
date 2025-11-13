function categoryManagment() {
    let categories = new Set(["Fiction", "Science", "History"]);
    console.log(categories);
    //.
    console.log("Add item in set");
    categories.add("Romance");
    console.log(categories);

    //.
    console.log("Try to add an existing item in set");
    categories.add("History");
    console.log(categories);

    //.
    console.log("Delete item from set");
    categories.delete("Romance");
    console.log(categories);
}

export default categoryManagment;