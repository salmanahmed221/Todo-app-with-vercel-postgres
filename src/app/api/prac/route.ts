import { db } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const client = await db.connect();

  try {
    await client.sql`CREATE TABLE IF NOT EXISTS Todos (id SERIAL,task VARCHAR(255));`;
    return NextResponse.json({
      message: 'table is created',
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: 'Something went wrong',
    });
  }
}

export async function POST(request: NextRequest) {
  const client = db.connect();
  const req = await request.json();

  try {
    if (req.task) {
      (await client).sql`INSERT INTO Todos (task) VALUES (${req.task})`;
      return NextResponse.json({
        message: 'Task is added',
      });
    } else {
      throw new Error('task is required');
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
}
