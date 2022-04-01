import { useState, useEffect } from "react";
import CreateToDo from "./utils/CreateToDo";
//import todoItems from "./utils/todos.json";
import ToDoList from "./utils/ToDoList";
import { todosInterface } from "./utils/todosInterface";

function ToDoCompoment(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
  const [data, setData] = useState<todosInterface[]>([]);

  useEffect(() => {
    const url = "http://localhost:4000/items";
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonBody: todosInterface[] = await response.json();
      setData(jsonBody);
    };
    fetchData();
  }, [data]);

  return (
    <div>
      <h1>To-Do List</h1>
      <h3>Create, complete and delete items from your to-do list!</h3>
      <h2>Create a To-Do Item!</h2>
      <CreateToDo />
      <h2>To-Do!</h2>
      <input
        placeholder="Search Items"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          console.log(`input value: ${e.target.value}`);
        }}
      />
      <ToDoList data={data} />
      <h3>
        These items are modified in conjunction with rest API toDo-backend.git
      </h3>
    </div>
  );
}

export default ToDoCompoment;
