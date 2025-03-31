//function aad(){
//  var d=parseInt(document.getElementById("a2").value);
 // var e=parseFloat(document.getElementById("a3").value);
//  var g=parseInt(document.getElementById("data3").value);
 // var sum=c*12*d*e/25;
  //document.getElementById("data3").innerHTML=sum;
  //}
function add(){
  var output=document.getElementById("output")
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
 
  localStorage.setItem("n1",name);
  localStorage.setItem("e1",email);
  
 
  
  output.innerHTML=localStorage.getItem("n1")
  output.innerHTML=localStorage.getItem("e1")

}
function a(){
var wight=parseInt(document.getElementById("output")).value;
var output=parent(document.getElementById("name")).value
var sum=wight+output;
document.getElementById("output").innerHTML=sum;
  
}