import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { AnimatedHamburger, Item } from "./Components/AnimatedHamburger";
import { HomePage } from "./pages/HomePage";

function App() {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    Axios.get<Item[]>('http://localhost:3001/config')
    .then(res => {
      setItems(res.data)
    })
  }, [])
  
  console.log('render', items)

  const goTo = (url: string): void => {
    window.open(url);
  };

  return (
    <div>
      <HomePage />
      <AnimatedHamburger 
        items={items} 
        onIconClick={goTo}
      />
    </div>
  );
}

export default App;
