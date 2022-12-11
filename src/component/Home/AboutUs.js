import React from "react";

import ClientsData from ".//ClientsData";
function AboutUs() {
  let yy =
    "AJIS is a software development and consultancy company that provides cutting edge engineering solutions, helping companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey. We offer reliable software engineering partnership for world-class brands. specialised in design and development of world class web based applications, websites, desktop applications";
  return (
    <>
      <div className="about-me">
        <h2 className="about-me-name">{`< ABOUT US : />`}</h2>
        <div className="about-me-pitch">
          <p>{yy}</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
