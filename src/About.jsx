import React from "react";
import UndrawStartupLife from "react-undraw-illustrations/lib/components/UndrawStartupLife/UndrawStartupLife";
const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable three column grid">
        <div class="column">
          <UndrawStartupLife primaryColor='#12283a' height='400px' />
        </div>
        <div class="column">
          <h1 id='about-header' className="ui header">About Me</h1>
          <p>
            Hello, My name is Anish Kanswal.I am learning to code with Craft academy.
          </p>
          <div id="anish">
          <img src="https://thumbs.dreamstime.com/b/close-up-laptop-computer-tablet-office-desk-cyber-security-data-protection-business-technology-privacy-concept-close-up-142401674.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;