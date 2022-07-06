import React from "react"
import './Input.scss'

type Props = {
  type: string
  value: string
  onChange:  (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  placeholder?: string
  id: string;
  name: string;
}

const Input = (props: Props) => {
  const { type, value, onChange, placeholder, label, id, name} = props

  return (
    <div className={"input-field"}>
      {label && <label className="input-label" htmlFor={id}>{label}</label>}
      <input
        className="text-input"
        type={type}
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
