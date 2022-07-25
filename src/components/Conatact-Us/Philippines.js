import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

const Philippines = () => {
  return (
    <div>
      <Accordion
        defaultExpanded="true"
        sx={{
          background: "rgb(248, 249, 250)",
          boxShadow: "none",
          fontFamily: "Poppins",
          marginBottom: "6px",
          padding: "0px",
        }}
        className="address-acc"
      >
        <AccordionSummary
          expandIcon={<i className="fa-solid fa-plus"></i>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: "0px" }}
        >
          <Typography
            sx={{ fontWeight: "500", fontSize: "17px" }}
            className="philippines-txt"
          >
            Philippines - Metro Manila
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="philippines-txt" sx={{ padding: "0px" }}>
          <Typography className="philippines-txt" sx={{ padding: "0px" }}>
            Level 10-1 One Global Place 25th Street, 5th Avenue, Fort Bonifacio
            Taguig 1634 Metro Manila, Philippines
          </Typography>

          <div className="contact-icon-container">
            <a href="mailto:info@laquest.net">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="tel:+63271181564">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Philippines;
