import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const US = () => {
  return (
    <div>
      <Accordion
        sx={{
          background: "rgb(248, 249, 250)",
          boxShadow: "none",
          fontFamily: "Poppins",
          padding: "0px",
          width: "100%",
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
            United States
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="philippines-txt" sx={{ padding: "0px" }}>
          <Typography className="philippines-txt" sx={{ padding: "0px" }}>
            2055 Limestone Road #200 C Wilmington, Delaware 19808 United States
          </Typography>
          <div className="contact-icon-container">
            <a href="mailto:info@laquest.net">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="tel:+17185212957">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default US;
