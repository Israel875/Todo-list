import { createContext, useState, useEffect } from "react"; 

export const TodoContext = createContext();

export function TodoProvider({children}) {

     const [tarefa, setTarefa] = useState([]);
    
      const [novaTarefa, setNovaTarefa ] = useState("");

      const [filtro, setFiltro ] = useState("todas")

   useEffect(() => {
  const tarefasSalvas = localStorage.getItem("tarefa");

  if (tarefasSalvas) {
    const tarefasFormatadas = JSON.parse(tarefasSalvas).map(item => ({
      ...item,
      concluida: item.concluida ?? false,
    }));

    setTarefa(tarefasFormatadas);
  }
}, []);

    
      useEffect(() => {
        localStorage.setItem("tarefa", JSON.stringify(tarefa));
      }, [tarefa]);

const adicionarTarefa = () => {
  if (novaTarefa.trim() === "") return;

  setTarefa([
    ...tarefa,
    { texto: novaTarefa, concluida: false }
  ]);

  setNovaTarefa("");
};

   const concluirTarefa = (index) => {
    const novaTarefa = [...tarefa];
    novaTarefa[index].concluida = !novaTarefa[index].concluida;
    setTarefa(novaTarefa);
  };

   const removerTarefa = (index) => {
  const novaTarefa = tarefa.filter((_, i) => i !== index); 
  setTarefa(novaTarefa);
 };

    return (
      <div className="container">

 <TodoContext.Provider
  value={{
    tarefa,
    setTarefa,
    novaTarefa,
    setNovaTarefa,
    adicionarTarefa,
    concluirTarefa,
    removerTarefa,
    filtro,
    setFiltro,
  }}
>
  {children}
</TodoContext.Provider>

        </div>
    );
    
}

