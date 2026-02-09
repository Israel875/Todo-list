import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodosFilters() {
  const { filtro, setFiltro } = useContext(TodoContext);

  return (
    <div className="filters">
      <button
        className={filtro === "todas" ? "filter-btn active" : "filter-btn"}
        onClick={() => setFiltro("todas")}
      >
        Todas
      </button>

      <button
        className={filtro === "pendentes" ? "filter-btn active" : "filter-btn"}
        onClick={() => setFiltro("pendentes")}
      >
        Pendentes
      </button>

      <button
        className={filtro === "concluidas" ? "filter-btn active" : "filter-btn"}
        onClick={() => setFiltro("concluidas")}
      >
        Concluídas
      </button>
    </div>
  );
}

