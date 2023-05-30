import { Route, Routes } from "react-router-dom";

import Carrinho from './Pages/Carrinho'
import Main from './Pages/main'

export function AppRoutes() {
    return (
      <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      </>
    );
  }
