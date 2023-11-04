import { Todo } from "@/lib/drizzle";

const getData = async () => {
    const res = await fetch("http://localhost:3000//api/todo", {
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
}

async function Todolist() {
    const data: { data: Todo[] } = await getData();
    return (
        <>
            {data.data.map((elem) => (
                < div className="bg-gray-100 py-4 px-4 flex shadow rounded-lg items-center gap-x-3 my-3" key={elem.id}>
                    {/* Circle */}
                    <div className="h-2 w-3 bg-primary rounded-full" ></div>
                    {/* Task title */}
                    <p className="text-lg font-medium" >{elem.task}</p>
                </div >
            ))}
        </>
    )
}

export default Todolist;
