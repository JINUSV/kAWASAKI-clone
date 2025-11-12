function add(){
    document.querySelector('h1').classList.toggle('style');

}
function change(){
    document.getElementById("heading").innerHTML=Date()
}

document.getElementById("btn").onclick= display;
function display(){
    document.getElementById("ti").innerHTML=Date()
}

function uppercase(){
    const a= document.getElementById("name");
    a.value=a.value.toUpperCase();
}

document.getElementById("btn2").addEventListener("click",change2);
document.getElementById("head2").addEventListener("mouseover",changebg);
function change2(){
    document.getElementById("head2").style.color="red";
}
function changebg(){
    document.getElementById("head2").style.backgroundColor="yellow";
}

var a=document.getElementById("hello").onclick= display2;
function display2(){
    document.getElementById("hi").innerHTML="Hello";
    document.getElementById("hi").style.color="blue";
}

