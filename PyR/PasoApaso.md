1- agregar variable o funcion que me retorne el texto en un documento innerHTML
2- agregar un boton de comentar / crear una function con el shift y Enter
2-b podria agregar un else con una condicion donde se aplique el shift
3- el almacen del comentario devolverlo con un innerHTML



funcion para cambiar /n por <br>
 var valorIngresado = e.target.value
        valorIngresado = valorIngresado.replace(/\n|\r/g, "<br>");
        e.target.value.innerHTML = valorIngresado;