import { Home } from "@mui/icons-material";
import { Avatar, Breadcrumbs, Card, CardActionArea, CardActions, CardContent, CardMedia, Pagination, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
// import { SinglePageComment } from "../../../components/disqus/Disqus";
import "./writesTechProgramming.css";
import photoProfile from "../../../assets/image/photo-profile.jpg";
import SkeletonLoading from "../../../utils/SkeletonLoading";
import { useContext } from "react";
import { WritesTechProgrammingContainerContext } from "../../../context/WritesTechProgrammingContainerContext";

export default function WritesTechProgramming() {
  const { writes, page, loading, handleChange } = useContext(WritesTechProgrammingContainerContext);

  if (loading) {
    return <SkeletonLoading />;
  }

  return (
    <div className="writesTechProgramming-container">
      {/* writes topbar */}
      <div className="writesTechProgramming-topbar">
        <Breadcrumbs className="bread" aria-label="breadcrumb">
          <Link className="linkNew" underline="hover" to="/">
            <Home fontSize="large" />
          </Link>
          <Link className="linkNew" underline="hover" to="/writes-group">
            Kategori teknologi
          </Link>
          <Typography sx={{ fontSize: "20px" }}>Bahasa pemrograman</Typography>
        </Breadcrumbs>
      </div>
      {/* writes pagination */}
      <div className="writesTechProgramming-pagination">
        <Stack spacing={2}>
          <Typography sx={{ textAlign: "center" }}>Page: {page}</Typography>
          <Pagination count={5} page={page} variant="outlined" color="standard" size="large" shape="rounded" onChange={handleChange} />
        </Stack>
      </div>
      {/* writesTechProgramming content */}
      <div className="writesTechProgramming-content">
        <div className="writesTechProgramming-contentContainer">
          {writes.map((write) => (
            <div className="writesTechProgramming-contentItem" key={write._id}>
              <Card sx={{ maxWidth: "1000px" }}>
                <CardActionArea>
                  <Link to={`/writes-group/tech-programming/${write._id}`} className="linkNew">
                    <CardContent>
                      <Typography sx={{ fontWeight: "bold" }} gutterBottom variant="h5" component="div">
                        {write.title}
                      </Typography>
                    </CardContent>
                    <div className="card-image-flow">
                      <CardMedia className="card-image" component="img" height="300" image={write.photo} alt="image" />
                    </div>
                  </Link>
                </CardActionArea>
                <CardActions>
                  <Avatar alt="Frans Kbarek" src={photoProfile} sx={{ width: 40, height: 40, borderTopStyle: "groove", borderLeftStyle: "groove" }} variant="square" />
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
        <div className="writesTechProgramming-pagination">
          <Stack spacing={2}>
            <Typography sx={{ textAlign: "center" }}>Page: {page}</Typography>
            <Pagination count={5} page={page} variant="outlined" color="standard" size="large" shape="rounded" onChange={handleChange} />
          </Stack>
        </div>
      </div>
      {/* comment box component*/}
      {/* <SinglePageComment /> */}
    </div>
  );
}
