import React, { useRef } from 'react';
import "./NewTodo.css"

interface INewTodoProps {
    onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<INewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const externedText = textInputRef.current!.value;
        props.onAddTodo(externedText);
    }
  return (<form className="form-control" onSubmit={todoSubmitHandler}>
      <div>
          <label htmlFor="todo-text"></label>
          <input type="text" id="todo-text" ref={textInputRef}></input>
      </div>
      <button type="submit">ADD TODO</button>
  </form>);
};

export default NewTodo;
