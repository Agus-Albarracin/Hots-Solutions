
const comments = []
    const input = document.getElementById('idTextarea'); 
    const placeHolder = input.placeholder = "  Nuevo mensaje..." ;
    

    const inputContainer = document.getElementById('inputContainer')
    const commentContainer = document.querySelector('#comments-container')

  
   input.addEventListener('keydown', e =>{
       teclaEnter(e, null);
   })


// commentContainer = commentContainer.innerHTML;
// inputContainer = inputContainer.innerHTML;
// input = input.innerHTML;


   commentContainer.appendChild(inputContainer);
   inputContainer.appendChild(input);
   
   

   function teclaEnter (e, current){

    
              
       
  
       if ( e.key === 'Enter' && e.target.value !== ''){

        var valorIngresado = e.target.value;
           
               valorIngresado = valorIngresado.replace(/\n|\r/g, "<br>");
               e.target.value.innerHTML = valorIngresado;

               
           const newComment = {
               text: e.target.value,
               likes: 0,
               responses: []
           }
           
           if (current === null){
           comments.unshift(newComment);
           }else{
               current.responses.unshift(newComment);
           }
         
           e.target.value = '';
           commentContainer.innerHTML = '';
           commentContainer.appendChild(inputContainer);         
       
console.log(comments);
  renderComments(comments, commentContainer)
       }

   }

function renderComments (arr, parent){
   arr.forEach(element=> {
       const commentContainer = document.createElement('div')
       commentContainer.classList.add('comment-container');

       const responsesContainer = document.createElement('div')
       responsesContainer.classList.add('responses-container')
   
       const replyButton = document.createElement ('button');
       replyButton.id = 'replyButton';


       const likeButton = document.createElement('button');
       likeButton.id = 'likeButton';
     

       const textContainer = document.createElement('div');
       textContainer.textContent = element.text;

       const actionContainer = document.createElement ('div');

       replyButton.textContent = 'Reply'
       likeButton.textContent = `${
           element.likes > 0 ? `${element.likes} likes`:  'like'
   }`;

       replyButton.addEventListener('click', (e) => {
        const newInput = inputContainer.cloneNode(true);
        newInput.value = '';
        newInput.focus();
        newInput.addEventListener('keydown', e => {
           teclaEnter (e, element);
        })
        commentContainer.insertBefore(newInput, responsesContainer)
       })

       likeButton.addEventListener('click', (e) => {
           element.likes++;
           likeButton.textContent = `${
               element.likes > 0 ? `${element.likes} likes`:  'like'
       }`;
           
       })
//append
commentContainer.appendChild(textContainer);
commentContainer.appendChild(actionContainer)
actionContainer.appendChild(likeButton)
actionContainer.appendChild(replyButton)

commentContainer.appendChild(responsesContainer);

if (element.responses.length > 0){
renderComments(element.responses, responsesContainer);
}

parent.appendChild(commentContainer);
      
   });

}


// let borrar = document.createElement("p");
// borrar.innerHTML = ("Borrar");
// borrar.className = "close";
// li.appendChild(borrar);

// let close = document.getElementsByClassName("close");
// for (let i = 0; i < close.length; i++){
//     close[i].onclick = function (){
//         let div = this.parentElement;
//         div.style.display = "none";
//     }
// }


