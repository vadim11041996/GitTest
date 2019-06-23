function substitute(){
  let myValue = document.getElementById('myTextBox').value;   

  if (myValue.length == 0) {
    alert('Please enter a real value in the text box!');
    return;
  }
  let myTitle = document.getElementById('title');
  myTitle.innerHTML = myValue;
}