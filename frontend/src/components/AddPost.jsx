import axios from "axios";
import { useState } from "react";

const AddPost = () => {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://43.204.149.250:5000/api/posts", form);
      alert("Post added!");
      setForm({ title: "", content: "" });
    } catch (err) {
      alert("Error adding post");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "30px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ marginBottom: "15px", color: "#555" }}>Add Post</h3>

      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      <textarea
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        required
        rows={5}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px",
          resize: "vertical",
          marginBottom: "10px",
        }}
      />

      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
