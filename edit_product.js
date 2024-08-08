var modal = document.getElementById("editModal");

var btn = document.getElementById("editButton");

var span = document.getElementsByClassName("close-button")[0];

btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var cancelButton = document.querySelector(".cancel");
cancelButton.onclick = function() {
    modal.style.display = "none";
}