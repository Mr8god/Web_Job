function addStr(s) {
    var inp = document.getElementById("inp");
    inp.value = inp.value + s;
}

function calc() {
    var inp = document.getElementById("inp");
    val = eval(inp.value);
    inp.value = val;
}

function cls() {
    var inp = document.getElementById("inp");
    inp.value = "";
}

function back() {
    var inp = document.getElementById("inp");
    var str = inp.value.substr(0, inp.value.length-1);
    inp.value = str;
}