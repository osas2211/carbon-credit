import React from "react"

export const Select: React.FC<{
  options: { value: string; label: string }[]
  style?: React.CSSProperties
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
  value?: React.InputHTMLAttributes<
    string | number | readonly string[] | undefined
  >
  label?: string
}> = ({ options, style, onChange, value, label }) => {
  return (
    <>
      {label && (
        <label
          htmlFor={label}
          style={{
            color: "#6A7984",
            fontSize: "18px",
            marginBottom: "10px",
            display: "block",
            lineHeight: "27px",
            textTransform: "capitalize",
          }}
        >
          {label}
        </label>
      )}
      <div className="selectDiv">
        <select
          name=""
          id=""
          style={{ ...style }}
          className="primary-input"
          onChange={onChange}
        >
          {options.map(({ label, value }, key) => (
            <option label={label} value={value} key={key}></option>
          ))}
        </select>
      </div>
    </>
  )
}
