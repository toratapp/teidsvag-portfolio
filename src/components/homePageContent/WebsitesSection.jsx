import WebsitesIntro from "./WebsitesIntro";
import bidAndBuyPreview from "../../assets/bid-and-buy-website-preview.jpg";
import luminatePreview from "../../assets/luminate-preview.jpg";
import gigglesPreview from "../../assets/giggles-preview.jpg";
import { bidAndBuyDescription, gigglesDescription, luminateDescription } from "../../assets/cardDescriptions";
import { bidAndBuyDeployedURL, bidAndBuyRepoURL, gigglesDeployedURL, gigglesRepoURL, luminateDeployedURL, luminateRepoURL } from "../../assets/cardURLs";
import Card from "./Card";

function WebsitesSection() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <section className="mt-20 mx-6">
        <WebsitesIntro />
        <div className="my-6 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Bid and buy" image={bidAndBuyPreview} description={bidAndBuyDescription} deployedURL={bidAndBuyDeployedURL} repoURL={bidAndBuyRepoURL} />
          <Card title="Luminate webshop" image={luminatePreview} description={luminateDescription} deployedURL={luminateDeployedURL} repoURL={luminateRepoURL} />
          <Card title="Giggles" image={gigglesPreview} description={gigglesDescription} deployedURL={gigglesDeployedURL} repoURL={gigglesRepoURL} />
        </div>
      </section>
    </div>
  );
}

export default WebsitesSection;
