import AddPost from "./components/AddPost";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Simple Blog</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "12px 16px",
          width: "100%",
          margin: "20px 0",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      <AddPost />
      <PostList search={search} />
    </div>
  );
}

export default App;
