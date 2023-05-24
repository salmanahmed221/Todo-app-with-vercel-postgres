import AddTodo from "./components/AddTodo";
import Todolist from "./components/Todolist";

function Home() {
  return <div className="h-screen w-screen bg-gradient-to-tr from-secondary to-primary flex justify-center items-center">
    <div className="px-3 py-4 rounded-xl bg-white w-full max-w-md">
      {/* Todo list */}
      {/* @ts-ignore */}
      <Todolist />
      {/* Add todo Input field */}
      <AddTodo />
      {/* Bar */}
      <div className="w-1/2 h-1.5 bg-black/80 rounded mx-auto mt-6"></div>
    </div>
  </div>;
}

export default Home;
