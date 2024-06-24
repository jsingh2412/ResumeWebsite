import React from "react";
import SocialMediaCards from "./socialmediacards";
import ContactMe from "./contactme";

function Footer() {
  return (
    <div className="bg-night">
      <ContactMe />
      <SocialMediaCards />
    </div>
  );
}

export default Footer;
