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
      <div className="team-main-div">
        <div>
          <div class="team-container">
            <div class="card">
              {/* <img src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg" alt="" class="story__list"> */}

              <img
                src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg"
                alt="Person"
                class="card__image"
              />
              <p class="card__name">Shrey Sindher</p>
              <div class="grid-container">
                <div class="grid-child-posts">App Developer</div>

                {/* <div class="grid-child-followers">1012 Likes</div> */}
              </div>
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-codepen"></i>
                  </a>
                </li>
              </ul>
              {/* <button class="btn draw-border">Follow</button> */}
              <button class="btn draw-border">Message</button>
            </div>
            <div class="card">
              {/* <img src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg" alt="" class="story__list"> */}

              <img
                src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg"
                alt="Person"
                class="card__image"
              />
              <p class="card__name">Shrey Sindher</p>
              <div class="grid-container">
                <div class="grid-child-posts">App Developer</div>

                {/* <div class="grid-child-followers">1012 Likes</div> */}
              </div>
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-codepen"></i>
                  </a>
                </li>
              </ul>
              {/* <button class="btn draw-border">Follow</button> */}
              <button class="btn draw-border">Message</button>
            </div>
            <div class="card">
              {/* <img src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg" alt="" class="story__list"> */}

              <img
                src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg"
                alt="Person"
                class="card__image"
              />
              <p class="card__name">Shrey Sindher</p>
              <div class="grid-container">
                <div class="grid-child-posts">App Developer</div>

                {/* <div class="grid-child-followers">1012 Likes</div> */}
              </div>
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-codepen"></i>
                  </a>
                </li>
              </ul>
              {/* <button class="btn draw-border">Follow</button> */}
              <button class="btn draw-border">Message</button>
            </div>
            <div class="card">
              {/* <img src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg" alt="" class="story__list"> */}

              <img
                src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg"
                alt="Person"
                class="card__image"
              />
              <p class="card__name">Shrey Sindher</p>
              <div class="grid-container">
                <div class="grid-child-posts">App Developer</div>

                {/* <div class="grid-child-followers">1012 Likes</div> */}
              </div>
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-codepen"></i>
                  </a>
                </li>
              </ul>
              {/* <button class="btn draw-border">Follow</button> */}
              <button class="btn draw-border">Message</button>
            </div>
            <div class="card">
              {/* <img src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg" alt="" class="story__list"> */}

              <img
                src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg"
                alt="Person"
                class="card__image"
              />
              <p class="card__name">Shrey Sindher</p>
              <div class="grid-container">
                <div class="grid-child-posts">App Developer</div>

                {/* <div class="grid-child-followers">1012 Likes</div> */}
              </div>
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-codepen"></i>
                  </a>
                </li>
              </ul>
              {/* <button class="btn draw-border">Follow</button> */}
              <button class="btn draw-border">Message</button>
            </div>
            <div class="card">
              {/* <img src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg" alt="" class="story__list"> */}

              <img
                src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg"
                alt="Person"
                class="card__image"
              />
              <p class="card__name">Shrey Sindher</p>
              <div class="grid-container">
                <div class="grid-child-posts">App Developer</div>

                {/* <div class="grid-child-followers">1012 Likes</div> */}
              </div>
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-codepen"></i>
                  </a>
                </li>
              </ul>
              {/* <button class="btn draw-border">Follow</button> */}
              <button class="btn draw-border">Message</button>
            </div>
            <div class="card">
              {/* <img src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg" alt="" class="story__list"> */}

              <img
                src="https://my-world-bucket-alpha.s3.amazonaws.com/user_files/ID369250310000000108/profile/picture1650557439.jpg"
                alt="Person"
                class="card__image"
              />
              <p class="card__name">Shrey Sindher</p>
              <div class="grid-container">
                <div class="grid-child-posts">App Developer</div>

                {/* <div class="grid-child-followers">1012 Likes</div> */}
              </div>
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-codepen"></i>
                  </a>
                </li>
              </ul>
              {/* <button class="btn draw-border">Follow</button> */}
              <button class="btn draw-border">Message</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollButton />
    </>
  );
};

export default Team;
