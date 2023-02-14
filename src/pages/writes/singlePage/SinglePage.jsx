import { Home } from "@mui/icons-material";
import { Breadcrumbs, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SinglePageComment } from "../../../components/disqus/Disqus";
import SkeletonLoadingSinglePage from "../../../utils/SkeletonLoadingSinglePage";
import "./singlePage.css";

export default function SinglePage() {
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
        const res = await axios.get(process.env.REACT_APP_BASE_URL_WRITES + path);
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

  if (loading) return <SkeletonLoadingSinglePage />;

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
          <Link className="linkNew" underline="hover" to="/writes-group/general">
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
              <span>{releaseDate}</span>
              <span> | {readTime} | </span>
              <span className="link">Author: @{author}</span>
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
