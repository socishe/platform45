import React from "react"
import './Button.scss'

type Props = {
  children: React.ReactNode
  type?: "button" | "submit" | "reset" | undefined
  variant?: string
  onClick?: () => void
}

const Button = (props: Props) => {
  const { children, type, variant, onClick } = props
  return (
    <button className={`button ${variant}`} type={type || "button"} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
