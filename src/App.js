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
                <h1>ABOUT US</h1>
                <img class="trial"src={require('./attachments/tektriadlogo.svg')}/>
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