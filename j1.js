document.addEventListener('DOMContentLoaded', () => {
    
const toggleButton = document.getElementById('toggleButton');
const calculator2D = document.getElementById('2dCalculator');
const calculator3D = document.getElementById('3dCalculator');

toggleButton.addEventListener('click', () => {
  if (calculator2D.style.display === 'none') {
    calculator2D.style.display = 'block';
    calculator3D.style.display = 'none';
    toggleButton.innerHTML = "Switch to 3D";

  } else {
    calculator2D.style.display = 'none';
    calculator3D.style.display = 'block';
    toggleButton.innerHTML = "Switch to 2D";
  }
});
});

function rectangle(){
	event.preventDefault();
    let len = document.getElementById("length");
    let bth = document.getElementById("breadth");
    let ans = document.getElementById("ans");

    if(len.value == "" || bth.value == ""){
        alert("Inputs cannot be Empty !");
    }
    else if(len.value <= 0 || bth.value <= 0){
        alert("Positive Inputs Only !")
        len.focus();
    }
    else{
        let area = parseFloat(len.value) * parseFloat(bth.value);
        ans.innerHTML = "Area of rectangle is " + area.toFixed(2) + " sq. units.";
    }
}
function square(){
	event.preventDefault();
    let len = document.getElementById("sq-length");
    let ans = document.getElementById("sq-ans");

    if(len.value == ""){
        alert("Inputs cannot be Empty !");
    }
    else if(len.value <= 0){
        alert("Positive Inputs Only !")
        len.focus();
    }
    else{
        let area = parseFloat(len.value) * parseFloat(len.value);
        ans.innerHTML = "Area of square = " + area.toFixed(2) + " sq. units.";
    }
}
function triangle(){
	event.preventDefault();
    let base = document.getElementById("tri-base");
    let height = document.getElementById("tri-height");
    let ans = document.getElementById("tri-ans");

    if(base.value == "" || height.value == ""){
        alert("Inputs cannot be Empty !");
    }
    else if(base.value <= 0 || height.value <= 0){
        alert("Positive Inputs Only !")
        base.focus();
    }
    else{
        let area = (parseFloat(base.value) * parseFloat(height.value))/2;
        ans.innerHTML = "Area of triangle = " + area.toFixed(2) + " sq. units.";
    }
}
function circle(){
	event.preventDefault();
    let radius = document.getElementById("circleRadius");
    const PI = 22/7;
    let ans = document.getElementById("circleAns");

    if(radius.value == ""){
        alert("Inputs cannot be Empty !");
    }
    else if(radius.value <= 0){
        alert("Positive Inputs Only !")
        radius.focus();
    }
    else{
        let area = PI * parseFloat(radius.value) ** 2;
        ans.innerHTML = "Area of circle = " + area.toFixed(2) + " sq. units.";
    }
}

function cuboid(){
	event.preventDefault();
    let len = document.getElementById("cuboidLength");
    let ht = document.getElementById("cuboidHeight");
    let wth = document.getElementById("cuboidWidth");
    let ans = document.getElementById("cuboidAns");

    if(len.value == "" || wth.value == "" || ht.value == ""){
        alert("Inputs cannot be Empty !");
    }
    else if(len.value <= 0 || wth.value <= 0 || ht.value <= 0){
        alert("Positive Inputs Only !")
        len.focus();
    }
    else{
        let area = 2 * (parseFloat(len.value) * parseFloat(wth.value) +
                  parseFloat(len.value) * parseFloat(ht.value) +
                  parseFloat(wth.value) * parseFloat(ht.value));
        ans.innerHTML = "Area of cuboid = " + area.toFixed(2) + " sq. units.";
    }
}
function cube(){
	event.preventDefault();
    let len = document.getElementById("cubeLength");
    let ans = document.getElementById("cubeAns");

    if(len.value == ""){
        alert("Inputs cannot be Empty !");
    }
    else if(len.value <= 0){
        alert("Positive Inputs Only !")
        len.focus();
    }
    else{
        let area = 6 * parseFloat(len.value) ** 2;
        ans.innerHTML = "Area of cube = " + area.toFixed(2) + " sq. units.";
    }
}
function sphere(){
	event.preventDefault();
    let radius = document.getElementById("sphereRadius");
    const PI = 22/7;
    let ans = document.getElementById("sphereAns");

    if(radius.value == ""){
        alert("Inputs cannot be Empty !");
    }
    else if(radius.value <= 0){
        alert("Positive Inputs Only !")
        radius.focus();
    }
    else{
        let area = 4 * PI * parseFloat(radius.value) ** 2;
        ans.innerHTML = "Area of sphere = " + area.toFixed(2) + " sq. units.";
    }   
}