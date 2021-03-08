chrome.storage.local.get(['theme'], function(data) {
  if (data.theme == undefined) {
    console.log ("FT!!")
    if (document.getElementById("st"))
      chrome.storage.local.set({'theme': document.getElementById("st").href})
    console.log (data.theme)
  }else {
    if (document.getElementById("st"))
      document.getElementById("st").href = data.theme
  }
});
chrome.storage.local.get(['user_name'], function(data) {
    var un = data.user_name
    if (document.getElementById('handle')) {
    if (un == undefined){
      document.getElementById('handle').innerHTML = "Please Login"
      document.getElementById('sum').innerHTML = "Login"
    }
    else {
      document.getElementById('handle').innerHTML = un
      rjson("https://codeforces.com/api/user.status?handle=" + handle, function(text){
      d = []
      f = []
      var hh = JSON.parse(text);  
      for (var i = 0; i < hh["result"].length; i++) {
        if (hh["result"][i]["verdict"] == "OK") {
          is_solved[(hh["result"][i]["problem"]["contestId"]) + (hh["result"][i]["problem"]["index"])] = 1
          var contest = (hh["result"][i]["problem"]["contestId"])
          var index = (hh["result"][i]["problem"]["index"])
          //console.log(contest + index, is_solved[(contest) + (index)])
          //console.log (is_solved[parseInt(hh["result"][i]["problem"]["contestId"])][(hh["result"][i]["problem"]["index"])])
      }
      dd = d
      ff = f
      }
  });
    }
  }
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var handle

function rjson(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
      //var res = x["result"]["problems"]
    //for (var i = 0; i < res.length; i++) {
  //  is_solved[(res[i]["contestId"]) + (res[i]["index"])] = 0
  //}
chrome.storage.local.get(['user_name'], function(data) {
    handle = data.user_name
    rjson("https://codeforces.com/api/user.status?handle=" + handle, function(text){
      d = []
      f = []
      var hh = JSON.parse(text);  
      for (var i = 0; i < hh["result"].length; i++) {
        if (hh["result"][i]["verdict"] == "OK") {
          is_solved[(hh["result"][i]["problem"]["contestId"]) + (hh["result"][i]["problem"]["index"])] = 1
          var contest = (hh["result"][i]["problem"]["contestId"])
          var index = (hh["result"][i]["problem"]["index"])
          //console.log(contest + index, is_solved[(contest) + (index)])
          //console.log (is_solved[parseInt(hh["result"][i]["problem"]["contestId"])][(hh["result"][i]["problem"]["index"])])
      }
      dd = d
      ff = f
      }
  });
  });

var is_solved = {}
rjson("https://codeforces.com/api/user.status?handle=" + handle, function(text){
      d = []
      f = []
      var hh = JSON.parse(text);  
      for (var i = 0; i < hh["result"].length; i++) {
        if (hh["result"][i]["verdict"] == "OK") {
          is_solved[(hh["result"][i]["problem"]["contestId"]) + (hh["result"][i]["problem"]["index"])] = 1
          var contest = (hh["result"][i]["problem"]["contestId"])
          var index = (hh["result"][i]["problem"]["index"])
          //console.log(contest + index, is_solved[(contest) + (index)])
          //console.log (is_solved[parseInt(hh["result"][i]["problem"]["contestId"])][(hh["result"][i]["problem"]["index"])])
      }
      dd = d
      ff = f
      }
  });
var x

rjson("https://codeforces.com/api/problemset.problems", function(text){
    var y = JSON.parse(text);
    x = y
  //  console.log(x)
});

var sub


var dd = [];
var ff = [];

function solved(handle, contest, index) {
  //console.log(contest + index, is_solved[(contest) + (index)])
  if (is_solved[(contest) + (index)] == 1)
	 return 1;
  else
    return 0;
}

function change(){
  chrome.storage.local.set({'user_name': document.getElementById('handlein').value})
    document.getElementById('handle').innerHTML = document.getElementById('handlein').value
    location.reload();
}

function choose() {
	//console.log(x);
//	console.log(x)
  var a = []
  var b = []
  var l = document.getElementById('l').value
  var r = document.getElementById('r').value
  var res = x["result"]["problems"]
  for (var i = 0; i < res.length; i++) {
    if (parseInt(res[i]["rating"]) >= l && parseInt(res[i]["rating"]) <= r && solved(handle,parseInt(res[i]["contestId"]), res[i]["index"]) == 0) {
      //console.log(res[i]["contestId"], res[i]["index"])
      a.push(res[i]["contestId"])
      b.push(res[i]["index"])
    }
  }
  if (a.length == 0) {
    document.getElementById('err').innerHTML = ('No such problem for you')
    document.getElementById('err').style = 'color: red;'
    return;
  }
  i = Math.floor(Math.random() * (a.length))
  document.getElementById('link').href = "https://codeforces.com/problemset/problem/" + a[i] + '/' + b[i]
  document.getElementById('link').click()
}
function theme() {
  var y = document.getElementById("st").href
  var ys = document.getElementById("st").href.length
  var g = ""
  var yy = ""
  for (var i = 0; i < ys - 9; i++) {
    yy += y[i]
  }
  for (var i = ys - 9; i <= ys - 1; i++ )
    g += y[i]
  
  //console.log(yy + g)
  if (g == "style.css")
    document.getElementById("st").href = yy + "black.css"
  else
    document.getElementById("st").href = yy + "style.css"
  chrome.storage.local.set({'theme': document.getElementById("st").href})
}

var el = document.getElementById("ch")
if (el) {
  el.addEventListener("click", choose);  
}
var elx = document.getElementById("x")
if (elx) {
  elx.addEventListener("click", change);
}
var ely = document.getElementById("y")
if (ely) {
  ely.addEventListener("click", theme);
}