function addText(event) {
    var targ = event.target || event.srcElement;
    document.getElementById("editor").value += targ.textContent || targ.innerText;
}