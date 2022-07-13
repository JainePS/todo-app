import { AddTodoComponent} from './components/AddTodoComponent';
import { TodosComponent } from "./components/TodosComponent";
import { useLocalStorage } from './components/hooks/useLocalStorage';

export function App() {
  const [todos, setTodos] = useLocalStorage("todos")

  const addTodos = (title: string) => {
    setTodos({
      todos: [
        { title, completed: false, id: todos.todos.length + 1 },
        ...todos.todos,
      ],
    });
  };

  const deleteTodos = (id: number) => {
    setTodos({
      todos: todos.todos.filter((t: { id: number; }) => t.id !== id),
    });
  };
  const toggleTodos = (id: number) => {
    setTodos({
      todos: todos.todos.map((todo: { id: number; completed: any; }) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  return (
    <div className="deafultStyle App">
      <AddTodoComponent addTodos={addTodos} />
      <hr />
      <TodosComponent
        todos={todos}
        toggleTodos={toggleTodos}
        deleteTodos={deleteTodos}
      />
    </div>
  );
}
