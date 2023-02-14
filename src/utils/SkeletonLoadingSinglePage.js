import { Skeleton } from "@mui/material";

export default function SkeletonLoadingSinglePage() {
  return (
    <Skeleton variant="rectangular" width="100%">
      <div style={{ padding: "100%" }} />
    </Skeleton>
  );
}
