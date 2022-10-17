import React from "react";
import "./TextInput.css";

const TextInput = (props) => {
  const { type = "text", label, value, onChange, style = {}, labelStyle={} } = props;

  const { width, height } = style;
  let divStyle = {};
  if (width) {
    divStyle["width"] = width;
    delete style.width;
  }
  if (height) {
    divStyle["height"] = height;
  }
  let fontSize = "20px";
  if (style.fontSize) {
    divStyle["height"] = height;
  }

  return (
    <div className="input-container" style={divStyle} >
      <input
        type={type}
        className="text-input"
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        style={style}
      />
      <label className={value && 'filled'} style={{ fontSize: fontSize, ...labelStyle }} >
        {label}
      </label>
    </div>
  );
}

export default TextInput;
