// const item = document.getElementById("item");
// const todo = document.getElementById("to-do-box");

// item.addEventListener("keyup", function(event){
//     if(event.key == "Enter"){
//         addToDo(this.value);
//         this.value= "" ;
//     } 

// });

// const addToDo = (item) =>{
//     const listItem = document.createElement("li");
//     listItem.innerHTML  = `
//        ${item}
//     <i class="fas fa-times"></i> `;

//     listItem.addEventListener("click",function(){
//         this.classList.toggle("done");
//     });

//     listItem.querySelector("i").addEventListener("click",function(){
//         listItem.remove();
//     })
//     todo.appendChild(listItem);
// }


const item =  document.getElementById("item")
const todo = document.getElementById("to-do-box")

item.addEventListener("keyup",function(e){
    if(e.key == "Enter"){
        addToDo(this.value)
        this.value = ""
    }
})

const addToDo = (item) => {
    const listItem = document.createElement("li")
    listItem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i> `
    
    
    todo.appendChild(listItem)

    listItem.addEventListener("click", function(){
        this.classList.toggle("done")
    })

    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove()
    })  

}