import React from 'react';
import { Empty } from './Components/Empty';
import { Products } from './Components/Products';

const products: number = 12;

function App() {
  return (
    //Fragment è un elemento non renderizzato dal browser che usiamo
    // per creare un wrap necessario a React (che vuole sempre un nodo padre).
    //Si può usare anche "<> </>" (tag vuoti).
    <React.Fragment> 
      <Empty />
      <Products value={products}/>
    </React.Fragment>
  );
}

export default App;
