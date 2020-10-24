import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model"

// React.FC is a shortform form React.FunctionComponent
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter((todo: Todo) => todo.id !== todoId)
    })
  }

  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text}])
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default App;
