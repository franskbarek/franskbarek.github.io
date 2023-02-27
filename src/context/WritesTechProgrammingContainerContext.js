import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const WritesTechProgrammingContainerContext = createContext();

export const WritesTechProgrammingContainerProvider = ({ children }) => {
  const [writes, setWrites] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchWrites = async () => {
      try {
        setLoading(true);
        const res = await axios.get(process.env.REACT_APP_BASE_URL_WRITES_TECH_PROGRAMMING + `?page=${page}&limit=6`);
        // ?limit=6&skip=${page === 1 ? 0 : page * 6 - 6}
        setWrites(res.data.posts);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchWrites();
  }, [page]);

  return <WritesTechProgrammingContainerContext.Provider value={{ writes, page, loading, handleChange }}>{children}</WritesTechProgrammingContainerContext.Provider>;
};
