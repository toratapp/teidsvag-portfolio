import ContactEmailLinkedIn from "./ContactEmailLinkedIn";
import SkillsAndInterests from "./SkillsAndInterests";
import ToraImageAndText from "./ToraImageAndText";


function AboutMe() {
  return ( 
    <section className="about-me-section ml-6 mr-6">
      <h2 className="mt-8">About Me</h2>
      <ToraImageAndText />
      <SkillsAndInterests />
      <ContactEmailLinkedIn />
    </section>
   );
}

export default AboutMe;