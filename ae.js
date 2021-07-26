let box =document.querySelectorAll(".block");
let secondBox=document.getElementsByClassName("box2")[0]
var close = document.getElementsByClassName('close')[0]
var head = document.getElementsByClassName('title')[0]
var bigBox = document.getElementsByClassName('container')[0]
var profileBox = document.querySelectorAll('box3')
let abt=document.getElementById('abt')
let mainHome=document.getElementById('abt1')
var header = document.getElementsByClassName('head')[0]
/*let pb=document.getElementById("b3");*/
console.log(profileBox)
function display(seq){
    bigBox.style.display="none"
    header.style.display="none"
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
    header.style.display="block"
    secondBox.style.display="none"


})
abt.addEventListener('click',()=>{
  bigBox.style.display="none"
    head.style.display="none"
    secondBox.style.display="none"
    document.getElementById("b3").classList.remove("box3")
    document.getElementById("b3").classList.add("box3d")
    header.style.display="none"
     
   
    

})
document.getElementById("home").addEventListener('click',()=>{
  document.getElementById("b3").classList.add("box3")
  document.getElementById("b3").classList.remove("box3d")
  bigBox.style.display="block"
    head.style.display="block"
    header.style.display="block"

})
mainHome.addEventListener('click',()=>{
  document.getElementById("b3").classList.add("box3")
  document.getElementById("b3").classList.remove("box3d")
  bigBox.style.display="block"
    head.style.display="block"
    header.style.display="block"

})
const targets = document.querySelectorAll('[data-lazy]');


const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    
    entries.forEach(entry => {
     

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
        console.log(src)

        img.setAttribute('src', src);
        

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);