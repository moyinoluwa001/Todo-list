import { useState } from "react";

function todo (){

const [tasks, setTasks] =  useState(["smoke weed","don't belive anyone","belive in your self"]);
const [newtasks, setNewTasks] = useState();

function handleInputChange (event){
     setNewTasks(event.target.value)
}
function addTasks(){
    if(newtasks.trim() !== "")
 {  setTasks(t =>[...t ,newtasks]);
       setNewTasks("");
}
}
function deleteTasks(index){
  const updateTasks = tasks.filter((_,i)=> i !==index);
  setTasks(updateTasks)
}
    
function MoveTasksUp(index){
  
if(index > 0){
const updated = [...tasks];
[updated[index],updated[index - 1]]= 
[updated[index - 1],updated[index]];
setTasks(updated);
}


}
function MoveTasksDown(index){
    if(index < tasks.length -1){
     const updated = [...tasks];
        [updated[index],updated[index + 1]]= 
        [updated[index + 1],updated[index]];
        setTasks(updated);
        }
        
}


return(
    <div className="todo-list">
        <h2>Todo List</h2>
        <input 
        type="text" 
        value={newtasks} 
        placeholder="Enter tasks" 
        onChange={handleInputChange}/>
        <button className="add-button" onClick={addTasks} >Add</button>


        <ol>{tasks.map((tasks,index)=> <li key={index}>
          <span>{tasks}</span> 
          <button className="delete-button" onClick={()=> deleteTasks(index)}>Delete</button>
          <button className="move-button" onClick={()=> MoveTasksUp(index)}>Up</button> 
          <button className="move-button" onClick={()=> MoveTasksDown(index)}>Down</button>
            </li>
            
            )}</ol>
    </div>
)

}




export default todo;