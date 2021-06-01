import React from 'react';
import Header from './Header';
import MatPaperButton from './MatPaperButton';
import { connect } from 'react-redux';


const Blogs = (props) => {
  return (
    <div>
      {window.scrollTo(0, 0)}
      <Header />
      <MatPaperButton />
      <div className="content-container" style={{paddingBottom:'50px'}}>
        <h1>How to get started with making NPM Packages ?</h1>
        <div className={"portfolio-box-layout__box"}>
          <img className="portfolio-image" src="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2Fdesktop-view-01.png?alt=media&token=06b6d3af-b02e-4c04-a39f-362717fef123" />
        </div>
        <p>I have been fascinated by the internet and it has made me curious about the technologies that shape it. I have been learning MERN stack for a while now and have decided to develop a Node package that will create a boilerplate for the apps built using MERN stack.</p>
        <p>Here's what I realized, NPM packages are easy to build and use.</p>
        <h3><b>To create an NPM package, all you need to be familiar with is Node. So, let's dive in</b></h3>
        <p>1. First, I created an empty directory and initialized a project by typing the following command in the terminal-</p>
        <p className="blog-code-bg" style={{marginLeft:'3px'}}>npm init</p>
        <p>After filling up all the details, package.json was created.</p>
        <p>2. Next, in index.js, in the very first line,</p>
        <p className="blog-code-bg" style={{marginLeft:'3px'}}>#!/usr/bin/node</p>
        <p>This string was required</p>
        <p>This string basically tells the machine to treat 'index.js' as binary in the node environment.</p>
        <p>3. Next, to make the boilerplate, I used the create-react-app package and to invoke the package programmatically, I used the child_process library. Other modules were also required that I used for other functionalities but we'll come to later. So the index.js looks something like this -</p>
        <div className={"portfolio-box-layout__box"}>
          <img className="portfolio-image" src="https://firebasestorage.googleapis.com/v0/b/vithelper-32e0b.appspot.com/o/images%2Fcode-snippet.png?alt=media&token=eefc6adf-94e8-4eab-9898-dc354a55b687" />
        </div>
        <p>4. Now, let's dig into the main stuff. The first thing that I thought was that I'd need a project name from the user. So, I prompted the user with a question regarding the same. I found this cool library inquirer which takes all the types of inputs (from boolean to multiple checklist) in order to execute the above mentioned task.</p>
        <div className="blog-code-bg">
            <p>const questions = await inquirer.prompt([&#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;type: 'input',</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;name: 'projectName',</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;message: 'What is the name of the project? (Use small letters and without space)</p>
            <p>&#125;]);</p>
        </div>
        <p>When above block of code is executed, the questions variable would look something like this,</p>
        <p>&#123; projectName:&lt;Something_User_Entered&gt;&#125;</p>
        <p>5. Now that I fetched the project name, I decided to create a directory of the name and put the boilerplate in it. Here comes the use of the module 'fs-extra'. I used mkdirs function to achieve this. I could've just spawned a child_process and used the 'mkdir' shell command but I used the mkdirs function, in order for the package to work on cross-platform.</p>
        <p className="blog-code-bg" style={{padding:'3px'}}>fs.mkdirs(path.join(_cwd, $&#123;projectName&#125;));</p>
        <p>so, if the terminal was opened and the path was set to ~/Documents, a new folder named "projectName" would have been created in Documents.</p>
        <p>6. Then I initialized the React App with create-react-app. For this, I used child_process to spawn a shell.</p>
        <div className="blog-code-bg">
            <p>spawn('npx',['create-react-app','client'],&#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;cwd: path.join(_cwd,&lt;projectName&gt;),</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;stdio:"inherit" </p>
            <p>&#125;);</p>
        </div>
        <p>cwd parameter defines on which path the shell should be spawned. So I basically initialized a react app in 'client' folder inside the <b>main</b> folder.</p>
        <p>7. I had made a folder named 'template' inside my package which had the express files we usually need handy. So this step was quite easy, just copy everything from <b>template</b> to the folder I created.</p>
        <div className="blog-code-bg">
            <p>fs.copy(path.join(__dirname,'template/'), path.join(_cwd,questions.projectName), (err)=>&#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;if(!err)</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('\x1b[32m%s\x1b[0m', "Express App Generated");</p>
            <p>&#125;);</p>
        </div>
        <p style={{borderLeft:'solid 3px #505050',paddingLeft:'5px'}}>
            <b>Note:</b> 
            __dirname is path where the package exists or where the index.js is
            _cwd is path where the terminal instance is opened.
            Also, the first weird string in console.log is to colour the output.
        </p>
        <p>8. Finally, I made a small change in package.json and added the following field,</p>
        <div className="blog-code-bg">
            <p>"bin": &#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;"init-mern": "./index.js"</p>
            <p>&#125;</p>
        </div>
        <p>By adding this field, I can invoke the package directly through the terminal like 'init-mern' and the package should run.</p>
        <p>9. Then I published it,</p>
        <div className="blog-code-bg">
            <p>npm login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//Login with your npm account</p>
            <p>npm publish</p>
        </div>
        <p>Hit "npx init-mern" and the package would run.</p>
        <p>Here's the <a href="https://github.com/Nim1304/mern-npm"><b><u>GitHub</u></b></a> link if you want to refer my code.</p>
        <p style={{textAlign:'center'}}>&bull;&nbsp;&bull;&nbsp;&bull;</p>
        <p>Making NPM packages is quite easy. MERN boilerplate is just one example that I made out of a pool of packages that can be made. You can always make other packages which would make your work easy or which can be used to structure a code.</p>
        <p>Happy Coding fellas!</p>
        <p style={{textAlign:'end'}}>-written by <b>Nimish Shah</b></p>
      </div>
    </div>
  );
};

const mapStateToProps = (state,props) => {
  return {
    placement: state.placements
  };
};

export default connect(mapStateToProps)(Blogs);