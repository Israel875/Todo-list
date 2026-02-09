import { useContext, useMemo } from "react";
import { TodoContext } from "../context/TodoContext";

export function useTodos() {
  const {
    tarefa,
    filtro,
    concluirTarefa,
    removerTarefa,
  } = useContext(TodoContext);

  const tarefasFiltradas = useMemo(() => {
    if (filtro === "concluidas") {
      return tarefa.filter(t => t.concluida);
    }

    if (filtro === "pendentes") {
      return tarefa.filter(t => !t.concluida);
    }

    return tarefa;
  }, [tarefa, filtro]);

  return {
    tarefasFiltradas,
    concluirTarefa,
    removerTarefa,
  };
}
