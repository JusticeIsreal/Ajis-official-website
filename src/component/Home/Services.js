import React, { useContext } from "react";
import AppContext from "../GlobalContext/AppProvider";
import ServiceData from "./ServiceData";

function Services() {
  const { dynamicGridBtn, selectByCategory, serviceGrid } =
    useContext(AppContext);
  return (
    <div className="services-container">
      <h2 className="services-name">{`< WHAT WE OFFER: />`}</h2>
      <div className="services-inside-container">
        <div className="services-dynamic-btn">
          {dynamicGridBtn.map((item, id) => (
            <button
              key={id}
              type="button"
              onClick={() => selectByCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="services-grid-con">
          {serviceGrid.map((services) => (
           <div className="services-grid"><ServicesGrid key={services.id} {...services} /></div> 
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesGrid({ service, statement }) {
  // const { addWatchList } = useContext(AppContext);

  return (
    <>
      <h4>{service}</h4>
      <p>{statement}</p>
    </>
  );
}

export default Services;
