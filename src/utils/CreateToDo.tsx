import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
//import todoItems from "./todos.json";
import { todosInterface } from "./todosInterface";
import { dateFormatter } from "./dateFormatter";
import axios from "axios";

interface CreateToDoInterface {
  setData: (arg: todosInterface[]) => void;
}

function CreateToDo(props: CreateToDoInterface): JSX.Element {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  let idCount = 0;

  const handleSubmit = () => {
    const dateToday = dateFormatter(new Date());
    const dateEnd = dateFormatter(dueDate);
    idCount++;
    const toDoItem = {
      id: idCount,
      title: title,
      details: details,
      createdDate: dateToday,
      dueDate: dateEnd,
      completed: false,
    };
    axios.post("https://todolistowen.herokuapp.com/items", toDoItem);
    clearInputs();
  };

  function clearInputs() {
    setTitle("");
    setDetails("");
    setDueDate(new Date());
  }

  return (
    <div>
      <h4>Title</h4>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h4>Details</h4>
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      ></textarea>
      <h4>Due Date</h4>
      <DatePicker
        selected={dueDate}
        onChange={(date: Date) => setDueDate(date)}
      />
      <button onClick={() => handleSubmit()}>Submit Item</button>
    </div>
  );
}

export default CreateToDo;
