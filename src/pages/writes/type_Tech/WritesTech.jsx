import { Avatar, Breadcrumbs, Card, CardActionArea, CardActions, CardContent, CardMedia, Pagination, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Disqus } from "../../../components/disqus/Disqus";
import "./writesTech.css";

export default function WritesTech() {
  const [writes, setWrites] = useState([]);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchWrites = async () => {
      try {
        const res = await axios.get(`https://franskbarek-page-api.cyclic.app/backend/writes?page=${page}&limit=6`);
        // ?limit=6&skip=${page === 1 ? 0 : page * 6 - 6}
        setWrites(res.data.posts);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchWrites();
  }, [page]);

  return (
    <div className="writesTech-container">
      {/* writes topbar */}
      <div className="writesTech-topbar">
        <Breadcrumbs className="bread" aria-label="breadcrumb">
          <Link underline="hover" to="/">
            Halaman utama
          </Link>
          <Link underline="hover" to="/writes-group">
            Kategori tulisan
          </Link>
          <Typography color="text.primary">Teknologi Bahasa pemrograman</Typography>
        </Breadcrumbs>
      </div>
      {/* writes pagination */}
      <div className="writesTech-pagination">
        <Stack spacing={2}>
          <Typography sx={{ textAlign: "center" }}>Page: {page}</Typography>
          <Pagination count={10} page={page} variant="outlined" color="primary" size="small" onChange={handleChange} />
        </Stack>
      </div>
      {/* writesTech content */}
      <div className="writesTech-content">
        <div className="writesTech-contentContainer">
          {writes.map((write) => (
            <div className="writesTech-contentItem" key={write._id}>
              <Card sx={{ maxWidth: 375 }}>
                <CardActionArea>
                  <Link to={`/writes-group/tech/${write._id}`}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {write.title}
                      </Typography>
                    </CardContent>
                    <CardMedia component="img" height="200" image={write.photo} alt="image" />
                  </Link>
                </CardActionArea>
                <CardActions>
                  <Avatar alt="Frans Kbarek" src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} variant="square" />
                  <div className="author">
                    <strong className="link">@franskbarek</strong>
                    <p>Frans Kbarek</p>
                  </div>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
        {/* writes pagination */}
        <div className="writesTech-pagination">
          <Stack spacing={2}>
            <Typography sx={{ textAlign: "center" }}>Page: {page}</Typography>
            <Pagination count={10} page={page} variant="outlined" color="primary" size="small" onChange={handleChange} />
          </Stack>
        </div>
      </div>
      {/* comment component*/}
      {/* <Disqus /> */}
    </div>
  );
}
