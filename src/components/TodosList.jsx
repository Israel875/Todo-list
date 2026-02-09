import { useContext } from "react";
import { useTodos } from "../hooks/useTodos";

function TodoList() {
  const { tarefasFiltradas, concluirTarefa, removerTarefa } =
    useTodos();

  return (
    <ul className="todo-list">
      {tarefasFiltradas.map((item, index) => (
        <li className={`todo-item ${item.concluida ? "concluida" : ""}`}>
  <span>{item.texto}</span>

  <div className="actions">
    <button onClick={() => concluirTarefa(index)}>✓</button>
    <button onClick={() => removerTarefa(index)}>✕</button>
  </div>
</li>

      ))}
    </ul>
  );
}

export default TodoList;

