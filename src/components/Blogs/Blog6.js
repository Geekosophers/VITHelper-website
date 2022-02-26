import React from "react";
import Header from "../Header/Header";
import MatPaperButton from "../Materials/MatPaperButton";
import { connect } from "react-redux";
import Footer from "../Footer";
import ScrollButton from "../Scroll to top/ScrollButton";

const Blogs = (props) => {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Header />
      <MatPaperButton />
      <div className="content-container" style={{ paddingBottom: "50px" }}>
        <h1>Online vs Offline College Life</h1>{" "}
        <p>
          {" "}
          After giving challenging Board Exams and other Competitive
          Examinations, and equally realizing that our school life has come to
          end, we are in a phase preparing ourselves for the next major and
          essential part of our life- <b>College</b>.
        </p>{" "}
        <p>
          Lots of dreams and expectations with an equal amount of fear on how we
          would cope with the new atmosphere, meeting new people, socializing,
          and having fun is a tough shell to crack for every first-year student
          until we blend with our twin-minded fellow mates.
        </p>{" "}
        <p>
          {" "}
          College life highlights the process of making new friends, creating
          memories, enhancing our skills, being part of different events and
          clubs, being creative and productive, and also the best place to get
          to know more about the purpose of life in addition to our major course
          which we are pursuing.{" "}
        </p>{" "}
        <p>
          {" "}
          Vellore Institute of Technology identified as the Institute of
          Eminence is one such University that offers the above-mentioned
          qualities for its students. VIT University is known for its continuous
          effort to improve the quality of education. The campus has a
          cosmopolitan atmosphere with students from all corners of the globe.
          Experienced faculties are encouraged to nurture the students.
        </p>{" "}
        <p>
          {" "}
          The Covid Pandemic has proved to be challenging for the institution to
          reopen, as they fear risking the life of students. This equally has an
          impact on the students’ mindset and is also posing a barrier,
          preventing them from enjoying the college ambiance.{" "}
        </p>{" "}
        <p>
          {" "}
          The pandemic has made the first-day expectations of College life begin
          with online classes.
        </p>{" "}
        <h3> CAMPUS LIFE:</h3>
        <p>
          {" "}
          VIT is an institution with a wide range of facilities and
          infrastructure, one of the finest institutions one could ask for. The
          college possesses a universal ambiance suitable for both faculties and
          students coming from different realms for research and studies. Smart
          classrooms are designed in such a way so that students can make use of
          ample resources at the click of a button, the library also has wide
          collections of books, journals, and other resources of various
          subjects. Online students do not get to enjoy and utilize the wide
          facilities the University provides its students. Being engineering
          students, practical knowledge on handling different types of equipment
          and gaining exposure to various other laboratory work is highly
          essential, which is confined to students due to online classes despite
          the university providing fully furnished and equipped labs.
          Socializing and networking are skills one needs to master during
          college life. Online classes hinder interaction with faculty and
          college-mates, though students connect through WhatsApp, Instagram,
          and other social media platforms, it does not match that of physical
          interaction.
        </p>{" "}
        <p>
          {" "}
          Offline exams are one step ahead of online exams because all you need
          to do is prepare, reach out to the exam hall, and give your exam while
          online exams on the other hand prove to be challenging as they involve
          unexpected server crashes, multiple logins, and uploading of answer
          scripts which are a tiresome process. Online classes also have an
          impact on overall health, and continuous gazing at the monitor for a
          long time ends up in eye strain and headache.
        </p>
        <p>
          {" "}
          But just as how a coin has two sides, online classes also provide
          beneficiaries for the students. They can attend classes from their
          comfort zone and get access to recorded sessions if they fail to
          attend the live classes, which is not possible during offline
          lectures. Students also get time to explore various other niches and
          enhance the skills required for their place of interest. Lastly, be it
          online or offline, seniors of VIT have always proved to be super cool
          and help each of their juniors.
        </p>{" "}
        <h3>RIVIERA AND GRAVITAS:</h3> Riviera and GraVITas are recognized as
        VIT’s extravagant events. <h4> RIVIERA: </h4> Riviera is listed as one
        of the topmost cultural fests of India. It’s the annual international
        sports and cultural carnival of VIT where students showcase their
        talents. A 4-day extravagant event involves social, cultural, and sports
        competitions alongside concerts performed by well-known artists.
        <h4> GRAVITAS:</h4> GraVITas is VIT’s another Extravagant Annual
        technological design carnival full of amusement and learning. A 3-day
        fest themed ‘Aspiring Innovations’. This fiesta provides the stage for
        the students to exhibit their innovative, technical, and entrepreneurial
        ideas. Due to the novel Corona Virus outbreak, both of these events have
        not been conducted for the past two years. <h3> CLUBS AND CHAPTERS:</h3>{" "}
        <p>
          Clubs and Chapters are student bodies conducting events that are
          managed by the Office of Student Welfare which fascinates the students
          and encourages them to be part of diverse activities held throughout
          the year. Chapters have tie-ups with colleges and universities,
          offering students to create efficient networks unrestricted to
          borders. It also helps them to get to know new things. Clubs are
          confined within the VIT campus and are the source of entertainment and
          enthusiasm that link students with a like mindset. Domains range from
          fine arts to performing arts, coding, wellness, NGO’s outreach,
          technical/ development. The clubs and chapters at VIT uphold the
          spirit of curiosity and scientific research, space exploration and
          aviation, and electric car and formula student racing each having
          spectacular records.{" "}
        </p>
        <p>
          Choosing a club/chapter that suits you is quite challenging due to a
          lack of awareness about them, and also the recruitment process might
          sound too complicated. So here are a few things to keep in mind before
          you appear for the recruitment process
        </p>
        <li> Understand who you are, </li> <br />
        <li> What kind of decisions do you make,</li>
        <br />
        <li> What skills do you have?</li>
        <br />{" "}
        <p>
          Once you figure out this, you can explain to the recruiters why your
          contributions will be so important to the club/chapter.{" "}
        </p>
        <p>
          Most clubs/chapters would like to see your skills, dedication, and
          ideas. If you can convince the recruiters that you can contribute to
          the clubs/chapters, then you are in. The recruiters are often sweet
          and the interviews go like interacting with a new friend. So take a
          chill pill.
        </p>
        <p>
          {" "}
          Promotion of a particular club/chapter offline is very interesting and
          fun, seniors go in groups to interact with their juniors, sell their
          events, it has also been an excellent medium for networking as you
          come across seniors having a good deal of expertise who also encourage
          and support juniors.
        </p>{" "}
        The work experience varies from club to club and chapter to chapter as
        some are hyperactive while the others are occasionally active.{" "}
        <h3>HOSTEL AND MESS:</h3>{" "}
        <p>
          VIT Hostel titled ‘Home away from Home’ provides a comfortable and
          secure atmosphere. Interacting with diverse populations and cultures
          encourages students to develop leadership skills. Hostels play a
          crucial role as students step out from the protective and spoon-fed
          parental atmosphere and learn to make decisions on their own. Hostel
          reviews meetings are conducted every fortnight by the Hostel
          Administrators to meet student requirements. Wardens are available
          24x7 to support the students. The hostel rooms and bathrooms are
          cleaned every essential day. Hostel wardens are friendly and equally
          strict timekeepers. Once you join VITHostel(especially freshers),
          you’ll be obsessed with these picturesque views from the windows (F,
          N, M, P BLOCKS).
        </p>{" "}
        <p>
          {" "}
          It takes a small amount of effort to adjust with roommates, and once
          that is done, the hostel life is going to be memorable. Being in the
          ‘away from parents’ phase, life in a hostel teaches the AID of life:
          Acclimatization, Independence, and Decisiveness.
        </p>{" "}
        <p>
          {" "}
          The VITMess stands far away from the stereotypical mess, maintaining
          hygiene and sterilized kitchens. Concerning the great cultural
          diversity, students have access to appetizing and multi-cuisine
          catering services that serve vegetarian, non-vegetarian, Indian, and
          International food to cater to the food needs of students coming from
          different corners of the globe.{" "}
        </p>
        <p>
          {" "}
          The night canteen functioning between 10:30 pm-12:30 pm in VIT is the
          icing on a cake, the site where midnight cravings come to an end and
          the spot where students have a lot of fun, gossip, and whatnot.
        </p>{" "}
        Now, you tell me, ain’t you missing the college vibe? Though online
        classes are cost-friendly and provide space for asynchronous learning;
        the exposure and network, one gains through offline classes are a cut
        above. Eyes are the best cameras capturing moments with emotion,
        creating memories, and college life play a vital role in this. See you
        all soon on the campus. Also, don’t forget to follow the Covid protocols
        as the pandemic has not come to an end yet.
      </div>
      <Footer />
      <ScrollButton />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    placement: state.placements,
  };
};

export default connect(mapStateToProps)(Blogs);
