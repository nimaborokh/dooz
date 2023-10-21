let p = document.getElementById("demo");
let btnRef = document.querySelectorAll(".btn");
let dooze = document.getElementById("dooz");
let arr = [];
let booly = false;
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
function dooz(a) {
    if (document.getElementById(a).innerHTML == "") {
        arr.push(1);
        return name1(a);
    }
    function name1(a) {
        if ((arr.length + 1) % 2 === 0) {
            return (document.getElementById(a).innerHTML = "x");
        } else {
            return (document.getElementById(a).innerHTML = "o");
        }
    }
}
function patternn() {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        if (element1 != "" && element2 != "" && element3 != "") {
            if (element1 == element2 && element2 == element3) {
                return (
                    ((dooze.style.display = "none"),
                    (p.innerHTML = element1 + "       is  win"),
                    (document.getElementById("refresh").style.display = "")),
                    (document.getElementById("again").style.display = "none"),
                    (booly = true)
                );
            }
        }
    }
}
function again() {
    console.log(btnRef.forEach((element) => (element.innerText = "")));
}
function relode() {
    location.reload();
}
function eqale() {
    if (arr.length == 9 && booly == false) {
        return (
            ((dooze.style.display = "none"),
            (p.innerHTML = "You are tied!"),
            (document.getElementById("refresh").style.display = "")),
            (document.getElementById("again").style.display = "none")
        );
    }
}
