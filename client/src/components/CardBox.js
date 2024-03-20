import React from 'react';
import '../assets/css/card.css';

function CardBox({ bgClass, title, count, icon1, content1, icon2, content2, icon }) {
  return (
    <div className={`col-lg-3 col-sm-6 card-container ${bgClass}`}>
      <div className="card-box">
        <div className="inner">
          
          <p className="content">{count}</p>
          <h3>{title}</h3>
        </div>
        <div className="icon">

{icon}
        </div>
        <a href="#" className="card-box-footer">
          View More <i className="fa fa-arrow-circle-right"></i>
        </a>
      </div>
    </div>
  );
}

export default CardBox;