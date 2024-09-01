import React, { Component } from "react";
import Title from "./Title";
import { FaLeaf, FaMountain, FaShuttleVan, FaWifi } from "react-icons/fa";

export default class Service extends Component {
  state = {
    services: [
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle (20KM Radius)",
        info: "Enjoy complimentary shuttle service within a 20KM radius, making your travel convenient and hassle-free.",
      },
      {
        icon: <FaWifi />,
        title: "High-Speed Internet",
        info: "Stay connected with our high-speed internet available throughout the hotel premises.",
      },
      {
        icon: <FaLeaf />,
        title: "Clean Environment",
        info: "Experience our commitment to cleanliness with our environmentally friendly and hygienic spaces.",
      },
      {
        icon: <FaMountain />,
        title: "Nature Tours",
        info: "Discover breathtaking landscapes with our guided nature tours, perfect for outdoor enthusiasts.",
      },
    ],
  };

  render() {
    return (
      <div className="services">
        <Title title="Our Services" />
        <div className="services-center">
          {this.state.services.map((eachService, index) => {
            return (
              <article className="service" key={index}>
                <span>{eachService.icon}</span>
                <h6>{eachService.title}</h6>
                <p>{eachService.info}</p>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}
