var mouseevent="empty";
var lx,ly;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="black";
w=1;
canvas.addEventListener("mousedown",a);
function a(){
    colour=document.getElementById("colour").value;
    w=document.getElementById("linewidth").value;
mouseevent="mouseD"; 
};
canvas.addEventListener("mousemove",b);
function b(e){
cx=e.clientX-canvas.offsetLeft;
cy=e.clientY-canvas.offsetTop;
if(mouseevent=="mouseD"){
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=w;
ctx.moveTo(lx,ly);
ctx.lineTo(cx,cy);
ctx.stroke();
}
lx=cx;
ly=cy; 
};
canvas.addEventListener("mouseup",c);
function c(){
mouseevent="mouseUp"; 
};
canvas.addEventListener("mouseleave",d);
function d(){
mouseevent="mouseLeave"; 
};
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    
    }