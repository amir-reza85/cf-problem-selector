function createButton(context, func) {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Hide solved problems";
    button.onclick = func;
    context.appendChild(button);
}

var d = document.getElementsByClassName("second-level-menu-list")[1]
var s = "https://codeforces.com/problemset"
var t = window.location.href;
var r = s + "/problem";
var i = s + "/gymproblem";
var n = "https://codeforces.com/problemset/customtest"
var g = "https://codeforces.com/problemset/standings"
var z = "https://codeforces.com/problemset/status"
var y = "https://codeforces.com/problemset/submit"
var dd = "https://codeforces.com/problemsets/acmsguru/submit"
var ff = "https://codeforces.com/problemsets/acmsguru/status"
var jj = "https://codeforces.com/problemsets/acmsguru/standings"
var ii = "https://codeforces.com/problemsets/acmsguru/customtest"
var gg = "https://codeforces.com/problemset/submisson"
if (t.indexOf(s) == 0 && t.indexOf(r) != 0 && t.indexOf(i) != 0 && t.indexOf(n) != 0 && t.indexOf(g) != 0 && t.indexOf(z) != 0 && t.indexOf(y) != 0 && t.indexOf(dd) != 0 && t.indexOf(ff) != 0 && t.indexOf(ii) != 0 && t.indexOf(jj) != 0 && t.indexOf(gg) != 0){
	createButton (d, hide)
}
function hide(){
	var s = "https://codeforces.com/problemset"
	var t = window.location.href;
	var x = document.getElementsByClassName("accepted-problem")
	for (var i = 0; i < x.length; i++){
	   	x[i].innerHTML = ''
	}
}