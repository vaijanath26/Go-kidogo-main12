import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Partner.css";
import "./styles.css";
import Records from "./records.json"; // Replace with your actual JSON file

export default function PartnerPage() {
  const [activeService, setActiveService] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filteredPartners =
    activeService === "All"
      ? Records
      : Records.filter((p) => p.services.includes(activeService));

  return (
    <>
      {/* Header Section */}
      <div className="abc">
        <div className="overlay"></div>
        <h1>
          {filteredPartners.length} Partner
          {filteredPartners.length !== 1 && "s"}
        </h1>
      </div>

      {/* Wave animation background */}
      <div className="wave-container1">
        <div className="wave-element wave-1"></div>
        <div className="wave-element wave-2"></div>
        <div className="wave-element wave-3"></div>
      </div>

      <div className="partner-section">
        <div className="service-filters">
          {["All", "Delivery", "Takeaway"].map((option) => (
            <label
              key={option}
              className={`filter-btn ${activeService === option ? "active" : ""}`}
            >
              <input
                type="radio"
                name="service"
                value={option}
                checked={activeService === option}
                onChange={() => setActiveService(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Partner Promo Banner */}
      <div className="promo-banner">
        <span>
          Select from 1000+ healthy menu items and have it ordered in our zero-waste boxes.
        </span>
        <span className="promo-icon">🚴‍♂️</span>
      </div>

      {/* Partner Cards */}
      <div className="card-list">
        {filteredPartners.map((partner, index) => (
          <Link to={`/partner/${partner.id}`} key={index} className="partner-card-link">
            <div className="partner-card">
              <div className="partner-image">
                <img src={partner.image} alt={partner.name} className="image" />
                <div className="tag">{partner.cuisine}</div>
              </div>
              <div className="partner-details">
                {/* Removed the open button */}
                <div className="name">{partner.name}</div>
                <div className="address">{partner.address}</div>
              </div>
              <div className="service-options">
                <div><i className="fas fa-shopping-bag"></i>🚴‍♂️ Takeaway</div>
                <div><i className="fas fa-biking"></i>🛍️ Delivery</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
