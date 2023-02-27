import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const WriteTechProgrammingSinglePageContext = createContext(null);

export const WriteTechProgrammingSinglePageProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [readTime, setReadTime] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/")[3];

  useEffect(() => {
    const fetchSinglePage = async () => {
      try {
        setLoading(true);
        const res = await axios.get(process.env.REACT_APP_BASE_URL_WRITES_TECH_PROGRAMMING + path);
        setTitle(res.data.title);
        setReleaseDate(res.data.releaseDate);
        setReadTime(res.data.readTime);
        setAuthor(res.data.author);
        setDescription(res.data.content);
        setImage(res.data.photo);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchSinglePage();
  }, [path]);

  return <WriteTechProgrammingSinglePageContext.Provider value={{ title, releaseDate, readTime, author, description, image, loading }}>{children}</WriteTechProgrammingSinglePageContext.Provider>;
};
