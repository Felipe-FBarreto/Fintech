import React, { useState } from "react";
import { DateInput } from "./DateInput";
import { useData } from "../Context/DataContext";

export const DateRange = () => {
  const { start, final, setStart, setFinal } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};
