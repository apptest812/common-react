import React, { useEffect, useState } from "react";
import "./TextInput.css";

const TextInput = (props) => {
  const { type = "text", label, value, onChange, style = {}, labelStyle = {} } = props;
  const [onValue, setOnValue] = useState("");
  // eslint-disable-next-line
  const [internalValue, setInternalValue] = useState(value ? internalValue : "");
  useEffect(() => {
    if (internalValue) {
      setOnValue("filled");
    } else {
      setOnValue("");
    }
  }, [internalValue])

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
        onChange={e => !onChange ? setInternalValue(e.target.value) : onChange(e)}
        style={style}
      />
      <label className={onValue} style={{ fontSize: fontSize, ...labelStyle }} >
        {label}
      </label>
    </div>
  );
}

export default TextInput;
