// this is for scrolling text
let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');

window.onscroll = () =>{
    let pos = window.scrollY -1000;
    line1.style.left = `${pos *1.25}px`
    line2.style.right = `${pos}px` 
}
// scrolling text end
// cursor effects
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left:"+ e.clientX+ "px; top: " + e.clientY + "px;"; });
// cursor effects ends