import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { todosInterfaceNoID } from "./todosInterface";
import { dateFormatter } from "./dateFormatter";
import axios from "axios";

// interface CreateToDoInterface {
//   setData: (arg: todosInterface[]) => void;
// }

function CreateToDo(): JSX.Element {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState(new Date());

  const postToApi = async (toDoItem: todosInterfaceNoID) => {
    axios.post("http://localhost:4000/items", toDoItem);
  };

  const handleSubmit = () => {
    const dateToday = dateFormatter(new Date());
    const dateEnd = dateFormatter(dueDate);
    const toDoItem = {
      title: title,
      details: details,
      createdDate: dateToday,
      dueDate: dateEnd,
      completed: false,
    };
    postToApi(toDoItem);
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
