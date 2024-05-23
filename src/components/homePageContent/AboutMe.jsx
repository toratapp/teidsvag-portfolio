import ContactEmailLinkedIn from "./ContactEmailLinkedIn";
import Interests from "./Interests";
import Skills from "./Skills";
import ToraImageAndText from "./ToraImageAndText";


function AboutMe() {
  return ( 
    <section className="about-me-section grid max-w-screen-xl mx-auto">
      <h2 className="about-me-h1 mt-8 ml-6 mr-6">About Me</h2>
      <ToraImageAndText />
      <Skills />
      <Interests />
      <ContactEmailLinkedIn />
    </section>
   );
}

export default AboutMe;
