import React, { useEffect } from "react";
import { format } from "date-fns";

function TodoList({ todoData, theme }) {
  useEffect(() => {
    localStorage.getItem("todo", JSON.stringify(todoData));
  }, [todoData]);

  const boxShadowStyle =
    theme === "dark"
      ? "5px 5px 12px #333333, -5px -5px 12px rgb(26, 26, 26)"
      : "5px 5px 12px #afafaf, -5px -5px 12px #ffffff";
  const borderStyle = theme === "dark" ? "border-gray-700" : "border-white";

  return (
    <>
      {todoData.map((todoItem, index) => (
        <li key={index}>
          <div
            className="todo__list rounded-[20px] px-[20px] py-[10px] min-w-[280px]"
            style={{ boxShadow: boxShadowStyle, border: borderStyle }}
          >
            <p>{todoItem.data}</p>
            <time>
              {todoItem.data.timestamp &&
                format(new Date(todoItem.data.timestamp), "HH:mm")}
            </time>
          </div>
        </li>
      ))}
    </>
  );
}

export default TodoList;
