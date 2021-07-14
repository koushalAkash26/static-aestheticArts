let box =document.querySelectorAll(".block");
let secondBox=document.getElementsByClassName("box2")[0]
var close = document.getElementsByClassName('close')[0]
var head = document.getElementsByClassName('title')[0]
var bigBox = document.getElementsByClassName('container')[0]
function display(seq){
    bigBox.style.display="none"
    head.style.display="block"
    secondBox.style.display="block"
    try{
        document.getElementById("image").setAttribute("src",`ae-images/${seq}.jpeg`)
      }catch{
        document.getElementById("image").setAttribute("src","")
      }
}
box.forEach((ele) => {
    ele.addEventListener('click', (e) => {
      let seq=e.target.id;
      console.log(seq)
      display(seq)
     
    })
});
close.addEventListener('click',()=>{
    bigBox.style.display="block"
    head.style.display="block"
    secondBox.style.display="none"


})