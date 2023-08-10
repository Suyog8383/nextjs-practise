"use client";
import { useEffect, useState } from "react";

// Define the Record type
interface Record {
  id: string;
  name: string;
}

export default function Page() {
  const [record, setRecord] = useState<Record[]>([]);
  useEffect(() => {
    let data = localStorage.getItem("records");
    if (data) {
      setRecord(JSON.parse(data) as Record[]);
    }
  }, []);
  return (
    <>
      <h1>Hello, Welcome Page</h1>
      {record.map((item: Record) => {
        return <p key={item.id}>Name = {item.name}</p>;
      })}
    </>
  );
}
