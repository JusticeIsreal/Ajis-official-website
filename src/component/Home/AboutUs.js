import React from "react";

import ClientsData from ".//ClientsData";
function AboutUs() {
  let yy =
    "AJIS is a software development and consultancy company that provides cutting edge engineering solutions, helping companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey. We offer reliable software engineering partnership for world-class brands. specialised in design and development of world class web based applications, websites, desktop applications";
  return (
    <>
      <div className="about-me">
        <h3 className="about-me-name">{`< ABOUT US : />`}</h3>
        <div className="about-me-pitch">
          <p>{yy}</p>
        </div>

        {/* client logo slider */}
        <div className="client-logo-container">
          {ClientsData.map((client, index) => (
            <div key={index} className="client-logo">
              <img src={client.url} alt="" />
            </div>
          ))}
        </div>
        {/* end of client logo slide */}
      </div>
    </>
  );
}

export default AboutUs;
