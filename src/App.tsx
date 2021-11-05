import React from "react";
import { Empty } from "./Components/Empty";
import { Products } from "./Components/Products";
import "./App.css";

function App() {
  const products: number = 12;
  const gender: string = "M";
  const wrpperClass: string = gender === "M" ? "centered male" : "centered female";
  const styles: React.CSSProperties = gender === 'M' ? { color: 'white', padding: 10 } : { padding: 20 };

  return (
    //Fragment è un elemento non renderizzato dal browser che usiamo
    // per creare un wrap necessario a React (che vuole sempre un nodo padre).
    //Si può usare anche "<> </>" (tag vuoti).
    <React.Fragment>
      {/* style deve contenere un oggetto { color: "black"} */}
      <div className={wrpperClass} style={{ color: "black" }}>

        <div style={styles}>You are {gender === "M" ? "male" : "female"} </div>

        <Empty />

        <button className="btn btn-primary">
          <i className="fa fa-times"></i>
        </button>

        <Products value={products} />

      </div>
    </React.Fragment>
  );
}

export default App;
