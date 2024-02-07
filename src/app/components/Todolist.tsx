"use client";
import { Todo } from "@/lib/drizzle";
import { MdDelete } from "react-icons/md";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/todo", {
    cache: "no-store",
  });
  try {
    if (!res.ok) {
      throw new Error("Failed to fetched");
    } else {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export async function deleteTodo(id: number) {
  const res = await fetch("http://localhost:3000/api/todo", {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
  });
  try {
    if (!res.ok) {
      throw new Error("Failed to fetched");
    } else {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
}

async function Todolist() {
  const data: { data: Todo[] } = await getData();
  return (
    <>
      {data.data.map((elem) => (
        <div
          className="bg-gray-100 py-4 px-4 flex shadow rounded-lg items-center gap-x-3 my-3"
          key={elem.id}
        >
          {/* Task title */}
          <p className="text-lg font-medium">{elem.task}</p>
          <button
            className="text-2xl text-red-500 ml-72"
            onClick={() => deleteTodo(elem.id)}
          >
            <MdDelete />
          </button>
        </div>
      ))}
    </>
  );
}

export default Todolist;
