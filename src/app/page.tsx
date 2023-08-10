"use client";
import Link from "next/link";
import { useEffect } from "react";

// Define an interface for the User data type
interface User {
  name: string;
}

export default function Page() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) =>
        localStorage.setItem("records", JSON.stringify(data))
      );
  }, []);

  return (
    <nav style={{ display: "flex", justifyContent: "space-around" }}>
      <button>
        <Link href="/dashboard">Dashboard</Link>
      </button>
      <button>
        <Link href="/studentList">StudentList</Link>
      </button>
      <button>
        <Link href="/suyog">Suyog</Link>
      </button>
    </nav>
  );
}
