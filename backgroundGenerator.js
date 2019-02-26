var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");


function setGradient(){
	body.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")";
	css.textContent = body.style.background + ";";
}
function randomNumber(min, max){
	return Math.random() * (max - min) + min;
}
function createRandomGradient(){
	r = Math.floor(randomNumber(0, 255));
	g = Math.floor(randomNumber(0, 255));
	b = Math.floor(randomNumber(0, 255));
	a = Math.round(randomNumber(0, 1) *10) / 10;
	return [r, g, b, a] ;
}

function randomGradient(){
	randomColor1 = createRandomGradient();
	randomColor2 = createRandomGradient();
	randomColor1 = "rgb("+randomColor1[0]+", "+randomColor1[1]+", "+randomColor1[2]+", "+randomColor1[3]+")";
	randomColor2 = "rgb("+randomColor2[0]+", "+randomColor2[1]+", "+randomColor2[2]+", "+randomColor2[3]+")";
	body.style.background = "linear-gradient(to right, "+ randomColor1 +", "+ randomColor2 +")";
	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomGradient);