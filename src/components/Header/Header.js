import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../actions/auth";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: screen.width,
    };
  }

  render() {
    return (
      <div>
        <header className="show-for-desktop header">
          <div className="content-placement">
            <div className="header__content">
              <Link className="header__title" to="/">
                {window.location.pathname == "/cat1papers" ? (
                  <img
                    src="./images/header-font.png"
                    height="50px"
                    width="150px"
                  />
                ) : null || window.location.pathname == "/cat2papers" ? (
                  <img
                    src="./images/header-font.png"
                    height="50px"
                    width="150px"
                  />
                ) : null || window.location.pathname == "/fatpapers" ? (
                  <img
                    src="./images/header-font.png"
                    height="50px"
                    width="150px"
                  />
                ) : null || window.location.pathname == "/materials" ? (
                  <img
                    src="./images/header-font.png"
                    height="50px"
                    width="150px"
                  />
                ) : null || window.location.pathname == "/calculatorHome" ? (
                  <img
                    src="./images/header-font.png"
                    height="50px"
                    width="150px"
                  />
                ) : null || window.location.pathname == "/placements" ? (
                  <img
                    src="./images/header-font.png"
                    height="50px"
                    width="150px"
                  />
                ) : (
                  <img
                    src="../../images/header-font.png"
                    height="50px"
                    width="150px"
                  />
                )}
              </Link>
              <div>
                <span className="show-for-desktop">
                  <span className="dropdown">
                    {window.location.pathname == "/cat1papers" ||
                    window.location.pathname == "/cat2papers" ||
                    window.location.pathname == "/fatpapers" ||
                    window.location.pathname == "/calculatorHome" ||
                    window.location.pathname == "/materials" ? (
                      <span className="header-button header-button--link-u">
                        Examination &nbsp;
                        <i
                          className="fa fa-caret-down"
                          style={{ fontSize: "2rem", color: "black" }}
                        ></i>
                      </span>
                    ) : (
                      <span className="header-button header-button--link">
                        Examination &nbsp;
                        <i
                          className="fa fa-caret-down"
                          style={{ fontSize: "2rem", color: "white" }}
                        ></i>
                      </span>
                    )}
                    <div className="dropdown-content">
                      <Link to="/cat1papers" className="button button--link">
                        CAT-1 Papers
                      </Link>
                      <Link to="/cat2papers" className="button button--link">
                        CAT-2 Papers
                      </Link>
                      <Link to="/fatpapers" className="button button--link">
                        FAT Papers
                      </Link>
                      <hr
                        style={{
                          margin: "0",
                          padding: "0",
                          align: "center",
                          border: "1px solid #84d0d0",
                        }}
                      />
                      <Link
                        to="/materials"
                        className="button button--link"
                        style={{ color: "#84d0d0" }}
                      >
                        Study Materials
                      </Link>
                      <Link
                        to="/calculatorHome"
                        className="button button--link"
                        style={{ color: "#84d0d0" }}
                      >
                        Calculator
                      </Link>
                    </div>
                  </span>
                  <Link to="/blogs">
                    {window.location.pathname == "/onlinevsoffline" ||
                    window.location.pathname == "/room-counselling" ||
                    window.location.pathname == "/blogs" ||
                    window.location.pathname == "/hostel-vacating-procedure" ||
                    window.location.pathname == "/npm-package" ||
                    window.location.pathname == "/placement-guide" ||
                    window.location.pathname == "/placement-experience" ? (
                      <span className="header-button header-button--link-u">
                        Blogs
                      </span>
                    ) : (
                      <span className="header-button header-button--link">
                        Blogs
                      </span>
                    )}
                  </Link>
                  <Link to="/placements">
                    {(window.location.pathname !== "/materials" &&
                      window.location.pathname !== "/cat1papers" &&
                      window.location.pathname !== "/cat2papers" &&
                      window.location.pathname !== "/fatpapers" &&
                      window.location.pathname !== "/about-us" &&
                      window.location.pathname !== "/faqs" &&
                      window.location.pathname !== "/calculatorHome" &&
                      window.location.pathname !== "/blogs" &&
                      window.location.pathname !== "/room-counselling" &&
                      window.location.pathname !==
                        "/hostel-vacating-procedure" &&
                      window.location.pathname !== "/onlinevsoffline" &&
                      window.location.pathname !== "/npm-package" &&
                      window.location.pathname !== "/placement-guide" &&
                      window.location.pathname !== "/placement-experience" &&
                      window.location.pathname !== "/" &&
                      window.location.pathname !== "/calculatorHome" &&
                      window.location.pathname !== "/gpaCalculator" &&
                      window.location.pathname !== "/cgpaCalculator" &&
                      window.location.pathname !== "/marksCalculator" &&
                      window.location.pathname !== "/team" &&
                      window.location.pathname !== "/privacy-policy" && (
                        <span className="header-button header-button--link-u">
                          Placements
                        </span>
                      )) || (
                      <span className="header-button header-button--link">
                        Placements
                      </span>
                    )}
                  </Link>

                  <Link to="/team">
                    {(window.location.pathname !== "/materials" &&
                      window.location.pathname !== "/cat1papers" &&
                      window.location.pathname !== "/cat2papers" &&
                      window.location.pathname !== "/fatpapers" &&
                      window.location.pathname !== "/about-us" &&
                      window.location.pathname !== "/faqs" &&
                      window.location.pathname !== "/calculatorHome" &&
                      window.location.pathname !== "/blogs" &&
                      window.location.pathname !== "/room-counselling" &&
                      window.location.pathname !==
                        "/hostel-vacating-procedure" &&
                      window.location.pathname !== "/onlinevsoffline" &&
                      window.location.pathname !== "/npm-package" &&
                      window.location.pathname !== "/calculatorHome" &&
                      window.location.pathname !== "/gpaCalculator" &&
                      window.location.pathname !== "/cgpaCalculator" &&
                      window.location.pathname !== "/marksCalculator" &&
                      window.location.pathname !== "/placement-guide" &&
                      window.location.pathname !== "/placement-experience" &&
                      window.location.pathname !== "/" &&
                      window.location.pathname !== "/placements" &&
                      window.location.pathname !== "/privacy-policy" && (
                        <span className="header-button header-button--link-u">
                          Our Team
                        </span>
                      )) || (
                      <span className="header-button header-button--link">
                        Our Team
                      </span>
                    )}
                  </Link>
                  <a
                    href="https://discord.gg/9V7xUSNDNJ"
                    style={{ margin: "0", padding: "0" }}
                  >
                    <span
                      className="header-button header-button--link"
                      style={{ paddingTop: "0", paddingBottom: "0" }}
                    >
                      Join Discord
                      <img
                        src="./images/discord.svg"
                        className="discord-button"
                        alt="."
                      />
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
