import { Route, Routes } from "react-router-dom";

import Carrinho from './Pages/Carrinho'

export function AppRoutes() {
    return (
      <>
      <Routes>
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      </>
    );
  }
