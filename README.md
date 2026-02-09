# Todo React Avançado

Aplicação de **Todo List** desenvolvida com React, focada em boas práticas de arquitetura, uso de Context API, hooks customizados e otimização de performance.

## ✨ Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Remover tarefas
- Filtrar tarefas:
  - Todas
  - Pendentes
  - Concluídas
- Persistência das tarefas no **localStorage**

## 🛠️ Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- Context API
- Hooks do React:
  - `useState`
  - `useEffect`
  - `useContext`
  - `useMemo`
- Hook customizado (`useTodos`)
- CSS puro (Mobile First)
- Vite

## 🧠 Conceitos Aplicados

- Gerenciamento de estado global com **Context API**
- Encapsulamento de lógica reutilizável com **hooks customizados**
- Otimização de renderizações com **useMemo**
- Organização do projeto por componentes
- Persistência de dados no navegador

## 📁 Estrutura de Pastas
src/
├── components/
│ ├── TodosForm.jsx
│ ├── TodosList.jsx
│ ├── TodosFilters.jsx
│ └── TodosItem.jsx
├── context/
│ └── TodoContext.jsx
├── hooks/
│ └── useTodos.js
├── App.jsx
├── App.css
└── main.jsx

## ▶️ Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado

### Passos

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/todo-react-avancado.git

# Entrar no projeto
cd todo-react-avancado

# Instalar dependências
npm install

# Rodar o projeto
npm run dev

