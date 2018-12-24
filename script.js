function doTheMath() {
    alert("*WHIRRING NOISES*");
    var arrayMaybe = document.getElementById("form");
    var measuredResult = 0;
    var theoreticalResult = 0;
    var percentDiff = 0;
    measuredResult = parseFloat(arrayMaybe.elements[0].value);
    theoreticalResult = parseFloat(arrayMaybe.elements[1].value);
    percentDiff = Math.abs(((measuredResult - theoreticalResult)/theoreticalResult)) * 100;
    if (isNaN(percentDiff)) {
        alert("Congratulations! You have broke my program! \nPlease try again with valid input.");
    }
    else {
        alert("The percent difference is " + percentDiff + "%"); 
    }
    
}
