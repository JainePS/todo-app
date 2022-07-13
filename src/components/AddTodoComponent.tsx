import { useState } from "react";

export type ITodo = {
  // Our todo should have the title and completed fields and the id field to
  id: number;
  title: string;
  completed: boolean;
};

export type ITodos = {
  todos: ITodo[]; // Our Todos is an array of Todo
};

export const AddTodoComponent = ({
  addTodos,
}: {
  addTodos: (text: string) => void;
}) => {
  const [todo, setTodo] = useState<string>("");
  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!todo) {
      alert("Please enter a todo");
    } else {
      addTodos(todo);
      setTodo("");
    
    }
  };
  
  return (
    <div className="AddTodo">
      <form>
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
};
