import "./Home.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";

const About = () => (
  <div className="home">
    <Typography variant="h2" gutterBottom>
        Welcome to Interview Prep Notes!
      </Typography>
      <Typography variant="body1" paragraph>
        Organize and prepare for your interviews with ease.
      </Typography>
  </div>
);

export default About;
