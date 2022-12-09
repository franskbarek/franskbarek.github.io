import { Breadcrumbs, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SinglePageComment } from "../../../components/disqus/Disqus";
import "./singlePage.css";

export default function SinglePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/")[3];

  useEffect(() => {
    const fetchSinglePage = async () => {
      try {
        const res = await axios.get("https://franskbarek-page-api.cyclic.app/backend/writes/" + path);
        setTitle(res.data.title);
        setDescription(res.data.content);
        setImage(res.data.photo);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchSinglePage();
  }, [path]);

  return (
    <div className="singlePage-container">
      {/* writes topbar */}
      <div className="singlePage-topbar">
        <Breadcrumbs className="bread" aria-label="breadcrumb">
          <Link underline="hover" to="/">
            Halaman utama
          </Link>
          <Link underline="hover" to="/writes-group">
            Kategori tulisan
          </Link>
          <Link underline="hover" to="/writes-group/tech">
            Teknologi Bahasa pemrograman
          </Link>
          <Typography color="text.primary">{title}</Typography>
        </Breadcrumbs>
      </div>
      <div className="singlePage-content-container">
        <Card sx={{ maxWidth: 900 }}>
          <CardActionArea>
            <h1 className="singlePage-title">{title}</h1>
            <div className="singlePage-subtitle">
              {/* <span>Date | </span> */}
              {/* <span>4m | </span> */}
              <span className="link">Author: @franskbarek</span>
            </div>
            <div className="singlePage-image">
              <CardMedia component="img" height="600" image={image} alt="image" />
            </div>
          </CardActionArea>
          <CardContent>
            <p className="singlePage-content">{description}</p>
          </CardContent>
        </Card>
      </div>
      <div className="disqus-container"></div>
      <SinglePageComment />
    </div>
  );
}
