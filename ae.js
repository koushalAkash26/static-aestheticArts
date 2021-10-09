let box =document.querySelectorAll(".block");
let secondBox=document.getElementsByClassName("box2")[0]
var close = document.getElementsByClassName('close')[0]
var head = document.getElementsByClassName('title')[0]
var bigBox = document.getElementsByClassName('container')[0]
var profileBox = document.querySelectorAll('box3')
let abt=document.getElementById('abt')
let mainHome=document.getElementById('abt1')
var header = document.getElementsByClassName('head')[0]
var bodyContainer=document.querySelector('body')
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
    bodyContainer.classList.add("body1")
    header.classList.add("body1")

     
   
    

})
document.getElementById("home").addEventListener('click',()=>{
  document.getElementById("b3").classList.add("box3")
  document.getElementById("b3").classList.remove("box3d")
  bigBox.style.display="block"
    head.style.display="block"
    header.style.display="block"
    bodyContainer.classList.remove("body1")
    header.classList.remove("body1")
    


})
mainHome.addEventListener('click',()=>{
  document.getElementById("b3").classList.add("box3")
  document.getElementById("b3").classList.remove("box3d")
  bigBox.style.display="block"
    head.style.display="block"
    header.style.display="block"
    

})
const targets = document.querySelectorAll('[data-lazy]');
console.log(targets)


const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    
    entries.forEach(entry => {
     

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
        

        img.setAttribute('src', src);
        

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);
window.addEventListener( 'load', () => {
  startQueries()
  })
  
  const startQueries = () => {
    let newQuery = window.matchMedia( ' ( max-width: 767px ) ' )
    const queryListenChanges = query => {
      let a=document.getElementsByClassName("col-md-4")
    if( query.matches ){
      
      console.log("hello");
      for (var i=0;i<a.length;i+=1){
        a[i].setAttribute("data-aos","zoom-in-up");
    }
  }
  else
    {
   console.log("hi")
   for (var i=0;i<a.length;i+=1){
     if(i===0||i===3||i===6){
      a[i].setAttribute("data-aos","zoom-in-right");
     }
    else if(i===1||i===4||i===7){
      a[i].setAttribute("data-aos","zoom-out");

    }
    else if(i===2||i===5||i===8){
      a[i].setAttribute("data-aos","zoom-in-left");

    }
}}}
    newQuery.addListener( queryListenChanges )
    queryListenChanges( newQuery )}
    /*var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
dirData={1:"N",2:"NNE",3:"NE",4:"ENE",5:"E",6:"ESE",7:"SE",8:"SSE",9:"S",10:"SSW",11:"SW",12:"WSW",13:"W",14:"WNW",15:"NW",16:"NNW",17:"N"}


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var sec = data["sys"]["sunset"]
  var degData=data["wind"]["deg"]
  console.log(degData)
  let deg=degData%360
  let compDeg=Math.round(deg/22.5)+1
  console.log(dirData[compDeg])
  console.log(deg)



  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";
  console.log(data)

})

//.catch(err => alert("Wrong city name!"));
})
let maincontainer=document.getElementById("head")
window.addEventListener( 'load', () => {
    startQueries()
    })
    
    const startQueries = () => {
      let newQuery = window.matchMedia( ' ( max-width: 1000px ) ' )
      const queryListenChanges = query => {
        
      if( query.matches ){
          console.log("hellllll")
          maincontainer.classList.add("heading1")
          maincontainer.classList.remove("heading")
        
    
    }
    else
      {
     console.log("dumpppppp")
     maincontainer.classList.add("heading")
     maincontainer.classList.remove("heading1")
  }}
newQuery.addListener( queryListenChanges )
queryListenChanges( newQuery )}*/