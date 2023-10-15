let arr = [];
function dooz(a) {
    if (document.getElementById(a).innerHTML == "") {
        arr.push(1);
        return name1(a);
    }
    function name1(a) {
        if ((arr.length + 1) % 2 === 0) {
            return (document.getElementById(
                a
            ).innerHTML = `<img src="img/Screenshot 2023-10-14 184714.png"></img>`);
        } else {
            return (document.getElementById(
                a
            ).innerHTML = `<img src="img/Screenshot 2023-10-14 184803.png"></img>`);
        }
    }
}
