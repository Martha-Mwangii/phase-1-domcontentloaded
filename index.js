// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    // const elem = document.getElementById(text)//displays the initial text in the index.html file
    const element = document.querySelector("#text")//replaces the text in the index.html
    element.textContent = "This is really cool!"
    console.log(element);
  });
