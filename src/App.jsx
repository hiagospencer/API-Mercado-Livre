
import {  HashRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import AppProvider from './Contexts/AppProvider'


function App() {


  return (
    < HashRouter>
      < AppProvider>
        <AppRoutes />
      </AppProvider>
    </HashRouter>
  )
}

export default App
