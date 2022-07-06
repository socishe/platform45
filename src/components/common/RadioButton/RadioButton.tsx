import React from "react"
import "./RadioButton.scss"
type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  // isSelected: boolean
  label: string
  // icon: string
  options: any[]
  name: string
}

const RadioButton = (props: Props) => {
  const { name, handleChange, label, options, value } = props
  return (
    <div className="RadioButton-wrapper">
      <div className="radio-button__label">{label}</div>
      <div className="radio-button">
        {options.map((option) => (
          <div className="radio-button__options" key={option.value}>
            <input
              onChange={handleChange}
              id={option.value}
              type="radio"
              value={option.value}
              name={name}
              className="hidden"
              checked={value === option.value}
            />
            <label htmlFor={option.value} className={`button ${value === option.value ? 'bgActive': ''}`}>
                <img
                
                  alt="icon"
                  className="icon"
                  src={value === option.value ? option.active : option.icon}
                />
              </label>
            <label
              htmlFor={option.value}
              className="label-hover"
            >
              
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RadioButton
