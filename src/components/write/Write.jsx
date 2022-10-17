import axios from "axios";
import { useEffect, useState } from "react";
import "./write.css";

export default function Write() {
  const [writes, setWrites] = useState([]);

  useEffect(() => {
    const getWrites = async () => {
      try {
        const res = await axios.get("https://franskbarek-page-api.cyclic.app/backend/writes");
        setWrites(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getWrites();
  }, []);

  return (
    <div className="write">
      <div className="write-container">
        <h2 className="write-headingTitle">Baca tulisan terbaru</h2>
        {writes.map((write) => (
          <div className="write-item">
            <h3 className="write-subheadingTitle" key={write.id}>
              {write.title}
            </h3>
            <p className="write-article">{write.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
