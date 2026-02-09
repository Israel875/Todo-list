import React, { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoForm from "./components/TodosForm"
 import { TodoProvider } from "./context/TodoContext"
import './App.css'
import TodoList from "./components/TodosList";
import TodoFilters from "./components/TodosFilters"



function App() {

  return (
  <div className="container">
  <TodoProvider>
    <h1 className="title">Todo List</h1>
    <TodoForm />
    <TodoFilters />
    <TodoList />
  </TodoProvider>
</div>

)}

export default App;
