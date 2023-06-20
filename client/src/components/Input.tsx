import React, { useState } from "react"
import eye from "../assets/eye.png"

export const Input: React.FC<{
  prefix?: string
  suffix?: string
  type: "email" | "password" | "text"
  style?: React.CSSProperties
  placeholder?: string
  id: string
  label?: string
  prefixStyle?: React.CSSProperties
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: React.InputHTMLAttributes<
    string | number | readonly string[] | undefined
  >
  containerStyle?: React.CSSProperties
  required?: boolean
}> = ({
  prefix,
  type,
  style,
  placeholder,
  id,
  label,
  prefixStyle,
  onChange,
  value,
  containerStyle,
  required,
}) => {
  const [visiblePaswd, setVisiblePswd] = useState(false)
  const [typeState, setTypeState] = useState(type)
  return (
    <div style={{ position: "relative", ...containerStyle }}>
      <div
        style={{
          position: "absolute",
          top: label ? "3rem" : "0.7rem",
          left: 25,
          zIndex: 2,
          ...prefixStyle,
        }}
      >
        <img src={prefix} />
      </div>
      {type === "password" && (
        <div
          style={{
            position: "absolute",
            top: label ? "3rem" : "0.7rem",
            right: 25,
            zIndex: 2,
            // ...prefixStyle,
          }}
          onClick={() => {
            if (visiblePaswd) {
              setVisiblePswd(false)
              setTypeState("password")
            } else if (!visiblePaswd) {
              setVisiblePswd(true)
              setTypeState("text")
            }
          }}
        >
          <img src={eye} />
          {visiblePaswd && (
            <span
              style={{
                fontSize: "1rem",
                marginLeft: -15,
                transform: "rotate(-30deg)",
                display: "inline-block",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              \
            </span>
          )}
        </div>
      )}
      {label && (
        <label
          htmlFor={id}
          style={{
            color: "#6A7984",
            fontSize: "18px",
            marginBottom: "10px",
            textTransform: "capitalize",
            display: "block",
            lineHeight: "27px",
          }}
        >
          {label}
        </label>
      )}
      <input
        type={typeState}
        style={{
          paddingLeft: prefix && 55,
          textDecoration: type !== "email" ? "none" : "underline",
          ...style,
          paddingRight: type === "password" ? 55 : "0.8rem",
        }}
        placeholder={placeholder}
        className="primary-input"
        id={id}
        onChange={onChange}
        value={value as any}
        required={required}
      />
    </div>
  )
}
