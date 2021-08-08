import React, { useEffect } from "react";

export default function Alert({ message, type, closeAlert }) {
  console.log("I am the alert!!");
  useEffect(() => {
    console.log({ type });
    setTimeout(() => closeAlert(), 3000);
  });
  return <div className={`alert ${type && "green"}`}>{message}</div>;
}
