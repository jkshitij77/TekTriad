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
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tektriad/" ><img src="https://img.icons8.com/metro/208/000000/instagram-new.png" alt="insta"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tektriad/"><img src="https://img.icons8.com/android/208/000000/facebook-new.png" alt="fb"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/tektriad/"><img src="https://img.icons8.com/android/208/000000/linkedin.png" alt="linkedin"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tektriad/"><img src="https://img.icons8.com/material-sharp/208/000000/github.png" alt="github"/></a>
                  </div>
                </div>
              </div>

              {/* Section two here */}
              <div className="section two">
                <div class="divforsectionotwo">

                </div>
              </div>
              <div className="section three">
                <div class="divforsectionothree">
                  <div class="lowerthingservices">
                    <div class="servicecard"> 
                      <img src={require('./attachments/webdevlogo.png')} alt="webdev"/> 
                      <h1> Web Development</h1>
                      <p>Sharma ki maa randi hai. Uska poora khaandaan randi hai. Gazab randi hai. Darua madarchodh</p>
                    </div>
                    <div class="servicecard"> 
                      <img src={require('./attachments/designinglogo.png')} alt="design"/> 
                      <h1>Designing</h1>
                      <h1 class="emptyh1"></h1>
                      <p>Sharma ki maa randi hai. Uska poora khaandaan randi hai. Gazab randi hai. Darua madarchodh</p>
                    </div>
                    <div class="servicecard"> 
                      <img src={require('./attachments/webdevlogo.png')} alt="smm"/> 
                      <h1> Social Media Marketing</h1>
                      <p>Sharma ki maa randi hai. Uska poora khaandaan randi hai. Gazab randi hai. Darua madarchodh</p>
                    </div>
                    <div class="servicecard"> 
                      <img src={require('./attachments/seologo.png')} alt="seo"/> 
                      <h1>SEO</h1>
                      <h1 class="emptyh1"></h1>
                      <p>Sharma ki maa randi hai. Uska poora khaandaan randi hai. Gazab randi hai. Darua madarchodh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section four">

              <div class="aboutus-cont">
              <img class="Abt" src={require("./attachments/aboutus.svg")} />
              <p class="aboutustxt"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, accusantium! Lorem ipsum dolor sit amet consectetur consectetur adipisicing.</p>
              </div>

                <div class="BEHEN">
                
                
                  <div class="found">
                    <div class="dabba"><div class="found-ph"><img class="founder" src={require("./attachments/Sharma.jpg")} /></div> 
                    <div class="found-ph">Chand shabd apne baare me </div></div>
                    <div class="dabba"><div class="found-ph"><img class="founder" src={require("./attachments/DP.jpg")} /> </div> <div class="found-ph"> Chand milky boy baare me</div></div>
                    <div class="dabba"><div class="found-ph"><img class="founder" src={require("./attachments/Shuchit.jpg")} /></div> <div class="found-ph">Chand shabd apne baare <br />me</div> </div>

                  </div>
                 
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