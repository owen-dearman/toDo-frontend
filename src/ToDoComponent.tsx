import { useState } from "react";
import CreateToDo from "./utils/CreateToDo";

function ToDoCompoment(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
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
      {/* To-Do List items */}
      <h3>
        These items are modified in conjunction with rest API toDo-backend.git
      </h3>
    </div>
  );
}

export default ToDoCompoment;
