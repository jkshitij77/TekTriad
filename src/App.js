import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';

function App() {
  return (
    <div class="body">
      {/* <button onClick={() => fullpageApi.moveSectionDown()}>
        Click me to move down
        </button> */}
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
                          <a href="#" onClick={() => fullpageApi.moveSectionDown()}>Projects</a>
                          <a href="#" onClick={() => {fullpageApi.moveSectionDown(); fullpageApi.moveSectionDown()} }>Services</a>
                          <a href="#" onClick={() => {fullpageApi.moveSectionDown(); fullpageApi.moveSectionDown(); fullpageApi.moveSectionDown()}}>About us</a>
                      </div>
                    </div>
                  </div>
                  <div class="loremipsumgithub">
                    <p>LOREM IPSUM AND BEYOND</p>
                    <div class="firstpagebutton"> <a href="mailto:tektriad@gmail.com">Reach us </a></div>
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
              <div className="section two" id="idProjects">
              
                <div class="divforsectionotwo" >
                  
                  <div class="top-part-s2">
                    <div class="s2-logo-name">Live Projects <img src={require('./attachments/tektriadlogo.svg')} alt="logo"/></div>
                  </div>
                  <div class="proj-container">
                    <div class="proj-container-left">
                      <div class="proj-container-left-box"><a target="_blank" rel="noopener noreferrer" href="https://dalicalendar-936c1.web.app/"><img src={require("./attachments/web1.jpg")} alt="project"/></a>
                      <p class="proj-txt">Planner web-app with<br/>a signup interface</p>
                      </div>
                      
                      
                      <div class="proj-container-left-box">
                      <a target="_blank" rel="noopener noreferrer" href="http://kshitijjain.me/">
                      <img src={require("./attachments/web2.jpg")} alt="project"/></a>
                      <p class="proj-txt">A portfolio website<br/> </p>

                      </div>
                      
                      
                    </div>
                    <div class="proj-container-right">
                    
                      <div class="proj-container-right-box">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/shuchitpant/ARONE">   <img src={require("./attachments/web91.jpg")} alt="project"/> </a>
                      <p class="proj-txt">An AR Android App <br/></p>

                      </div>
                      
                      <div class="proj-container-right-box">
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/jkshitij77/BrainTrainer">    <img src={require("./attachments/web4.jpeg")} alt="project"/> </a>
                      <p class="proj-txt">Lorem ipsum dolor <br/> sit amet.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="section three" id="idServices">
                <div class="divforsectionothree">
                  <div class="services">
                    <img src={require('./attachments/Services-01.svg')} alt="project"/>
                  </div>
                  
                  <div class="lowerthingservices">
                  
                    <div class="servicecard"> 
                      <img src={require('./attachments/webdevlogo.png')} alt="webdev"/> 
                      <h1> Web Development</h1>
                      <p>Using the latest frameworks like React and Angular, we provide full stack web development services handling everything from user interface to databases</p>
                    </div>
                    <div class="servicecard"> 
                      <img src={require('./attachments/designinglogo.png')} alt="design"/> 
                      <h1>Designing</h1>
                      <h1 class="emptyh1"></h1>
                      <p>Our team of designers is there for your every need, be it designing an online post, vector images or full fledged websites </p>
                    </div>
                    <div class="servicecard"> 
                      <img src={require('./attachments/webdevlogo.png')} alt="smm"/> 
                      <h1> Social Media Marketing</h1>
                      <p>We also provide social media marketing where we launch and handle instagram, facebook and any other page your comapny may need</p>
                    </div>
                    <div class="servicecard"> 
                      <img src={require('./attachments/seologo.png')} alt="seo"/> 
                      <h1>SEO</h1>
                      <h1 class="emptyh1"></h1>
                      <p>Everyone likes to be on the top, and we help you reach there. With our SEO services, your website can get 95% more traffic from google searches</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section four" id="idAboutUs">

              <div class="aboutus-cont">
              <img class="Abt" viewBox="-100 -100 100 100" src={require("./attachments/aboutus.svg")} alt="aboutus"/>
              <p class="aboutustxt"> We are a Dartmouth based startup seeking to make current small and medium scale enterprises bridge the gap in an increasingly web-centred society. We hope to make local businesses step into the digital age by providing professional and affordable websites to everyone. Meet the founders below</p>
              </div>

                <div class="BEHEN">
                
                
                  <div class="found">
                    <div class="dabba"><div class="found-ph"> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vaibhav-sharma-340206195/"><img class="founder" src={require("./attachments/Sharma.jpg")} alt="sharma"/></a> </div> 
                    <div class="found-ph">Vaibhav is a second year student at Jaypee University, Shimla pursuing a Btech in CS and has a keen interest in marketing and web design rivalled only by his talent for Search Engine Optimization </div></div>
                    <div class="dabba"><div class="found-ph"> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kshitij-jain-1a57b5165/"><img class="founder" src={require("./attachments/DP.jpg")} alt="kshitij"/></a> </div> 
                    <div class="found-ph"> Kshitij, a rising Sophomore at Dartmouth College, USA is studying Business, CS and mathematics. A passionate web developer and philanthropic businessman,he is striving to make India go digital with this venture</div></div>
                    <div class="dabba"><div class="found-ph"> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shuchit-pant-948a0b190/"><img class="founder" src={require("./attachments/Shuchit.jpg")} alt="pant"/></a></div> 
                    <div class="found-ph">Shuchit is doing a Btech in Computer Science at Manipal University. He is an avid Web Developer with an innate knack for React, gaming and everything in the spectrum of tech</div> </div>

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