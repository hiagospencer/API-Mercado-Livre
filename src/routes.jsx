import { Route, Routes } from "react-router-dom";

import Carrinho from './Pages/Carrinho'
import Main from './Pages/main'

export function AppRoutes() {
    return (
      <>
      <Routes>
        <Route path="/API-Mercado-Livre" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/API-Mercado-Livre/carrinho/index.html" element={<Carrinho />} />
      </Routes>
      </>
    );
  }
