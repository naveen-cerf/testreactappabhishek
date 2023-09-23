import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${index === activeItem ? "active" : ""}`}
        >
          <div
            className="accordion-heading"
            onClick={() => handleClick(index)}
          >
            {item.title}
          </div>
          <div className="accordion-content">
            {index === activeItem && <p>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
