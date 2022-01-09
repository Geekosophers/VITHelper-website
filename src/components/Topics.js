import React from 'react';
import MatPaperButton from './Materials/MatPaperButton';
import Header from './Header/Header';
import ShareButton from './ShareButton';
import PlacementsHeader from './Placements/PlacementsHeader';

const Topics = () => (
  <div>
    {window.scrollTo(0, 0)}
    <Header />
    <MatPaperButton />
    <PlacementsHeader />
    <div className="content-container">
    <div id="columns">
      <figure>
        <div>
                <div><b>DBMS-</b></div>
                <div>
                    <div>Keys - Super, Primary, Candidate, Foreign, etc</div>
                    <div>Normalization</div>
                    <div>ACID Properties</div>    
                    <div>JOIN Operations</div>
                    <div>SQL queries</div>
                </div>
            </div>
      </figure>
      <figure>
        <div>
                <div><b>Operating Systems-</b></div>
                <div>
                    <div>CPU Scheduling - FCFS, Convoy effect, SJF, Round Robin</div>
                    <div>Deadlocks</div>
                    <div>Mutual Exclusion</div>
                    <div>4 necessary conditions for a Deadlock</div>
                    <div>Race Condition</div>
                    <div>Semaphores</div>
                    <div>Memory Management</div>
                    <div>Paging</div>
                    <div>Disk Scheduling</div>
                </div>
            </div>
      </figure>
      <figure>
        <div>
                <div><b>Sorting Algorithms-</b></div>
                <div>
                    <div>Selection Sort</div>
                    <div>Bubble Sort</div>
                    <div>Insertion Sort</div>
                    <div>Merge Sort</div>
                    <div>Heap Sort</div>
                    <div>QuickSort</div>
                </div>
            </div>
      </figure>
      <figure>
        <div>
            <div><b>Searching Algorithms-</b></div>
            <div>
                <div>Linear Search</div>
                <div>Binary Search</div>
            </div>
        </div>
      </figure>
      <figure>
        <div>
            <div><b>Data Structures-</b></div>
            <div>
                <div>Array</div>
                <div>Linked List</div>
                <div>Stack</div>
                <div>Queue</div>
                <div>Tree</div>
                <div>HashMap</div>
                <div>Heap</div>
                <div>Graphs</div>
                <div>Trie(Application)</div>
            </div>
        </div>
      </figure>
      <figure>
        <div>
            <div><b>Imp</b> Dynamic Programming is very important concept. One Programming question is asked by almost all the companies.</div>
            <div>
                <i>Quora- </i>
                <a href="https://qr.ae/TWHTGF"><span style={{color:'#84d0d0',fontSize:'1.6rem'}}>How important is dynamic programming for programming interviews?</span></a>
            </div>    
        </div>  
      </figure>
    </div>
    </div>
    <ShareButton />
  </div>
);

export default Topics;