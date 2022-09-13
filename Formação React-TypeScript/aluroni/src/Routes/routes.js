import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Menu } from "components/Menu";
import { PaginaPadrao } from "components/PaginaPadrao";
import { Footer } from "components/Footer";

import { Inicio } from "pages/Inicio";
import { Cardapio } from "pages/Cardapio";
import { Sobre } from "pages/Sobre";
import { NotFound } from "pages/NotFound";
import { Prato } from "pages/Prato";

export const AppRouter = () => {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="cardapio" element={<Cardapio />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="prato/:id" element={<Prato />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};
