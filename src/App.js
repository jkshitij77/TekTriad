import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';

function App() {
  return (
    <div class="body">
       <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000} /* Options here */

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section one">
                <div class="divforsectionone">
                  <div class="toprowwiththings">
                    <div class="logoandname">TekTriad <img src={require('./attachments/tektriadlogo.svg')}/></div>
                      <div>
                        <div class="tabs">
                          <a href="#">Projects</a>
                          <a href="#">Services</a>
                          <a href="#">About us</a>
                      </div>
                    </div>
                  </div>
                  <div class="loremipsumgithub">
                    <p>LOREM IPSUM AND BEYOND</p>
                    <div class="firstpagebutton">Sign Up</div>
                  </div>
                  <div class="logos">
                    <a><img></img></a>
                  </div>
                </div>
              </div>
              <div className="section two">
                <p>Section 2</p>
              </div>
              <div className="section three">
              </div>
              <div className="section four">
                <div class="BEHEN">
                  <h1>ABOUT US</h1>
                  <img class="trial"src={require('./attachments/tektriadlogo.svg')}/>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
{/* <button onClick={() => fullpageApi.moveSectionDown()}>
Click me to move down
</button> */}