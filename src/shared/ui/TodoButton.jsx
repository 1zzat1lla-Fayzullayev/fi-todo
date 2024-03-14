import React from "react";

function TodoButton({ handleAddTodo, handleKeyPress }) {
  return (
    <div>
      <button
        className="btn text-[20px]"
        onClick={handleAddTodo}

      >
        +
      </button>
    </div>
  );
}

export default TodoButton;
