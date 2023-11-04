import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import useFetch from "../Hooks/useFetch";

type IDataContext = {
  data: IVendas[] | null;
  loading: boolean;
  error: string | null;
  start: string;
  setStart: React.Dispatch<React.SetStateAction<string>>;
  final: string;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

export type IVendas = {
  id: string;
  nome: string;
  preco: number;
  status: "processando" | "pago" | "falha";
  pagemento: "boleto" | "pix" | "cartão";
  parcelas: number | null;
  data: string;
};

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [start, setStart] = useState(getDate(30));
  const [final, setFinal] = useState(getDate(0));

  const { data, loading, error } = useFetch<IVendas[]>(
    `https://data.origamid.dev/vendas/?inicio=${start}&final=${final}`,
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, start, setStart, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
