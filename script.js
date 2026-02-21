function completeLesson(){
localStorage.setItem("progress","100");
alert("Lesson Completed");
}

let p=localStorage.getItem("progress");
if(p){
let bar=document.getElementById("bar");
let text=document.getElementById("text");
if(bar&&text){bar.style.width=p+"%";text.innerHTML=p+"% Completed"}
}