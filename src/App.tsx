import React from "react";

import "./App.css";
import { AnimatedHamburger } from "./Components/AnimatedHamburger";

const items = [
  { icon: "fa fa-google", url: "https://www.google.com" },
  { icon: "fa fa-windows", url: "https://www.microsoft.com" },
  { icon: "fa fa-facebook", url: "https://www.facebook.com" },
  { icon: "fa fa-linkedin", url: "https://www.linkedin.com" },
  { icon: "fa fa-instagram", url: "https://www.instagram.com" },
  { icon: "fa fa-youtube", url: "https://www.youtube.com" },
];

function App() {
  

  const goTo = (url: string): void => {
    window.open(url);
    //setOpened(false);
  };

  return (
    <div>
      <AnimatedHamburger 
        items={items} 
        onIconClick={goTo}
      />
    </div>
  );
}

export default App;
