import React from "react";

const FormRow = ({ type, name, value, onChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
