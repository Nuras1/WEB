var books = [
    {
      "title": "Harry Potter and the Philosopher's Stone",
      "author": "Joanne Rowling",
      "isbn": "1233123",
      "price": "50$"
    },
    {
      "title": "Harry Potter and the Chamber of Secrets",
      "author": "Joanne Rowling",
      "isbn": "222332",
      "price": "40$"
    },
    {
      "title": "Harry Potter and the Prisoner of Azkaban",
      "author": "Joanne Rowling",
      "isbn": "452323",
      "price": "55$"
    },
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "isbn": "9383292",
      "price": "30$"
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "isbn": "1234567",
      "price": "25$"
    }
  ];
  
  var inputAuthor = prompt("Enter the author:");
  
  var match = [];
  
  for (var i = 0; i < books.length; i++) {
    if (books[i]["author"] === inputAuthor) {
      match.push(books[i]);
    }
  }
  
  if (match.length > 0) {
    var output = "";
    for (var j = 0; j < match.length; j++) {
      output += match[j]["title"] + " - " + match[j]["author"] + " - " + match[j]["isbn"] + " - " + match[j]["price"] + "\n";
    }
    alert(output);
  } else {
    alert("No books found for the given author.");
  }
  