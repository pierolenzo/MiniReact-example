import Axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import { AnimatedHamburger, Item } from "./Components/AnimatedHamburger";
import { CatalogPage } from "./pages/CatalogPage";
import { ContactsPage } from "./pages/ContactsPage";
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
    window.location.href = url;
  };

  return (
    <div>
      <AnimatedHamburger 
        items={items} 
        onIconClick={goTo}
      />
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/contact" element={<ContactsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
