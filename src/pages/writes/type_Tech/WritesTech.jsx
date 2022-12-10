import { Home } from "@mui/icons-material";
import { Avatar, Breadcrumbs, Card, CardActionArea, CardActions, CardContent, CardMedia, Pagination, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link className="linkNew" underline="hover" to="/">
            <Home fontSize="large" />
          </Link>
          <Link className="linkNew" underline="hover" to="/writes-group">
            Kategori tulisan
          </Link>
          <Typography sx={{ fontSize: "20px" }}>Mengenai hal-hal umum dalam keseharian</Typography>
        </Breadcrumbs>
      </div>
      {/* writes pagination */}
      <div className="writesTech-pagination">
        <Stack spacing={2}>
          <Typography sx={{ textAlign: "center" }}>Page: {page}</Typography>
          <Pagination count={5} page={page} variant="outlined" color="standard" size="large" shape="rounded" onChange={handleChange} />
        </Stack>
      </div>
      {/* writesTech content */}
      <div className="writesTech-content">
        <div className="writesTech-contentContainer">
          {writes.map((write) => (
            <div className="writesTech-contentItem" key={write._id}>
              <Card sx={{ maxWidth: "1000px" }}>
                <CardActionArea>
                  <Link to={`/writes-group/tech/${write._id}`} className="linkNew">
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {write.title}
                      </Typography>
                    </CardContent>
                    <CardMedia component="img" height="300" image={write.photo} alt="image" />
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
            <Pagination count={5} page={page} variant="outlined" color="standard" size="large" shape="rounded" onChange={handleChange} />
          </Stack>
        </div>
      </div>
      {/* comment component*/}
      {/* <Disqus /> */}
    </div>
  );
}
