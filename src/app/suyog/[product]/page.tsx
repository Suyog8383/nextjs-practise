"use client";

import { useEffect, useState } from "react";

export default function Mypage({ params }) {
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.product}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [params.product]);
  console.log("@SN ", detail);
  return (
    <div>
      <h3>
        Detail About := <h2>{detail.title}</h2>
      </h3>
      <h5>Category = {detail.category}</h5>
      <h5>Brand = {detail.brand}</h5>
      <h5>Description = {detail.description}</h5>
    </div>
  );
}
