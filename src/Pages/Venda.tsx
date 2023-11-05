import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { IVendas } from "../Context/DataContext";
import { Loading } from "../Componets/Loading";

export const Venda = () => {
  const { id } = useParams();
  const venda = id?.replace(":", "");
  const { data, loading } = useFetch<Omit<IVendas, "data">>(
    `https://data.origamid.dev/vendas/${venda}`,
  );

  if (loading === true) return <Loading />;
  if (data === null) return null;
  return (
    <section>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </section>
  );
};
