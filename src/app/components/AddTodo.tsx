"use client";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import { NewTodo } from "@/lib/drizzle";

function AddTodo() {
  const [task, setTask] = useState("");
  const handleSubmit = async () => {
    try {
      if (task) {
        const res = await fetch("http://localhost:3000/api/todo", {
          method: "POST",
          body: JSON.stringify({ task: task }),
        });
        console.log(res.ok);
      }
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      <form className="w-full flex gap-x-1">
        <input
          type="text"
          value={task}
          placeholder="Add a new task"
          className="rounded-full w-full py-2 px-4 border focus:outline-primary"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="button" onClick={handleSubmit} className="text-4xl ">
          <FaArrowAltCircleRight />
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
