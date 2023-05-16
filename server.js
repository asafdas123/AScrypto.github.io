var btc1 = document.getElementById("btc1");
var eth = document.getElementById("btc2");
var doge = document.getElementById("btc3");


var settings ={
    "async" : true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}

$.ajax(settings).done(function(response){
    btc1.innerHTML = response.bitcoin.usd;
    btc2.innerHTML = response.ethereum.usd;
    btc3.innerHTML = response.dogecoin.usd;
})

var more = document.getElementById("btn");
more.addEventListener("click", myFunction);
function myFunction(){
    alert("No News Available Currently!")
}