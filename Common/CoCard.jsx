import React from 'react'
import "./Cocard.css"
const commonCard = (props) => {
  return (
      <div className="service-card">
      <div className="service-detail-card">
        <div className="service-detail-card-left">{props.title}</div>
        <div className="service-detail-card-right">
          <p className="service-detail-card-text">{props.content}</p>
          <button className="service-button">
            <span className="service-button-text">Become a Client</span>
            <span className="service-button-icon"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default commonCard