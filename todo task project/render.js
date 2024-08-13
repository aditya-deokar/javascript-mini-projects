import store from  "./store.js";


function render(){
    var container=document.querySelector(".container");
   
  


    var newStore=store.todos.map(todo=>`<div class="element" data-id="${todo.id}">
                <h4 class="title ${todo.complete? "complete":""}">${todo.title}</h4>
                <div class="checkcontainer">
                    <input type="checkbox" name="completed" id="" ${todo.complete?"checked":""}>
                    <span class="clear">clear</span>
                </div>
               
            </div>`).join("");

    // console.log(newStore);        
    container.innerHTML=newStore;
}

export default render;