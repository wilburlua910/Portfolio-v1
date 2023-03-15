import React from "react";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <>
      <div className="nav">
        <ul className="nav-headers">
          <li>1. About</li>
          <li>2. Experience</li>
          <li>3. Work</li>
          <li>4. Contact</li>
          <li>5. Tech Blogs</li>
          <li>
            <button className="nav-resume-btn">Resume</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavigationBar;
