import React, { useState, useEffect } from "react";
import "./styles.css";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import "./App.css";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="container">
      <h1 className="text-primary">My Blog</h1>
      <Posts />
      <Pagination />
    </div>
  );
}
