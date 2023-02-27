import { Home } from "@mui/icons-material";
import { Breadcrumbs, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SinglePageComment } from "../../../components/disqus/Disqus";
import { WriteTechProgrammingSinglePageContext } from "../../../context/WriteTechProgrammingSinglePageContext";
import SkeletonLoadingSinglePage from "../../../utils/SkeletonLoadingSinglePage";
import "./singlePage.css";

export default function SinglePageTechProgramming() {
  const { title, releaseDate, readTime, author, description, image, loading } = useContext(WriteTechProgrammingSinglePageContext);

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
            Kategori teknologi
          </Link>
          <Link className="linkNew" underline="hover" to="/writes-group/tech-programming">
            Bahasa pemrograman
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
