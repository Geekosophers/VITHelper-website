import React from 'react';
import Header from '../Header/Header';
import MatPaperButton from '../Materials/MatPaperButton';
import { connect } from 'react-redux';

const Blog4 = (props) => {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Header />
      <MatPaperButton />
      <div className="content-container" style={{paddingBottom:'50px'}}>
        <h1>Guide for Placement Preparation</h1>
        <div className={"portfolio-box-layout__box"}>
          <img className="portfolio-image" src="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2FUntitled-1-01.png?alt=media&token=0e727239-9436-4ec3-82ee-5458f1965272" />
        </div>
        <p>There are lot of confusion and misconceptions among Sophomore and Senior college students about the syllabus for placement preparation. They lack resources for placements which leads to tension and stress. If you are among them and want to make your placement preparation right, then this article is for you.</p>
        <h3><b>Important subjects that needs to be done for any college placement-</b></h3>
        <p>&#9679; Aptitude</p>
        <p>&#9679; MCQs based on Programming</p>
        <p>&#9679; Competitive programming</p>
        <p>&#9679; Algorithms and Data Structures</p>
        <p>&#9679; Academics (OS/DBMS/CN)</p>
        <h3><b>Here we will focus on two topics-</b></h3>
        <p>&#9679; Competitive programming</p>
        <p>&#9679; Algorithms and Data Structures</p>
        <p style={{borderLeft:'solid 3px #505050',paddingLeft:'5px'}}>Do checkout our Placements section for other <a href="https://www.vithelper.in/placements/resources"><u>subjects' resources</u></a>, <a href="https://www.vithelper.in/placements/article"><u>placement reviews</u></a>, and <a href="https://www.vithelper.in/placements/pat"><u>PAT rules and regulations</u></a>.</p>
        <h2>1. Competitive programming</h2>
        <p>The first screening process of most companies is a programming test where you are reviewed based on your ability to write code. Here are a general points followed by most companies-</p>
        <p>&#9679; <b>Time constraint-</b> Student must be able to write the code within time limit.</p>
        <p>&#9679; <b>Programming Language-</b> Student can choose their coding language. In very few companies they will restrict the coding language. You are required to have a good knowledge of at least one language thoroughly- C++, C, Python or Java.</p>
        <p>&#9679; <b>Complexity of code-</b> Code should be optimized and should run within the given time and space.</p>
        <h3><b>Preparing tips-</b></h3>
        <p>There are many online coding platforms where you can practice competitive coding. Here are a few good ones-</p>
        <p>&#9679; <a href="https://www.geeksforgeeks.org/" target="_blank"><u>GeeksforGeeks | A computer science portal for geeks</u></a></p>
        <p>&#9679; <a href="https://leetcode.com/" target="_blank"><u>LeetCode Online Judge</u></a></p>
        <p>&#9679; <a href="https://www.hackerrank.com/dashboard" target="_blank"><u>HackerRank</u></a></p>
        <p>&#9679; <a href="https://www.hackerearth.com/" target="_blank"><u>HackerEarth</u></a></p>
        <p>&#9679; <a href="https://www.codechef.com/" target="_blank"><u>CodeChef</u></a></p>
        <p><b>-> If you are a beginner</b> then you should go for sites like HackerRank or GeeksForGeeks. Here, you should try to solve maximum problems in easy and basic level so that you could get a good idea of about coding and it will also help you build confidence.</p>
        <p><b>-> If you are good at programming</b>, you should prepare from sites like Code Chef or Code force. Here, no shortcuts are available and you have to practice a lot by solving different kind of problems and strengthen your concepts.</p>
        <b>Work on every concept, and take feedbacks after solving each problem seriously.</b>
        <h2>2. Algorithms and Data Structures</h2>
        <p>Data Structures and Algorithms are the back bone to all programming languages and hence you should have a good knowledge on these two topics, these are the most important topics one should prepare for any company interview.</p>
        <h3><b>DATA STRUCTURES</b></h3>
        <p>A data structure is a data organization, management, and storage format that enables efficient access and modification.</p>
        <p>You should start by learning a programming language suited for algorithms/data structures. You can learn python/Java/C++/ C as per your choice.</p>
        <p><b>Some important data structures are–</b></p>
        <p>1. String/Array</p>
        <p>2. Linked lists</p>
        <p> &bull; Single Linked lists</p>
        <p> &bull; Double Linked lists</p>
        <p> &bull; Circular Linked lists</p>
        <p>3. Stack</p>
        <p>4. Queues</p>
        <p>5. Trees</p>
        <p>To learn about these data structures you can refer online material or textbooks. Some recommended sources from us are-</p>
        <p>&#9679; My code school (YouTube).</p>
        <p>&#9679; MIT lectures playlist on data structure and algorithms (You Tube).</p>
        <p>&#9679; Courses available on online learning sites like Coursera , Udacity etc.</p>
        <h3><b>ALGORITHMS</b></h3>
        <p>Algorithms are basically used for improving time complexity and space used, they also help to run your code in more efficient way.</p>
        <p><b>Important topics for algorithms are-</b></p>
        <p>&#9679; <i>Searching-</i> Linear and Binary (ordered, unordered)</p>
        <p>&#9679; <i>Sorting-</i> Bubble, Selection, Merge, Insertion, Quick</p>
        <p>&#9679; <i>Time and Space complexity-</i> Big O Notation</p>
        <p>&#9679; <i>Recursion, Backtracking</i></p>
        <p>&#9679; <i>Dynamic Programming</i></p>
        <p>&#9679; <i>Greedy Algorithm</i></p>
        <p>But, the most important thing is that you should try to implement the Algorithm or data structure after understanding its concept. The best way to polish your implementation skills is to do competitive programming problems.</p>
        <p><b>Practice and participate in different challenges and submit your code here-</b></p>
        <p>&#9679; <a href="https://www.geeksforgeeks.org/" target="_blank"><u>GeeksforGeeks | A computer science portal for geeks</u></a></p>
        <p>&#9679; <a href="https://leetcode.com/" target="_blank"><u>LeetCode Online Judge</u></a></p>
        <p>&#9679; <a href="https://www.hackerrank.com/dashboard" target="_blank"><u>HackerRank</u></a></p>
        <p>&#9679; <a href="https://www.hackerearth.com/" target="_blank"><u>HackerEarth - Programming challenges and Developer jobs</u></a></p>
        <p><b>Other recommended sources for having a better understanding of algorithms are-</b></p>
        <p>&#9679; Algorithms lectures by Abdul Bari (You Tube)</p>
        <p>&#9679; MIT course playlist on algorithms (You Tube)</p>
        <p>&#9679; Data structures and algorithms made easy by Narasimha Karumanchi.</p>
        <p style={{textAlign:'center'}}>&bull;&nbsp;&bull;&nbsp;&bull;</p>
        <h3><b>To Summarize</b></h3>
        <p><b>Overall important DSA topics are-</b></p>
        <p>&#9679; Stacks, Queues, Linked Lists</p>
        <p>&#9679; Tree- Traversals, Binary Tree, all related algorithms</p>
        <p>&#9679; Graph- Traversals, algorithms</p>
        <p>&#9679; Sorting- Bubble, Selection, Merge, Insertion, Quick</p>
        <p>&#9679; Searching- Linear, Binary (ordered, unordered)</p>
        <p>&#9679; Time and space complexity- Big O Notation</p>
        <p>&#9679; Recursion, Backtracking</p>
        <p>&#9679; Dynamic programming</p>
        <p>So, I'll wrap it up with a saying that there's nothing worse than leaving a job half-done.</p>
        <p>Good luck and happy coding!</p>
        <p style={{textAlign:'end'}}>-written by <b>Ayush Negi</b></p>
      </div>
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    placement: state.placements
  };
};

export default connect(mapStateToProps)(Blog4);