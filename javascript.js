document.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

document.getElementById("msg").innerHTML=
"Message Sent Successfully";

});