import axios from "axios";
import { todosInterface } from "./todosInterface";

interface ToDoList_Interface {
  data: todosInterface[];
}

function IncompleteToDo(props: ToDoList_Interface): JSX.Element {
  async function handleComplete(item: todosInterface) {
    await axios.patch(`http://localhost:4000/items/${item.id}`, {
      completed: true,
    });
  }

  async function handleDelete(item: todosInterface) {
    await axios.delete(`http://localhost:4000/items/${item.id}`);
    console.log("delete request sent");
  }

  const incompleteData = props.data.filter((item) => item.completed === false);
  const mapOfToDoList: JSX.Element[] = incompleteData.map((singleItem) => (
    <div key={singleItem.title + singleItem.createdDate}>
      <h2>Title: {singleItem.title}</h2>
      <p>{singleItem.details}</p>
      <h5>Created: {singleItem.createdDate}</h5>
      <h5>Due: {singleItem.dueDate}</h5>
      <button onClick={() => handleComplete(singleItem)}>Complete</button>
      <button onClick={() => handleDelete(singleItem)}>Delete</button>
    </div>
  ));

  return <div>{mapOfToDoList}</div>;
}

export default IncompleteToDo;
