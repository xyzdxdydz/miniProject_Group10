function popupPrice(id, price) {
    box = document.createElement('div');
    box.setAttribute("id", "showprice");

    text = document.createElement('p');
    text.innerText = "From Slot "+ id;
    
    text2 = document.createElement('p');
    text2.innerText = "You got " + price + " Xcoin(s)";
    box.appendChild(text);
    box.appendChild(text2);

    content.appendChild(box);
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

modal.style.display = "block";
popupPrice();

span.onclick = function() {
    modal.style.display = "none";
    var rm = document.getElementById("showprice");
    rm.remove();
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    var rm = document.getElementById("showprice");
    rm.remove();
    }
}