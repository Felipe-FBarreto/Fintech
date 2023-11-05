import React from "react";
import { useData } from "../Context/DataContext";

const style: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-2)",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  borderRightColor: "var(--color-4)",
  animation: "spin 1s infinite",
};

export const Loading = () => {
  const { loading } = useData();
  return (
    <div style={style}>
      <style>
        {`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}
      </style>
    </div>
  );
};
