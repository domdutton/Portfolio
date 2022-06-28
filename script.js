//set variables
var read_more, read_less, more_text;  

//functions

//sends welcome message to user when page loads
function welcome(){
  more_text = document.getElementById('more-text');
  read_more = document.getElementById('read-more');
  read_less = document.getElementById('read-less');
  more_text.style.display = 'none';
  read_more.style.display = 'block';
  read_less.style.display = 'none';
  alert("Welcome guest, and thanks for visiting");
}

//function to show more content for the text
function read_more_text() {
  more_text.style.display = 'block';
  read_more.style.display = 'none';
  read_less.style.display = 'block';
}

//function to hide more content on text
function read_less_text() {
  more_text.style.display = 'none';
  read_more.style.display = 'block';
  read_less.style.display = 'none';
}

//function to go back to the top of the page
function scroll_to_top() {
  window.scrollTo(document.body.scrollHeight, 0);
}