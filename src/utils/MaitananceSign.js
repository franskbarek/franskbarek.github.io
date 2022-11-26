import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";

export default function MaintenanceSign() {
  return (
    <div className="maintenanceSign-container">
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        Sedang proses maitenance! (penambahan fitur pagination, gruping tipe tulisan & komentar) —{" "}
        <Link to={"/"} style={{ textDecoration: "none", color: "blue" }}>
          <strong>Kembali!</strong>
        </Link>
      </Alert>
    </div>
  );
}
