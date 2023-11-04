import React, { ComponentProps } from "react";

const generalStyles: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const labelStyles: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyles,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyles,
};

type IPropsInput = ComponentProps<"input"> & {
  label: string;
};

export const DateInput = ({ label, ...props }: IPropsInput) => {
  return (
    <div>
      <label style={labelStyles} htmlFor={label}>
        {label}
      </label>
      <input
        style={inputStyle}
        type="date"
        id={label}
        name={label}
        {...props}
      />
    </div>
  );
};
