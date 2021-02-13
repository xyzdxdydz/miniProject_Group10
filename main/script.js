function makeNewNode(text) {
    newNode = document.createElement('div');
    newNode.setAttribute("class", "slot");
    addText = document.createElement('h2');
    addText.innerText = text;
    newNode.appendChild(addText);
    return newNode;
}

var i;

show = document.getElementById("statussection");

for (i = 1; i < 4; i++) {
    show.appendChild(makeNewNode("Slot" + i));
}