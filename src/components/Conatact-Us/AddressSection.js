import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../../pages/Contact-Us/contact.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Minimize from "@mui/icons-material/Minimize";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function AddressSection() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15447.546592852956!2d121.0469151!3d14.5484741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc60905b64be3827a!2sOne%20Global%20Place!5e0!3m2!1sen!2sin!4v1655815809049!5m2!1sen!2sin";
  const IndiaMap =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14021.513026647284!2d77.2189538!3d28.5283482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81c366c7998e72a3!2sSelect%20Citywalk!5e0!3m2!1sen!2sin!4v1655966324775!5m2!1sen!2sin";
  const UsMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.7265890684307!2d-75.6570387!3d39.723326799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c701c892855555%3A0x20a2b8882c1e4d73!2s2055%20Limestone%20Rd%20Suite%20200%20C%2C%20Wilmington%2C%20DE%2019808%2C%20USA!5e0!3m2!1sen!2sin!4v1655967584022!5m2!1sen!2sin";

  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleExpendChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={
        {
          // flexGrow: 1,
          // bgcolor: "background.paper",
          // display: "grid",
          // gridTemplateColumns: "50% 50%",
          // width: "100%",
          // backgroundColor: "rgb(248, 249, 250)",
        }
      }
      className="address-map-container"
    >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        TabIndicatorProps={{
          style: { display: "none" },
        }}
      >
        <div className="globel-loca-head">
          <div className="para-span-sec globel-location-spn">
            <p className="text-container-para">Our Global</p>
            <span>Locations</span>
          </div>
        </div>
        <Tab
          label={
            <>
              <Accordion
                defaultExpanded="true"
                expanded={expanded === "panel1"}
                onChange={handleExpendChange("panel1")}
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
                  expandIcon={
                    expanded === "panel1" ? (
                      <i className="fa-solid fa-minus expend-icon"></i>
                    ) : (
                      <i className="fa-solid fa-plus expend-icon"></i>
                    )
                  }
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
                <AccordionDetails
                  className="philippines-txt"
                  sx={{ padding: "0px" }}
                >
                  <Typography
                    className="philippines-txt"
                    sx={{ padding: "0px" }}
                  >
                    Level 10-1 One Global Place 25th Street, 5th Avenue, Fort
                    Bonifacio Taguig 1634 Metro Manila, Philippines
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
            </>
          }
          {...a11yProps(1)}
          sx={{ margin: "auto" }}
          className="tab-heading"
        />
        <Tab
          label={
            <>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleExpendChange("panel2")}
                sx={{
                  background: "rgb(248, 249, 250)",
                  boxShadow: "none",
                  fontFamily: "Poppins",
                  padding: "0px",
                  margin: "auto",
                }}
                className="address-acc"
              >
                <AccordionSummary
                  expandIcon={
                    expanded === "panel2" ? (
                      <i className="fa-solid fa-minus expend-icon"></i>
                    ) : (
                      <i className="fa-solid fa-plus expend-icon"></i>
                    )
                  }
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ padding: "0px" }}
                >
                  <Typography
                    sx={{ fontWeight: "500", fontSize: "17px" }}
                    className="philippines-txt"
                  >
                    India - New Delhi
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  className="philippines-txt"
                  sx={{ padding: "0px" }}
                >
                  <Typography
                    className="philippines-txt"
                    sx={{ padding: "0px" }}
                  >
                    Level 1, Southern Park, Near Select City Walk, Saket, New
                    Delhi, Delhi 110017, India
                  </Typography>
                  <div className="contact-icon-container">
                    <a href="mailto:info@laquest.net">
                      <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a href="tel:+919871978766">
                      <i className="fa-solid fa-phone"></i>
                    </a>
                  </div>
                </AccordionDetails>
              </Accordion>
            </>
          }
          {...a11yProps(2)}
          sx={{ margin: "auto" }}
          className="tab-heading"
        />
        <Tab
          label={
            <>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleExpendChange("panel3")}
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
                  expandIcon={
                    expanded === "panel3" ? (
                      <i className="fa-solid fa-minus expend-icon"></i>
                    ) : (
                      <i className="fa-solid fa-plus expend-icon"></i>
                    )
                  }
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                  sx={{ padding: "0px" }}
                >
                  <Typography
                    sx={{ fontWeight: "500", fontSize: "17px" }}
                    className="philippines-txt"
                  >
                    United States - Delaware
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  className="philippines-txt"
                  sx={{ padding: "0px" }}
                >
                  <Typography
                    className="philippines-txt"
                    sx={{ padding: "0px" }}
                  >
                    2055 Limestone Road #200 C Wilmington, Delaware 19808 United
                    States
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
            </>
          }
          {...a11yProps(3)}
          sx={{ margin: "auto" }}
          className="tab-heading"
        />
      </Tabs>
      <TabPanel value={value} index={1} className="tab-data">
        <div className="company-image-container"></div>
        <div className="map-sec">
          <iframe
            src={mapUrl}
            width="99%"
            height="230"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} className="tab-data">
        <div className="india-company"></div>
        <div className="map-sec">
          <iframe
            src={IndiaMap}
            width="99%"
            height="230"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3} className="tab-data">
        <div className="us-company"></div>
        <div className="map-sec">
          <iframe
            src={UsMap}
            width="99%"
            height="230"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </TabPanel>
    </Box>
  );
}
