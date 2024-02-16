import React from 'react';
import '../assets/css/card.css';

function CardBox({ bgClass, count, icon1, content1, icon2, content2, icon }) {
  return (
    <div className={`col-lg-3 col-sm-6 card-container ${bgClass}`}>
      <div className="card-box">
        <div className="inner">
          <h3>{count}</h3>
          <p className="content">{icon1} {content1}</p>
           <p className="content">{icon2} {content2}</p>
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