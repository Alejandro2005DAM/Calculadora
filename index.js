const pantalla= document.querySelector(".screen");
const botones= document.querySelectorAll(".btn");

botones.forEach(element => {
    element.addEventListener("click", () =>{
        console.log(element.textContent);
        const contenido= element.textContent
        if(element.value==="%"){
            

            porcentaje()
            return
        }
        if(element.id==="igual"){
           operar()
           return
        }
  
        
        if(element.value==="C"){
            borrartodo()
            return
        }   
        if(element.value==="del"){
            borrarnumero()
            return
        }
         if(pantalla.textContent==="0")
        {
            pantalla.textContent=contenido
        }else{
            pantalla.textContent+=contenido
        }
   
    })
});


function porcentaje(){
    pantalla.textContent=eval(pantalla.textContent+"/10")
}


function operar(){
    pantalla.textContent=eval(pantalla.textContent)
    
}

function borrartodo(){
pantalla.textContent="0"

}

function borrarnumero(){
pantalla.textContent=pantalla.textContent.toString().slice(0,-1)
if(pantalla.textContent===""){
    pantalla.textContent="0"
}
}

