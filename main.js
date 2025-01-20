var selectfield = document.getElementById("selectfield");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");

selectfield.onclick = function(){
list.classList.toggle("hide");
arrowIcon.classList.toggle("rotate");
}
for (options of options){
    options.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    };
}