import React from "react";

const Second =()=>{
    return(
        <>
<div className="second-page" id="m">
    <div className="heading">
      <img src="Images/second-title.png" className="second-title" />
      <p>
        Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Vivamus
        lacinia odio vitae vestibulum vestibulum.
      </p>
    </div>
    <div className="three-box inner flex">
      <div className="small-div">
        <img src="Images/pasta-small-1.png" className="img1" id="image1" />
        <h2>lorem ipsum</h2>
        <p>Lorem ipsum, dolor sit amet consectetur</p>
      </div>
      <div className="small-div">
        <img src="Images/pasta-small-2.png" className="img1" id="image2" />
        <h2 id="title-second-small">lorem ipsum</h2>
        <p id="para-second-small">Lorem ipsum, dolor sit amet consectetur</p>
      </div>
      <div className="small-div">
        <img src="Images/pasta-small-3.png" className="img1" id="image3" />
        <h2 id="title-third-small">lorem ipsum</h2>
        <p id="para-third-small">Lorem ipsum, dolor sit amet consectetur</p>
      </div>
    </div>
    <div className="bottom-button-div">
      <button className="bottom-button"><a href="">Show More</a></button>
    </div>
  </div>
        </>
    )
}
export default Second