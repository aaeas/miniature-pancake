console.log("In Highscore JavaScript File");


var storedData = localStorage.getItem("highscore");
console.log(storedData);
console.log(typeof (storedData));

var jsObj = JSON.parse(storedData);
console.log(jsObj);
console.log(typeof (jsObj));