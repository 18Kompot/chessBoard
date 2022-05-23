let elem = document.getElementById("root");

debugger;
function board(){
for(let x=0; x<8; x++){
    elem.innerHTML+=`
    <div class="inner-div"></div>`;

    let elems = document.querySelectorAll(".inner-div");
    for(let i = 0; i<8; i++){ 
        if((i+x)%2===0){
         elems[x].innerHTML += `<div class="white"></div>`;   
        }else{
            elems[x].innerHTML += `<div class="black"></div>`;
        }
        
       }
}
}
board();