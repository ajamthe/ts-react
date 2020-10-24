import React, { useRef } from 'react';

interface INewTodoProps {
}

const NewTodo: React.FC<INewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const externedText = textInputRef.current!.value;
        console.log(externedText);
    }
  return (<form onSubmit={todoSubmitHandler}>
      <div>
          <label htmlFor="todo-text"></label>
          <input type="text" id="todo-text" ref={textInputRef}></input>
      </div>
      <button type="submit">ADD TODO</button>
  </form>);
};

export default NewTodo;
