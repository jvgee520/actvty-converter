function kilograms() {
    let grams = document.getElementById("weightInput").value;
    const kilograms = 1000;
    const ans = grams / kilograms;

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "Kilograms";
}

function pounds() {
    let grams = document.getElementById("weightInput").value;
    const pounds = 453.6;
    const ans = grams * pounds;

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "Pounds";
}

function ounces() {
    let grams = document.getElementById("weightInput").value;
    const ounces = 28.35;
    const ans = grams / ounces;

    document.getElementById("display").innerHTML = ans;
    document.getElementById("displayUnit").innerHTML = "Ounces";
}