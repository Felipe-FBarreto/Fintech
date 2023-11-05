import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Componets/Header";
import { Sidenav } from "./Componets/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import { Resumo } from "./Pages/Resumo";
import { Vendas } from "./Pages/Vendas";
import { Venda } from "./Pages/Venda";
import "./Style.css";

export const App = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/venda/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
};
