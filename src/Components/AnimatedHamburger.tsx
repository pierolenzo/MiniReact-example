import React, { useState } from "react";
import cn from "classnames";

export interface Item {
  icon: string;
  url: string;
}

interface AnimatedHamburgerProps {
  items: Item[];
  onIconClick: (url: string) => void;
}

export const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = (props) => {
  const [opened, setOpened] = useState<boolean>(false);

  const IconClickHandler = (url: string): void => {
    console.log(url);
    props.onIconClick(url);
  };

  return (
    <div>
      <nav className="menu">
        <div className={cn("menu-open", { opened: opened })} />
        <label className="menu-open-button" onClick={() => setOpened(!opened)}>
          <span className="hamburger hamburger-1"></span>
          <span className="hamburger hamburger-2"></span>
          <span className="hamburger hamburger-3"></span>
        </label>

        {/* key={item.icon} necessario per motivi performance, sarebbe meglio avere un id univoco*/}
        {props.items.map((item) => {
          return (
            <div className="menu-item" key={item.icon} onClick={() => IconClickHandler(item.url)}>
              <i className={item.icon}></i>
            </div>
          );
        })}
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
};
