import React from "react";
import { Link } from "react-router-dom";

export const FirstPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Приложение на ReactJS</h1>
        <p>Первая страница</p>
        <Link style={{ color: "white" }} to="/second">
          Перейти на вторую
        </Link>
      </header>
    </div>
  );
};
