"use client";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import { NewTodo } from "@/lib/drizzle";

function AddTodo() {
  const [val, setVal] = useState<NewTodo>({
    task: "",
  });

  const handleSubmit = async () => {
    try {
      if (val) {
        const res = await fetch("http://localhost:3000/api/todo", {
          method: "POST",
          body: JSON.stringify({
            task: val.task,
          }),
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
          className="rounded-full w-full py-2 px-4 border focus:outline-primary"
          onChange={(e) => setVal({ task: e.target.value })}
        />
        <button type="button" onClick={handleSubmit} className="text-4xl ">
          <FaArrowAltCircleRight />
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
