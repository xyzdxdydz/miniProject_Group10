function makeNewNode(text, status) {
    newNode = document.createElement('div');

    var assign;
    if (status == 1) {
        assign = "freeSlot";
    } else {
        assign = "inUseSlot";
    }

    newNode.setAttribute("class", assign);
    addText = document.createElement('h2');
    addText.innerText = text;
    newNode.appendChild(addText);
    return newNode;
}

var i;
var data = [1, 0, 0, 1];
show = document.getElementById("statussection");

for (i = 1; i <= 4; i++) {
    show.appendChild(makeNewNode("Slot " + i, data[i-1]));
}
