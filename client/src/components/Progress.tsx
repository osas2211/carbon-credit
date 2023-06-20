import React from "react"

export const Progress: React.FC<{ percent: string }> = ({ percent }) => {
  return (
    <div
      style={{
        width: percent,
        height: "8px",
        backgroundColor: "#105a0e",
        transition: ".5s ease-out",
      }}
    ></div>
  )
}
