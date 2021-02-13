var btn1 = document.getElementById("statbutton");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
modal.style.display = "block";
showAllStat("1");
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