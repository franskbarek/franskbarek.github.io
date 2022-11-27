import { Box, Grid, Skeleton } from "@mui/material";

export default function SkeletonLoading() {
  return (
    <Grid className="project">
      <div>
        <Box sx={{ width: 210, marginRight: 20, my: 5 }}>
          <Skeleton width="60%"></Skeleton>
          <Skeleton variant="rectangular" width={370} height={225}></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="20%"></Skeleton>
        </Box>
      </div>
      <div>
        <Box sx={{ width: 210, marginRight: 20, my: 5 }}>
          <Skeleton width="60%"></Skeleton>
          <Skeleton variant="rectangular" width={370} height={225}></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="20%"></Skeleton>
        </Box>
      </div>
      <div>
        <Box sx={{ width: 210, marginRight: 20, my: 5 }}>
          <Skeleton width="60%"></Skeleton>
          <Skeleton variant="rectangular" width={370} height={225}></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="20%"></Skeleton>
        </Box>
      </div>
      <div>
        <Box sx={{ width: 210, marginRight: 20, my: 5 }}>
          <Skeleton width="60%"></Skeleton>
          <Skeleton variant="rectangular" width={370} height={225}></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="20%"></Skeleton>
        </Box>
      </div>
      <div>
        <Box sx={{ width: 210, marginRight: 20, my: 5 }}>
          <Skeleton width="60%"></Skeleton>
          <Skeleton variant="rectangular" width={370} height={225}></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="20%"></Skeleton>
        </Box>
      </div>
      <div>
        <Box sx={{ width: 210, marginRight: 20, my: 5 }}>
          <Skeleton width="60%"></Skeleton>
          <Skeleton variant="rectangular" width={370} height={225}></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="90%"></Skeleton>
          <Skeleton width="20%"></Skeleton>
        </Box>
      </div>
    </Grid>
  );
}
