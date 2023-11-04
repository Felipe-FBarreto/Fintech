import React, { useState } from "react";
import { DateRange } from "./DateRange";
import { Meses } from "./Meses";

export const Header = () => {
  const [title, setTitle] = useState("Resumo");
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
