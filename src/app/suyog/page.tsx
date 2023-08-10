"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Suyog() {
  const [record, setRecord] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setRecord(data.products));
  }, []);
  return (
    <div>
      <ul>
        <h3>All Products :=</h3>
        {record.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/suyog/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
