import React, { useEffect, useState } from "react";
import { DateRange } from "./DateRange";
import { Meses } from "./Meses";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [title, setTitle] = useState("Resumo");
  const { pathname } = useLocation();

  function getPathName(pathname: string) {
    let path = "";
    switch (pathname) {
      case "/":
        return (path = "Resumo");
      case "/vendas":
        return (path = "Vendas");
      default:
        return (path = "Venda");
    }
    return path;
  }

  useEffect(() => {
    setTitle(getPathName(pathname));
    document.title = `Fintech | ${title}`;
  }, [[pathname]]);
  return (
    <div className="mb">
      <div className="dateRange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </div>
  );
};
