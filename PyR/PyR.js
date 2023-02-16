function nComentario(){
    let li = document.createElement("li");

    

     var valorIngresado = document.getElementById("nuevoComentario").value; 
     valorIngresado = valorIngresado.replace(/\n|\r/g, "<br>");
     li.innerHTML= valorIngresado;


     if (valorIngresado === ''){

        alert("Ingrese un comentario!")

    }else{
        document.getElementById("comentarios").appendChild(li)
        
    }

    document.getElementById("nuevoComentario").value = "";



    li.className = "comentario";

    let borrar = document.createElement("p");
    borrar.innerHTML = ("Borrar");
    borrar.className = "close";
    li.appendChild(borrar);

    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++){
        close[i].onclick = function (){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
