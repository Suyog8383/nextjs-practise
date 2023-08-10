"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define an interface for the User data type
interface User {
  name: string;
}

export default function Page() {
  const [record, setRecord] = useState<User[]>([]);
  useEffect(() => {
    let data = localStorage.getItem("records");
    if (data) {
      setRecord(JSON.parse(data) as User[]);
    }
  }, []);
  return (
    <>
      <h2>Student List</h2>
      <ul>
        {record.map((item: User) => {
          return (
            <li>
              <Link href={`/studentList/${item.name.split(" ")}`}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
