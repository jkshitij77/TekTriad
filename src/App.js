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
              {/* Section one here */}
              <div className="section one">
                <div class="divforsectionone">
                  <div class="toprowwiththings">
                    <div class="logoandname">TekTriad <img src={require('./attachments/tektriadlogo.svg')} alt="logo"/></div>
                      <div>
                        <div class="tabs">
                          <a href="#idProjects">Projects</a>
                          <a href="#idServices">Services</a>
                          <a href="#idAboutUs">About us</a>
                      </div>
                    </div>
                  </div>
                  <div class="loremipsumgithub">
                    <p>LOREM IPSUM AND BEYOND</p>
                    <div class="firstpagebutton">Sign Up</div>
                  </div>
                  <div class="logos">
                    <a href="https://www.instagram.com/tektriad/"><img src="https://img.icons8.com/metro/208/000000/instagram-new.png" alt="insta"/></a>
                    <a href=""><img src="https://img.icons8.com/android/208/000000/facebook-new.png" alt="fb"/></a>
                    <a href=""><img src="https://img.icons8.com/android/208/000000/linkedin.png" alt="linkedin"/></a>
                    <a href=""><img src="https://img.icons8.com/material-sharp/208/000000/github.png" alt="github"/></a>
                  </div>
                </div>
              </div>

              {/* Section two here */}
              <div className="section two">
                <div class="divforsectionotwo">

                </div>
              </div>
              <div className="section three">
              </div>
              <div className="section four">
                <div class="BEHEN">
                  <h1>ABOUT US</h1>
                  <img class="trial"src={require('./attachments/tektriadlogo.svg')} alt="alttag"/>
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