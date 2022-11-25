import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import "./write.css";

export default function Write() {
  const [writes, setWrites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getWrites = async () => {
      setLoading(true);
      try {
        const res = await axios.get(process.env.REACT_APP_BASE_URL_WRITES);
        setWrites(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getWrites();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="write">
      <div className="write-container">
        <h2 className="write-headingTitle">Baca tulisan terbaru</h2>
        {writes.map((write) => (
          <div className="write-item" key={write._id}>
            <h3 className="write-subheadingTitle">{write.title}</h3>
            <p className="write-article">{write.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
