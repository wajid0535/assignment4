// display all the country flags in console.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function() {
    var result = JSON.parse(this.responseText);
    console.log(result);
for (var i=0; i<result.length;i++) {
    console.log(result[i].flags);
}
}