import React from 'react';
import TodoList from "./components/TodoList";

// React.FC is a shortform form React.FunctionComponent
const App: React.FC = () => {
  const todos = [{id: 't1', text: 'Finish the course'}];

  return (
    <div className="App">
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
