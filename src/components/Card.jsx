import React from "react";
function Card({ name, job, about }) {
  return (
    <div id="b" className="inner-card-container">
      <div className="image-container">
        <h2 id="g">{name}</h2>
        <h3 id="f">{job}</h3>
        <p id="e">{about}</p>
      </div>
    </div>
  );
}
export default Card;
