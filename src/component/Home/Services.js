import React from "react";
import ServiceData from "./ServiceData";

function Services() {
  return (
    <>
      <div>
        <h3 className="about-me-name">{`< WHAT WE OFFER: />`}</h3>
        <div>
          {ServiceData.map((item) => (
            <div key={item.id} style={{ color: "white" }}>
              <div>{item.service}</div>
              {/* <div>{item.statement}</div> */}
              {item.subservice.map((list) => (
                <div>{list.subService7 || ""}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
