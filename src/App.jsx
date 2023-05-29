import { useState } from 'react';

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import ValueContext from './Contexts/ValueContext';

import Products from './Components/Products';
import Header from './Pages/Header';


function App() {

  const [ value, setValue ] = useState();

  return (
    < BrowserRouter>
      <AppRoutes />
      < ValueContext.Provider value={{value, setValue}}>
          < Header />
          < Products />
      </ValueContext.Provider>
    </BrowserRouter>
  )
}

export default App
