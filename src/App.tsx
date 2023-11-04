import { Header } from "./Componets/Header";
import { Sidenav } from "./Componets/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import { Resumo } from "./Pages/Resumo";
import { Vendas } from "./Pages/Vendas";
import "./Style.css";

export const App = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
          <Vendas />
        </main>
      </div>
    </DataContextProvider>
  );
};
