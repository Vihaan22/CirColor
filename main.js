var canvas=document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")
var color=document.getElementById("coin").value
ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=3
ctx.arc(100,100,50,0,2*Math.PI)
ctx.stroke()


canvas.addEventListener("mousedown",md)
function md(e){
    color=document.getElementById("coin").value
    mouseX=e.clientX-canvas.offsetLeft
    mouseY=e.clientY-canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=3
    ctx.arc(mouseX,mouseY,50,0,2*Math.PI)
    ctx.stroke()
}
