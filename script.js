let btn= document.querySelector("button")

btn.addEventListener("click", function(){
   let h1= document.querySelector("h2")
   let div= document.querySelector("div")
   let randomcolor = getrandomcolor();
   h1.innerText= randomcolor;
   div.style.background= randomcolor;
   console.log("color updated")
})

function getrandomcolor(){
  let red= Math.floor(Math.random()*255);
  let green= Math.floor(Math.random()*255);
  let blue= Math.floor(Math.random()*255);

  let color=`rgb(${red}, ${green}, ${blue} )`
  return color;
}

let input = document.querySelector("input");
input.addEventListener("click", function(){

})
let but = document.querySelector("button");
but.addEventListener("click", function(){
    // console.dir(this.innerText)
    but.style.backgroundColor= "Blue" ;
}
)

