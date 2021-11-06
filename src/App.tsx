import cn from "classnames";
import React, { useState } from "react";

import "./App.css";

function App() {
  
  const [opened, setOpened] = useState<boolean>(false)
  
  const toggle = () => {
    setOpened(!opened)
  }

  //Attenzione a quante volte viene renderizzato il componente
  console.log('render', opened);

  //const cls = opened ? 'menu-open opened' : 'menu-open';
  //const cls = cn('menu-open', {'opened': opened})

  return (
  <div>
    <nav className="menu">
      <div className={cn('menu-open', {'opened': opened})}/>
      <label className="menu-open-button" onClick={toggle}>
        <span className="hamburger hamburger-1"></span>
        <span className="hamburger hamburger-2"></span>
        <span className="hamburger hamburger-3"></span>
      </label>
      
      <div className="menu-item"> <i className="fa fa-bar-chart"></i> </div>
      <div className="menu-item"> <i className="fa fa-plus"></i> </div>
      <div className="menu-item"> <i className="fa fa-heart"></i> </div>
      <div className="menu-item"> <i className="fa fa-envelope"></i> </div>
      <div className="menu-item"> <i className="fa fa-cog"></i> </div>
      <div className="menu-item"> <i className="fa fa-ellipsis-h"></i> </div>
      
    </nav>

    {/* <!-- filters --> */}
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="shadowed-goo">

              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
              <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
              <feOffset in="shadow" dx="1" dy="1" result="shadow" />
              <feComposite in2="shadow" in="goo" result="goo" />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
    </svg>
  </div>
  );
}

export default App;
