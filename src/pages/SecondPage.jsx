import React from "react";
import { Link } from "react-router-dom";

export const SecondPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Вторая страница</p>
        <Link style={{ color: "white" }} to="/">
          Перейти на первую
        </Link>
      </header>
    </div>
  );
};
