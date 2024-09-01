import React, { useState } from "react";
import { Hero } from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import faqBcg from "../images/faqBcg.jpg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What prayer facilities are available?",
      answer:
        "Our hotel provides dedicated prayer rooms and directions to nearby mosques.",
    },
    {
      question: "Do you offer halal dining options?",
      answer:
        "Yes, we offer a variety of delicious halal meals prepared by our expert chefs.",
    },
    {
      question: "Are there nature tours available?",
      answer:
        "Yes, we have guided hiking tours to explore the beauty of nature.",
    },
    {
      question: "Is there a free shuttle service?",
      answer:
        "We provide complimentary shuttle service to nearby attractions and shopping centers.",
    },
    {
      question: "Is room WiFi available?",
      answer:
        "Yes, high-speed WiFi is available in all rooms and public areas of the hotel.",
    },
    {
      question: "Is car parking available?",
      answer:
        "Yes, we offer secure car parking for all our guests at no additional charge.",
    },
    {
      question: "Do you have separate swimming pools for men and women?",
      answer:
        "Yes, we have separate swimming pools to ensure privacy and comfort for both men and women.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Hero hero="faqHero" backgroundImage={faqBcg}>
        <Banner title="FAQ">
          <Link to="/" className="btn-primary">
            Back Home
          </Link>
        </Banner>
      </Hero>
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => handleClick(index)}>
                <span className="faq-icon">
                  {activeIndex === index ? "▼" : "►"}
                </span>
                {item.question}
              </div>
              <div
                className={`faq-answer ${activeIndex === index ? "show" : ""}`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
