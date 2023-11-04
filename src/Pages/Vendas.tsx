import React from "react";
import { useData } from "../Context/DataContext";
import { VendaItem } from "../Componets/VendaItem";

export const Vendas = () => {
  const { data } = useData();
  if (data === null) return null;

  return (
    <ul>
      {data.map((i) => (
        <li key={i.id}>
          <VendaItem venda={i} />
        </li>
      ))}
    </ul>
  );
};
