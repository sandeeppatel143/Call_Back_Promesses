const books=[
    {
        title:"The Great Gatsby",
        author:"F. Scott Fitzgerald",
        year:1925,
    },
    {
        title:"To Kill a Mockingbird",
        author:"Harper Lee",
        year:1960,
    },
    {
        title:"Who are you?",
        author:"George OrWell",
        year:1949,
    },
    {
        title:"Pride and Prejudice",
        author:"Jane Austen",
        year:1813,
    }
];


function extrectTitles(books,callback){
    const titles=books.map((book)=> book.title)
    callback(titles);
}

function logResult(title){
    title.sort();
    console.log(title.join(", "));
}

extrectTitles(books,logResult)