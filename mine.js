let p = document.getElementById("demo");
let btnRef = document.querySelectorAll(".btn");
let dooze = document.getElementById("dooz");
let arr = [];
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
                    (dooze.style.display = "none"),
                    (p.innerHTML = element1 + "       is  win"),
                    (document.getElementById("refresh").style.display = "")
                );
            }
        }
    }
}
function relode() {
    location.reload();
}
// }
// function patternn() {
//     let a = document.getElementById("a").innerHTML;
//     let b = document.getElementById("b").innerHTML;
//     let c = document.getElementById("c").innerHTML;
//     let d = document.getElementById("d").innerHTML;
//     let e = document.getElementById("e").innerHTML;
//     let f = document.getElementById("f").innerHTML;
//     let g = document.getElementById("g").innerHTML;
//     let h = document.getElementById("h").innerHTML;
//     let i = document.getElementById("i").innerHTML;
//     if (a == img1 && b == img1 && c == img1) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img1 + "       is  win")
//         );
//     }
//     if (d == img1 && e == img1 && f == img1) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img1 + "       is  win")
//         );
//     }
//     if (g == img1 && h == img1 && i == img1) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img1 + "       is  win")
//         );
//     }
//     if (a == img1 && d == img1 && g == img1) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img1 + "       is  win")
//         );
//     }
//     if (b == img1 && e == img1 && h == img1) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img1 + "       is  win")
//         );
//     }
//     if (c == img1 && f == img1 && i == img1) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img1 + "       is  win")
//         );
//     }
//     if (a == img1 && e == img1 && i == img1) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img1 + "       is  win")
//         );
//     }
//     if (c == img1 && e == img1 && g == img1) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img1 + "       is  win")
//         );
//     }
//     if (a == img2 && b == img2 && c == img2) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img2 + "       is  win")
//         );
//     }
//     if (d == img2 && e == img2 && f == img2) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img2 + "       is  win")
//         );
//     }
//     if (g == img2 && h == img2 && i == img2) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img2 + "       is  win")
//         );
//     }
//     if (a == img2 && d == img2 && g == img2) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img2 + "       is  win")
//         );
//     }
//     if (b == img2 && e == img2 && h == img2) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img2 + "       is  win")
//         );
//     }
//     if (c == img2 && f == img2 && i == img2) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img2 + "       is  win")
//         );
//     }
//     if (a == img2 && e == img2 && i == img2) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img2 + "       is  win")
//         );
//     }
//     if (c == img2 && e == img2 && g == img2) {
//         return (
//             (dooze.style.visibility = "hidden"),
//             (p.innerHTML = img2 + "       is  win")
//         );
//     }
// }
