import react from "react";
import { useState } from "react";
import axios from "axios";
import "./task.css";
function Task() {
    //Managing the all states from here
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");
  const [value, setValue] = useState(false);
    //It will run whenever Add button will click
  const handle = () => {
      // API counting
    setCount(count + 1);
    //Posting the data 
    axios
      .post("https://task-rht.herokuapp.com/add", {
        task: data,
      })
      .then((res) => {
        window.alert("Added");

        setTask(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // It will invoke whenever Edit button click
  const update = () => {
    setValue(true);
  };
  // It will invoke whenever Update button click
  const updateReturn = () => {
    setValue(false);
    //API call counting
    setCount(count + 1);
    //Updating the data
    axios
      .post("https://task-rht.herokuapp.com/update", {
        task: data,
      })
      .then((res) => {
        window.alert("Updated");
        setData("");
        setTask(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="parent">
        <h1>Task</h1>
        <br />
        {task}
        <br />
        <input
          type="text"
          placeholder="enter task"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="box_inp"
        />
        <br />
        <button onClick={handle} className="btn_add">
          Add
        </button>
        {value ? (
          <button onClick={updateReturn} className="btn_edit">
            Update
          </button>
        ) : (
          <button onClick={update} className="btn_edit">
            Edit
          </button>
        )}

        <br />
        <h5>Api called:{count}</h5>
        <br />
      </div>
    </>
  );
}

export default Task;
