import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header/Header";
import MatPaperButton from "../Materials/MatPaperButton";
import Footer from "../Footer";
import ScrollButton from "../Scroll to top/ScrollButton";
import "../../styles/components/_blogs.scss";
const Blogs = () => {
  return (
    <>
      <Header />
      <MatPaperButton />
      <div className="blogs_cont">
        <Link to="/onlinevsoffline">
          <div className="box">
            {" "}
            <div className="text_cont">
              <div className="heading_box">
                <h2>Online VS Offine College Life</h2>
              </div>
              <div className="para">
                {" "}
                <div className="info">
                  After giving challenging Board Exams and other Competitive
                  Examinations, and equally realizing that our school life has
                  come to end, we are in a phase preparing ourselves for the
                  next major and essential part of our life- College...
                  <br />
                </div>
                <div className="subtitle">
                  {" "}
                  <span className="author_name"> Keerthana</span> &nbsp;· &nbsp;
                  26 Feb 2022 &nbsp; ·&nbsp; 5 min read
                </div>
              </div>
            </div>
            <div className="rep_image">
              <img
                // class="portfolio-image"
                src="https://images.unsplash.com/photo-1622554129902-bb01970e2540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                width={112}
                height={112}
              />
            </div>
          </div>
        </Link>{" "}
        <Link to="/placement-guide">
          <div className="box">
            {" "}
            <div className="text_cont">
              <div className="heading_box">
                <h2>Guide for Placement preparation</h2>
              </div>
              <div className="para">
                {" "}
                <div className="info">
                  There are lot of confusion and misconceptions among Sophomore
                  and Senior college students about the syllabus for placement
                  preparation. They lack resources for placements which leads to
                  tension and stress. If you are among them and want to...
                  <br />
                </div>
                <div className="subtitle">
                  {" "}
                  <span className="author_name"> Ayush Negi</span> &nbsp;·
                  &nbsp; 2 yrs ago &nbsp; ·&nbsp; 4 min read
                </div>
              </div>
            </div>
            <div className="rep_image">
              <img
                // class="portfolio-image"
                src="https://images.unsplash.com/photo-1608324777753-5d2f6e547b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwc3R1ZHl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                width={112}
                height={112}
              />
            </div>
          </div>
        </Link>{" "}
        <Link to="/room-counselling">
          <div className="box">
            {" "}
            <div className="text_cont">
              <div className="heading_box">
                <h2>Hostel Room Counselling</h2>
              </div>
              <div className="para">
                <div className="info">
                  Hey VITians! Is the counselling date close? Are you sitting
                  for the first time in the room counselling process and have no
                  clue about it? Don't worry, you are at the right place. Go
                  through this blog and get all your doubts cleared... <br />
                </div>

                <div className="subtitle">
                  {" "}
                  <span className="author_name"> Anshul Sachdev</span> &nbsp;·
                  &nbsp; 2 yr ago &nbsp; ·&nbsp; 5 min read
                </div>
              </div>
            </div>
            <div className="rep_image">
              <img
                src="https://images.unsplash.com/photo-1552933440-440952890413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
                srcSet=""
                width={112}
                height={112}
              />
            </div>
          </div>
        </Link>{" "}
        <Link to="/hostel-vacating-procedure">
          <div className="box">
            <div className="text_cont">
              <div className="heading_box">
                <h2>Hostel Vacating Procedure</h2>
              </div>
              <div className="para">
                <div className="info">
                  If you are leaving for PAT Internship and need to know all the
                  required formalities then this blog is for you. I got my
                  internship inquiry call from PAT office on 9th January while I
                  was in VIT doing my final semester... <br />
                </div>
                <div className="subtitle">
                  {" "}
                  <span className="author_name"> Anshul Sachdev</span> &nbsp;·
                  &nbsp; 2 yrs ago &nbsp; ·&nbsp; 6 min read
                </div>
              </div>
            </div>
            <div className="rep_image">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                alt=""
                srcSet=""
                width={112}
                height={112}
              />
            </div>
          </div>
        </Link>{" "}
        <Link to="/npm-package">
          <div className="box">
            {" "}
            <div className="text_cont">
              <div className="heading_box">
                <h2>How to get started with making NPM packages</h2>
              </div>
              <div className="para">
                {" "}
                <div className="info">
                  I have been fascinated by the internet and it has made me
                  curious about the technologies that shape it. I have been
                  learning MERN stack for a while now and have decided to
                  develop a Node package that will create a... <br />
                </div>{" "}
                <div className="subtitle">
                  {" "}
                  <span className="author_name"> Nimish Shah</span> &nbsp;·
                  &nbsp; 2 yrs ago &nbsp; ·&nbsp; 5 min read
                </div>
              </div>
            </div>
            <div className="rep_image">
              <img
                src="data:image/png;base64,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"
                alt=""
                srcSet=""
                width={112}
                height={112}
              />
            </div>
          </div>
        </Link>{" "}
        <Link to="/placement-experience">
          <div className="box">
            {" "}
            <div className="text_cont">
              <div className="heading_box">
                <h2>
                  Placement experience - Travelling from VIT Chennai to Vellore
                </h2>
              </div>
              <div className="para">
                <div className="info">
                  There are a lot of companies that come to VIT for on-campus
                  placements. Most of them come to Vellore campus for the
                  recruitment process and hence students from Chennai campus may
                  need to travel to Vellore campus for... <br />
                </div>

                <div className="subtitle">
                  {" "}
                  <span className="author_name"> Anshul Sachdev</span> &nbsp;·
                  &nbsp; 2 yr ago &nbsp; ·&nbsp; 2 min read
                </div>
              </div>
            </div>
            <div className="rep_image">
              <img
                src="https://images.unsplash.com/photo-1602190276434-4cd5500bc6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjB0cmF2ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                srcSet=""
                width={112}
                height={112}
              />
            </div>
          </div>
        </Link>
      </div>
      <Footer />
      <ScrollButton />
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    placement: state.placements,
  };
};

export default connect(mapStateToProps)(Blogs);
