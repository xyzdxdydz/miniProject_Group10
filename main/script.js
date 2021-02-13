
// Function Section
function makeNewNode(text, num, status) {
    newNode = document.createElement('h2');

    var assign;
    if (status == 1) {
        assign = "freeSlot";
    } else {
        assign = "inUseSlot";
    }

    newNode.setAttribute("class", assign);
    newNode.setAttribute("id", i);
    newNode.innerText = text + i;
    newNode.setAttribute("onClick", "reply_click(this.id)");
    addText = document.createElement('h2');
    newNode.appendChild(addText);
    return newNode;
}

function reply_click(clicked_id) {
      clickID = clicked_id;
  }

function showAllStat(id) {
    box = document.createElement('div');
    box.setAttribute("id", "showstat");

    text = document.createElement('p');
    text.innerText = "Some text in the Modal..";
    box.appendChild(text);

    content.appendChild(box);
}   

// Variable Section
var i;
var data = [1, 0, 0, 1];

// Get Data section
show = document.getElementById("statussection");
content = document.getElementById("forcontent");

for (i = 1; i <= 4; i++) {
    show.appendChild(makeNewNode("Slot ", i, data[i-1]));
}


var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");
var btn3 = document.getElementById("3");
var btn4 = document.getElementById("4");

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
modal.style.display = "block";
showAllStat("1");
}
btn2.onclick = function() {
modal.style.display = "block";
showAllStat("2");
}
btn3.onclick = function() {
modal.style.display = "block";
showAllStat("3");
}
btn4.onclick = function() {
modal.style.display = "block";
showAllStat("4");
}

span.onclick = function() {
    modal.style.display = "none";
    var rm = document.getElementById("showstat");
    rm.remove();
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    var rm = document.getElementById("showstat");
    rm.remove();
    }
}
