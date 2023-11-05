import React from "react";
import { IVendas } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

export const VendaItem = ({ venda }: { venda: IVendas }) => {
  return (
    <div className="venda box">
      <NavLink to={`/venda/:${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
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
