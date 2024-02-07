import { NextRequest, NextResponse } from "next/server";
import { NewTodo, Todo, db, todoTable } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";
import { and, eq } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    await sql`CREATE TABLE IF NOT EXISTS Todos (id SERIAL , task VARCHAR(255));`;
    const res = await db.select().from(todoTable);
    return NextResponse.json({ data: res });
  } catch (eror) {
    console.log((eror as { message: string }).message);
    return NextResponse.json({ message: "Something went wrong" });
  }
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  try {
    if (req.task) {
      const res = await db
        .insert(todoTable)
        .values({
          task: req.task,
        })
        .returning();
      console.log(res);

      return NextResponse.json({ message: "task is added", data: res });
    } else {
      throw new Error("task is required");
    }
  } catch (error) {
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}

interface Todo2 {
  id: number;
  // Other properties of your todo item
}

export async function DELETE(request: NextRequest) {
  const req = await request.json();
  try {
    if (req.id) {
      const res = await db
        .delete(todoTable)
        .where(and(eq(todoTable.id, req.id)))
        .returning();
      return NextResponse.json({ message: "task is deleted", data: res });
    } else {
      throw new Error("id is required");
    }
  } catch (error) {
    console.log(error);
  }
}
