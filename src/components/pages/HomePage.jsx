import AboutMe from "../homePageContent/AboutMe";
import WebsitesSection from "../homePageContent/WebsitesSection";
import Welcome from "../homePageContent/Welcome";

function HomePage() {
  return ( 
    <div className="mt-28 min-h-screen">
      <Welcome />
      <AboutMe />
      <WebsitesSection />
    </div>
  );
}

export default HomePage;
