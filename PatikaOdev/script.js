setInterval(saatUygulamasi,1000);

var name = prompt("Adınızı Giriniz: ");
document.getElementById("myName").innerHTML=name;

function saatUygulamasi(){
var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var gunler= ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
var day = now.getDay();

hour = (hour<10)? "0"+hour:hour;
minute = (minute<10)? "0"+minute:minute;
second =(second<10)? "0"+second:second;

var turkishDay = gunler[now.getDay()-1];

var time = hour+":"+minute+":"+second;

var zaman = document.getElementById("myClock").innerHTML= turkishDay + " " + time;
}

