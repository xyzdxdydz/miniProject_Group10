// Function Section
function makeNewNode(text, num, status) {
    newNode = document.createElement('h2');
    newNode.setAttribute("id", i);
    newNode.innerText = text + i;
    newNode.setAttribute("onClick", "reply_click(this.id)");

    var assign;
    if (status == 1) {
        assign = "freeSlot";
        addText = document.createElement('h4');
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

// Variable Section
var i;
var data = [1, 0, 0, 1];

// Get Data section
show = document.getElementById("statussection");

setInterval(() => {
    fetch("https://exceed10.cpsk-club.xyz/")
    .then((data) => data.json())
    .then(datas => { 
        var rm = document.getElementById("fetch");
        rm.remove();

        var newdiv = document.createElement("div");
        newdiv.setAttribute("id", "fetch");
        
        var i = 1;

        datas.forEach(d => {
            if (!cache.includes(d.author)) {
                newdiv.appendChild(makeNewNode("Slot ", i, data[i-1]));
                i++;
            }
        });

        show.appendChild(newdiv);
    });
}, 5000);