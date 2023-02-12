import { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Home } from "@mui/icons-material";
import "./writesGroup.css";

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function WritesGroup() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="writesGroup-container">
      {/* writesGroup topbar */}
      <div className="writesGroup-topbar">
        <Breadcrumbs aria-label="breadcrumb">
          <Link className="linkNew" underline="hover" to="/">
            <Home fontSize="large" />
          </Link>
          <Typography sx={{ fontSize: "20px" }}>Kategori tulisan</Typography>
        </Breadcrumbs>
      </div>
      {/* writesGroup accordian */}
      <div className="writesGroup-accordian-container">
        <div className="writesGroup-accordian-item">
          <Accordion onChange={handleChange("panel1")}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Topik Umum</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link to="/writes-group/general" className="linkNew">
                <Typography>Mengenai hal-hal umum dalam keseharian</Typography>
              </Link>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="writesGroup-accordian-item">
          <Accordion onChange={handleChange("panel2")}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>Teknologi</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link to="/writes-group/tech-general" className="linkNew">
                <Typography>Umum</Typography>
              </Link>
            </AccordionDetails>
            <AccordionDetails>
              <Link to="/writes-group/tech-programming" className="linkNew">
                <Typography>Bahasa Pemrograman</Typography>
              </Link>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="writesGroup-accordian-item">
          <Accordion onChange={handleChange("panel3")}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Tools</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Rekomendasi tools populer</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
