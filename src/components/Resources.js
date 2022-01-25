import React from 'react';
import MatPaperButton from './Materials/MatPaperButton';
import Header from './Header/Header';
import ShareButton from './ShareButton';
import PlacementsHeader from './Placements/PlacementsHeader';
import Footer from './Footer';

const Resources = () => (
  <div>
    {window.scrollTo(0, 0)}
    <Header />
    <MatPaperButton />
    <PlacementsHeader />
    <div className="content-container">
        <div id="columns">
            <figure>
                <div>
                    <div>Resource-1</div>
                    <div>&#x25BA;<a target="_blank" href="https://www.linkedin.com/pulse/how-get-started-competitive-programming-why-do-nipun-aggarwal/">Article- <span style={{color:'#84d0d0',fontSize:'1.6rem'}}>How to get started in Competitive Programming: (and why to do it)</span></a> </div>
                    <div>Resources from the writer-</div>
                    <div>&#x25BA;<a target="_blank" href="https://www.youtube.com/watch?v=V42FBiohc6c&list=PL2_aWCzGMAwI9HK8YPVBjElbLbI3ufctn" style={{color:'#84d0d0'}}>Time and Space</a></div>
                    <div>&#x25BA;Amazing resource: <a href="https://www.hackerearth.com/practice/codemonk/" style={{color:'#84d0d0'}}>Codemonk</a></div>
                    <div>&#x25BA;<a target="_blank" href="https://www.hackerrank.com/domains/tutorials/30-days-of-code"  style={{color:'#84d0d0'}}>HackerRank - 30 days of Coding</a></div>
                    <div>&#x25BA;And of course, <a target="_blank" href="http://codeforces.com"  style={{color:'#84d0d0'}}>Codeforces</a></div>
                    <div>&#x25BA;Recommended book for algorithms: TH Cormen (CLRS)</div>
                    <div>&#x25BA;Recommended Track for Data Structures: Interviewbit.com  and Codesignal.com</div>
                    <div>&#x25BA;Recommended for Interview practice: Pramp.com</div>
                    <div>&#x25BA;For past coding questions/ online rounds: Leetcode.com</div>
                </div>
            </figure>
            <figure>
                <div>
                    <div>Resource-2</div>
                    <div>&#x25BA;<a target="_blank" href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">GeeksForGeeks -<span style={{color:'#84d0d0',fontSize:'1.6rem'}}> Algorithms</span></a></div>
                    <div>&#x25BA;<a target="_blank" href="https://www.geeksforgeeks.org/data-structures/">GeeksForGeeks -<span style={{color:'#84d0d0',fontSize:'1.6rem'}}> Data Structures</span></a></div>
                    <div>&#x25BA;<a target="_blank" href="https://practice.geeksforgeeks.org/home">GeeksForGeeks -<span style={{color:'#84d0d0',fontSize:'1.6rem'}}> Practice</span></a></div>
                </div>
            </figure>
            <figure>
                <div>
                    <div>Resource-3</div>
                    <div>&#x25BA;<a target="_blank" href="https://qr.ae/TWF3ad"  style={{color:'#84d0d0'}}>How should one prepare for a campus placement?</a></div>
                    <div>&#x25BA;<a target="_blank" href="https://www.linkedin.com/pulse/top-20-tips-crack-campus-placement-interview-manas-j-saloi/"  style={{color:'#84d0d0'}}>20 Tips to Crack the Campus Placement Interview</a></div>
                </div>
            </figure>
            <figure>
                <div>
                    <div>Resources for Aptitude</div>
                    <div>&#x25BA;<a target="_blank" href="https://www.indiabix.com/"  style={{color:'#84d0d0'}}>IndiaBix</a></div>
                </div>
            </figure>
            <figure>
                <div>
                    <div>Operating System</div>
                    <div>&#x25BA;<a target="_blank" href="https://www.youtube.com/watch?v=YwqexcfbucE&list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD"  style={{color:'#84d0d0'}}>Knowledge Gate Youtube Playlist</a></div>
                </div>
            </figure>
            <figure>
                <div>
                    <div>DBMS</div>
                    <div>&#x25BA;<a target="_blank" href="https://www.youtube.com/watch?v=fHAfc7Hjq28&list=PLWPirh4EWFpGrpcMfZ6UcdI786QdtSxV8"  style={{color:'#84d0d0'}}>Tutorialspoint Youtube Playlist</a></div>
                </div>
            </figure>
        </div>
    </div>
    <ShareButton />
    <Footer/>
  </div>
);

export default Resources;