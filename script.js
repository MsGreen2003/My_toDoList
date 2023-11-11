//Create a "close" button and append to each element
var myNodelist = document.getElementsByTagName("li");
var i;
for (i=0;i<myNodelist.length;i++){
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//click close button to hide the selected list item
var close = document.getElementsByClassName("close");
var i;
for (i=0;i<close.length;i++){
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//create a new list item when clicking on the "add" button
function newElement(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if(inputValue===''){
    alert("Please write somthing broh!");
  }
  else {
    document.getElementById("myUL").appendChild(li);
  }
   //clear input to empty
   document.getElementById("myInput").value="";

   var span = document.createElement("span");
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);

   for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 
 



