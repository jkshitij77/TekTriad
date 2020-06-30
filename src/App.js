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
                <p>Section 1 (welcome to fullpage.js)</p>
              </div>
              <div className="section two">
                <p>Section 2</p>
              </div>
              <div className="section three">
                
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