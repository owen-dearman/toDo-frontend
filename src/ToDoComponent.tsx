import { useState } from "react";
import CreateToDo from "./utils/CreateToDo";
import todoItems from "./utils/todos.json";
import ToDoList from "./utils/ToDoList";
import { todosInterface } from "./utils/todosInterface";

function ToDoCompoment(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
  const [data, setData] = useState<todosInterface[]>(todoItems);

  return (
    <div>
      <h1>To-Do List</h1>
      <h3>Create, complete and delete items from your to-do list!</h3>
      <h2>Create a To-Do Item!</h2>
      <CreateToDo setData={setData} />
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
