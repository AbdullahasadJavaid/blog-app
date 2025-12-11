import { useEffect, useState } from "react";
import axios from "axios";

const PostList = ({ search }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        "http://43.204.149.250:5000/api/posts?search=" + search
      );
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  if (!posts.length)
    return <p style={{ textAlign: "center", color: "#777" }}>No posts found.</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {posts.map((p) => (
        <div
          key={p._id}
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h3 style={{ marginBottom: "10px", color: "#333" }}>{p.title}</h3>
          <p style={{ color: "#555", lineHeight: "1.6" }}>{p.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
