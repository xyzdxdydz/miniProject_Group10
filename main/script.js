
// Function Section
function makeNewNode(text, num, status) {
    newNode = document.createElement('h2');
    newNode.setAttribute("id", i);
    newNode.innerText = text + i;
    newNode.setAttribute("onClick", "reply_click(this.id)");

    var assign;
    if (status == 1) {
        assign = "freeSlot";
        addText = document.createElement('h2');
        addText.innerText = "(Available)";
        newNode.appendChild(addText);
    } else {
        assign = "inUseSlot";
    }

    newNode.setAttribute("class", assign);
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