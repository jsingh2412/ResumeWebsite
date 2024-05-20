import React from "react";
import SocialMediaCard from "./socialmediacard";
import ContactMe from "./contactme";

function Footer() {
  return (
    <div className="bg-night">
        <ContactMe />
        <SocialMediaCard />
    </div>
  );
}
  
export default Footer;