import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";

export default function MaintenanceSign() {
  return (
    <div className="maintenanceSign-container">
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        Sedang proses maintenance! (penambahan fitur pagination, gruping tipe tulisan & komentar) —{" "}
        <Link to={"/"} style={{ textDecoration: "none", color: "darkblue" }}>
          <strong>Kembali</strong>
        </Link>
      </Alert>
    </div>
  );
}
