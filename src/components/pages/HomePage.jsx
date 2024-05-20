import AboutMe from "../homePageContent/AboutMe";
import Welcome from "../homePageContent/Welcome";

function HomePage() {
  return ( 
    <div className="mt-28 min-h-screen">
      <Welcome />
      <AboutMe />
    </div>
  );
}

export default HomePage;
