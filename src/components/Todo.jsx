import React, { useEffect, useState } from "react";
import TodoInput from "../shared/ui/TodoInput";
import TodoButton from "../shared/ui/TodoButton";
import Swap from "../shared/ui/Swap";
import Aos from "aos";
import TodoList from "./TodoList";

function Todo() {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "light");
  const [todoData, setTodoData] = useState(() => {
    const savedTodoData = localStorage.getItem("todo");
    return savedTodoData ? JSON.parse(savedTodoData) : [];
  });
  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoData));
  }, [todoData]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleAddTodo = () => {
    try {
      if (todo.trim()) {
        setTodoData((prevTodoData) => [
          ...prevTodoData,
          { id: Date.now(), data: todo.trim() },
        ]);
        setTodo("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTodo();
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-3 font-Montserrat"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <Swap handleToggle={handleToggle} />
      <div className="flex justify-center items-center flex-col mt-[150px]">
        <h2 className="text-[30px]">Todo</h2>
        <div className="flex items-center gap-2">
          <TodoInput
            handleChange={handleChange}
            handleKeyPress={handleKeyPress}
            value={todo}
          />
          <TodoButton handleAddTodo={handleAddTodo} />
        </div>
      </div>
      <ul className="flex justify-center items-center flex-col gap-2">
        <TodoList todoData={todoData} theme={theme} />
      </ul>
    </div>
  );
}

export default Todo;
