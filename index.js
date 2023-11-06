//in this lab I will be using fetch() to send web request to the GOT API
//what is API (application programming interface)?
//is a manner in which companies expose their data and/or functionality to the public
//for people like me to use
//APIs allow us to add important data and functionality to the applications we build. You can think of an API 
//as one way in which data is exposed to us developers for use in our own programs.

//Just like we can use JavaScript to send a web request for a web page that is written in HTML, and receive a 
//response that is full of HTML, we can use JavaScript to send a web request to an API and receive a collection 
//of JSON in return.
//With just one easy line of code, we can tell JavaScript to treat that JSON collection as a nested Object. 
//In this way, large and complicated amounts of data can be shared across platforms.



//This line is requesting information from a website. It is asking for data about books from a specific website.
//It is like asking someone for a book recommendation.
//OR 
//THINK OF IT THIS WAY
//This line is asking the computer to go to a special place on the internet called an API (Application Programming 
//Interface) and get some information about books. The API is like a big library of information that we can access 
//using code.
fetch("https://anapioficeandfire.com/api/books")
//This part is saying that once we get a response from the website, we want to convert it into a format that we 
//can understand. It's like getting a secret code and decoding it to know what it says.
  .then((resp) => resp.json())
//In this line, it is telling the computer to print out the decoded information on the screen so we can see it.
  .then((json) => console.log(json));

//in conlusion:
//So, the whole code is basically asking a website for information about books, converting the response into a format
//we can understand, and then showing that information to us.

 
//declaring function fetchbooks with no parameters
function fetchBooks() {
// using fetch to send request to the website
//It's like sending a message to that web address and asking for something. The return keyword means that the result
//of this line will be sent back as the output of the fetchBooks() function.
  return fetch("https://anapioficeandfire.com/api/books")
//This line is saying that once we get a response back from the web address, we want to do something with it. 
//The response here is the message we received back from the web address. The => is a way to define a function, 
//and response.json() is a function that converts the response into a format that we can use.
  .then((response) => response.json())
//This line is saying that once we have the data in a usable format, we want to do something with it. 
//The data here is the converted response, which is now in a format that we can work with. The renderBooks(data) 
//is another function that will take the data as input and do something with it.
  .then((data) => renderBooks(data))
}

//his line is defining a function called renderBooks(books). This function takes a list of books as it's parameter
function renderBooks(books) {
//This line is creating a variable called main and setting it to the HTML element that has the tag name 'main'. 
  const main = document.querySelector('main');
//This line is saying that for each book in the list of books, we want to do something with it. It's like going 
//through a list of books one by one.
  books.forEach(book => {
//This line is creating a new HTML element called h2, which represents a heading.
    const h2 = document.createElement('h2');
//This line is setting the content of the h2 element to be the name of the current book we are looking at.
//The innerHTML property is used to get or set the HTML content inside an element.
    h2.innerHTML = book.name;
//his line is adding the h2 element (with the book's name) as a child element of the main element on the webpage. 
//It's like putting the heading under the main part of the webpage.
    main.appendChild(h2);
  });
}

//his line is saying that when the webpage has finished loading (when it's ready), we want to do something.
document.addEventListener('DOMContentLoaded', function() {
//This line is calling the fetchBooks() function we defined earlier. It's like saying, "Hey, go and fetch 
//the books from the web address we specified earlier!"
  fetchBooks();
});

//In summary, this code is making a request to a web address to get a list of books. Once we get that list, 
//we are creating a heading for each book and adding it to a specific part of a webpage. When the webpage 
//finishes loading, we automatically fetch the books and display them
