import React from "react"

export const Button: React.FC<{
  children: React.ReactNode
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onSubmit?: React.FormEventHandler<HTMLButtonElement>
}> = ({ children, onClick, onSubmit }) => {
  return (
    <button onSubmit={onSubmit} onClick={onClick} className="btn-primary">
      {children}
    </button>
  )
}
