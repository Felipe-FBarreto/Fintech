import React from "react";
import { IVendas } from "../Context/DataContext";

export const VendaItem = ({ venda }: { venda: IVendas }) => {
  return (
    <div className="venda box">
      <a href="#" style={{ fontFamily: "monospace" }}>
        {venda.id}
      </a>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};
