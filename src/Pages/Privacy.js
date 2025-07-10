import React, { useState } from "react";
import { Hero } from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import privacyBcg from "../images/privacyBcg.jpg";

const Privacy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Introduction",
      content:
        "Our privacy policy explains how we collect, use, and protect your information when you use our services at Colina Hotel.",
    },
    {
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as your name, email address, and payment information. We also collect information automatically, such as your IP address and browsing behavior.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use your information to provide and improve our services, communicate with you, and personalize your experience. We may also use your information for security purposes and to comply with legal obligations.",
    },
    {
      title: "Sharing Your Information",
      content:
        "We may share your information with third parties to help us provide our services, comply with legal obligations, or protect our rights. We do not sell your personal information to third parties.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, correct, or delete your personal information. You can also object to or restrict our use of your information and request that we transfer your information to another service provider.",
    },
    {
      title: "Security",
      content:
        "We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may update our privacy policy from time to time. We will notify you of any changes by posting the new policy on our website and updating the effective date at the top of the policy.",
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions or concerns about our privacy policy or practices, please contact us at privacy@colinahotel.com.",
    },
  ];

  const handleClick = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };
  return (
    <>
      <Hero hero="privacyHero" backgroundImage={privacyBcg}>
        <Banner title="Privacy & Policy">
          <Link to="/" className="btn-primary">
            Back Home
          </Link>
        </Banner>
      </Hero>
      <div className="privacy-policy-sections">
        {sections.map((section, index) => (
          <div key={index} className="privacy-policy-section">
            <div
              className="privacy-policy-header"
              onClick={() => handleClick(index)}
            >
              <span className="privacy-policy-icon">
                {activeSection === index ? "▼" : "►"}
              </span>
              {section.title}
            </div>
            <div
              className={`privacy-policy-content ${
                activeSection === index ? "show" : ""
              }`}
            >
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Privacy;
