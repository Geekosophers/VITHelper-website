import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header/Header";
import MatPaperButton from "./Materials/MatPaperButton";
import Footer from "./Footer";
import ScrollButton from "./Scroll to top/ScrollButton";
import "../styles/components/_team.scss";

const Team = () => {
  return (
    <>
      <Header />
      <MatPaperButton />
      <div className="team-main-div">Team</div>
      <Footer />
      <ScrollButton />
    </>
  );
};

export default Team;
