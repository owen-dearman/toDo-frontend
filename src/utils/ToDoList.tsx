import { todosInterface } from "./todosInterface";

interface ToDoList_Interface {
  data: todosInterface[];
}

function ToDoList(props: ToDoList_Interface): JSX.Element {
  const mapOfToDoList: JSX.Element[] = props.data.map((singleItem) => (
    <div key={singleItem.id.toString()}>
      <h2>{singleItem.title}</h2>
      <p>{singleItem.details}</p>
      <h5>Created: {singleItem.createdDate}</h5>
      <h5>Due: {singleItem.dueDate}</h5>
    </div>
  ));

  return <div>{mapOfToDoList}</div>;
}

export default ToDoList;
