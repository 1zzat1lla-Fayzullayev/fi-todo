import React from "react";

function TodoInput({ handleChange, handleKeyPress, value }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        value={value}
      />
    </div>
  );
}

export default TodoInput;
