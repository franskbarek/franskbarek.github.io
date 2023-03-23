import { Home } from "@mui/icons-material";
import { Avatar, Breadcrumbs, Card, CardActionArea, CardActions, CardContent, CardMedia, Pagination, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
// import { SinglePageComment } from "../../../components/disqus/Disqus";
import "./writesTechGeneral.css";
import photoProfile from "../../../assets/image/photo-profile.jpg";
import SkeletonLoading from "../../../utils/SkeletonLoading";
import { useContext } from "react";
import { WritesTechGeneralContainerContext } from "../../../context/WritesTechGeneralContainerContext";

export default function WritesTechGeneral() {
  const { writes, page, loading, handleChange } = useContext(WritesTechGeneralContainerContext);

  if (loading) {
    return <SkeletonLoading />;
  }

  return (
    <div className="writesTechGeneral-container">
      {/* writes topbar */}
      <div className="writesTechGeneral-topbar">
        <Breadcrumbs className="bread" aria-label="breadcrumb">
          <Link className="linkNew" underline="hover" to="/">
            <Home fontSize="large" />
          </Link>
          <Link className="linkNew" underline="hover" to="/writes-group">
            Kategori teknologi
          </Link>
          <Typography sx={{ fontSize: "20px" }}>Tentang teknologi secara umum</Typography>
        </Breadcrumbs>
      </div>
      {/* writes pagination */}
      <div className="writesTechGeneral-pagination">
        <Stack spacing={2}>
          <Typography sx={{ textAlign: "center" }}>Page: {page}</Typography>
          <Pagination count={5} page={page} variant="outlined" color="standard" size="large" shape="rounded" onChange={handleChange} />
        </Stack>
      </div>
      {/* writesTechGeneral content */}
      <div className="writesTechGeneral-content">
        <div className="writesTechGeneral-contentContainer">
          {writes.map((write) => (
            <div className="writesTechGeneral-contentItem" key={write._id}>
              <Card sx={{ maxWidth: "1000px" }}>
                <CardActionArea>
                  <Link to={`/writes-group/tech-general/${write._id}`} className="linkNew">
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
        <div className="writesTechGeneral-pagination">
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
