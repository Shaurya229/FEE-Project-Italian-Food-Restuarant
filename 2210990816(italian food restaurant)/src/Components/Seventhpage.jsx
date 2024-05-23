import React from "react";

const Seventh =()=>{
    return(
        <>
<div className="seventh-page">
    <div>
      <img src="Images/page-7-right-leaf.png" className="page-7-right-leaf" />
    </div>
    <div>
      <div className="blank-space" />
      <p className="seventh-title">Title Here</p>
      <p className="seventh-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum
      </p>
      <input
        type="text"
        className="text-box-seventh"
        placeholder="Your Email"
      />
      <button className="seventh-button"><a href="">SUBSCRIBE</a></button>
    </div>
    <div>
      <img src="Images/page-7-left-leaf.png" className="page-7-left-leaf" />
    </div>
  </div>
        </>
    )
}
export default Seventh