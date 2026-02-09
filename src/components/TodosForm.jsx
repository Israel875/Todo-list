import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import App from "../App";

function TodoForm() {
  const { novaTarefa, setNovaTarefa, adicionarTarefa } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarTarefa();
  };
    return (
       <div>
        <form className="todo-form" onSubmit={handleSubmit}>
  <label className="todo-label">
    
    <input
      className="todo-input"
      type="text"
      value={novaTarefa}
      onChange={(e) => setNovaTarefa(e.target.value)}
      placeholder="Digite uma nova tarefa..."
    />
  </label>

  <button className="btn btn-primary" type="submit">
    Adicionar
  </button>
</form>

</div>
    );
}
export default TodoForm;