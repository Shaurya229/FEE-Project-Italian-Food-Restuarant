import React from "react";

const First =()=>{
    return(
        <>
            <>
  <div className="first-page">
    <div className="nav flex">
      <div className="navbar-div" id="menus">
        <ul className="flex">
  <li><a href="#">HOME</a></li>
  <li><a href="#m">MENU</a></li>
  <li><a href="#o">OUR STORY</a></li>
  <li><a href="#c">CONTACT</a></li>

          <div>
            <input type="text" className="nav-btn" />
            <img src="Images/magnifying_glass.png" className="search-icon" />
          </div>
        </ul>
      </div>
      <span className="toggle-btn">
        ☰
      </span>
    </div>
    <div className="banner inner flex">
      <div className="left">
        <img src="Images/logo.png" className="logo" />
        <img src="Images/Title.png" className="title" />
        <h2>Loremipsum dolor</h2>
        <button className="btn"><a href="" style={{color:"black"}}>Read More</a>  </button>
        <p className="first-page-para">
          Lorem ipsum dolor sit amet, consectetur adipi- sicing elit, sed do
          iusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>
      <div className="right">
        <img src="Images/pasta.png" className="big" />
        <img src="Images/dip.png" className="small" />
        <img src="Images/leaves.png" className="leaf" />
      </div>
    </div>
  </div>
  
  
  
 
  
  
 
</>

        </>
    )
}
export default First