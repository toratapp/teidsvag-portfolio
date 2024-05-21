import WebsitesIntro from "./WebsitesIntro";
import bidAndBuyPreview from "../../assets/bid-and-buy-website-preview.jpg";
import { bidAndBuyDescription } from "../../assets/cardDescriptions";
import { bidAndBuyDeployedURL, bidAndBuyRepoURL } from "../../assets/cardURLs";
import Card from "./Card";

function WebsitesSection() {
  return (
    <section>
      <WebsitesIntro />
      <div className="m-6">
        <Card title="Bid and buy" image={bidAndBuyPreview} description={bidAndBuyDescription} deployedURL={bidAndBuyDeployedURL} repoURL={bidAndBuyRepoURL} />
      </div>
    </section>
  );
}

export default WebsitesSection;