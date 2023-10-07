import React from 'react';
import "./test.css";

function Test({ primary, secondary }) {
  return (
    <div className="achievement-textContainer">
      <p className="achievement-primary">{primary}</p>
      <p className="achievement-secondary">{secondary}</p>
    </div>
  );
}

export default Test;
