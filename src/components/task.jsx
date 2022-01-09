import react from 'react';
import { useState } from 'react';
import axios from 'axios';
import  './task.css'
function Task(){
const[data, setData] = useState("")
const [count, setCount] = useState(0)
const [task, setTask] = useState("")
const [value, setValue] = useState(false)

const handle=()=>{
    setCount(count+1)
  
    axios.post('http://localhost:9900/add',{
        task: data
    }).then((res)=>{
        window.alert("added")
         
        setTask(data)
     
       
    }).catch((err)=>{
        console.log(err);
    })
}

const update=() => {
    setValue(true)
    
}

const updateReturn=() => {
    setValue(false)
    setCount(count+1)
    axios.post('http://localhost:9900/update',{
        task: data
    }).then((res)=>{
        window.alert("added")
        setData("")
        setTask(data)
    }).catch((err)=>{
        console.log(err);
    })
    
}
    return (
        <>
        <div className="parent">
        <h1>Task</h1>
        <br />
        {task}
        <br />
        <input type="text" placeholder="enter task" value={data} onChange={(e)=>setData(e.target.value)} className="box_inp"/> 
        <br />
        <button onClick={handle} className="btn_add">Add</button>
        {value? <button onClick={updateReturn} className="btn_edit">Update</button>:<button onClick={update} className="btn_edit">Edit</button>}

    <br />
        <h5>Api called:{count}</h5>
        <br />
        
      
        </div>
        </>
    )
}

export default Task;