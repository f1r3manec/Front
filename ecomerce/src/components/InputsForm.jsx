import React from "react";

export const InputsForm = ({
  label,
  componentName,
  componentType,
  placeholder,
  componentValue,
  onChance,
  disabledComponent = false,
}) => {
  return (
    <>
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          name={componentName}
          value={componentValue}
          type={componentType}
          placeholder={placeholder}
          onChange={onChance}
          disabled={disabledComponent}
        />
      </div>
    </>
  );
};
