import { Home } from "@mui/icons-material";
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
          <Link className="linkNew" underline="hover" to="/">
            <Home fontSize="large" />
          </Link>
          <Link className="linkNew" underline="hover" to="/writes-group">
            Kategori tulisan
          </Link>
          <Link className="linkNew" underline="hover" to="/writes-group/tech">
            Mengenai hal-hal umum dalam keseharian
          </Link>
          <Typography sx={{ fontSize: "20px" }}>{title}</Typography>
        </Breadcrumbs>
      </div>
      <div className="singlePage-content-container">
        <Card sx={{ maxWidth: 900 }}>
          <CardActionArea>
            <h1 className="singlePage-title">{title}</h1>
            <div className="singlePage-subtitle">
              <span>Sabtu, 12 Sep 2022 | </span>
              <span>4m Reading | </span>
              <span className="link">Author: @franskbarek</span>
            </div>
            <div className="singlePage-image">
              <CardMedia className="cardImage" component="img" height="600" image={image} alt="image" />
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
