import React from "react"
import "./Form.scss"
import Input from "../common/Input/Input"
import Button from "../common/Button/Button"

import maleIcon from "../../assets/images/mars-symbol.svg"
import maleWhiteIcon from "../../assets/images/mars-symbol--white.svg"
import femaleWhiteIcon from "../../assets/images/venus-symbol--white.svg"
import femaleIcon from "../../assets/images/venus-symbol.svg"
import classicIcon from "../../assets/images/card.svg"
import cardWhite from "../../assets/images/card--white.svg"

import RadioButton from "../common/RadioButton/RadioButton"

type Props = {
  show: boolean | (() => void)
}

const Form = (props: Props) => {
  const { show } = props
  const [state, setState] = React.useState({
    email: "",
    name: "",
    gender: "",
    password: "",
    dob: "",
    mobile: "",
    customer_id: "",
    membership: "",
  })
  const genderOptions = [
    {
      id: 1,
      label: "Male",
      value: "male",
      icon: maleIcon,
      active: maleWhiteIcon,
    },
    {
      id: 2,
      label: "Female",
      value: "female",
      icon: femaleIcon,
      active: femaleWhiteIcon,
    },
  ]

  const membership = [
    {
      id: 1,
      label: "Classic",
      value: "classic",
      icon: classicIcon,
      active: cardWhite,
    },
    {
      id: 2,
      label: "Silver",
      value: "silver",
      icon: classicIcon,
      active: cardWhite,
    },
    {
      id: 3,
      label: "Gold",
      value: "gold",
      icon: classicIcon,
      active: cardWhite,
    },
  ]
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }
  const handleCancel = () => {
    setState({
      email: "",
      name: "",
      gender: "",
      password: "",
      dob: "",
      mobile: "",
      customer_id: "",
      membership: "",
    })
  }
  return (
    <div className={`right-panel ${!show ? "show" : "hide"}`}>
      <form>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Sihle Socishe"
          label="Name"
          value={state.name}
          onChange={handleChange}
        />
        <RadioButton
          handleChange={handleChange}
          options={genderOptions}
          label="Gender"
          name="gender"
          value={state.gender}
        />

        <Input
          type="date"
          name="dob"
          id="dob"
          label="Date of Birth"
          value={state.dob}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="sihlesocishe@gmail.com"
          label="Email"
          value={state.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="mobile"
          id="mobile"
          placeholder="+91 98765 43210"
          label="Mobile"
          value={state.mobile}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="customer_id"
          id="customer_id"
          placeholder="576802-ERD0348 45'"
          label="Custom ID"
          value={state.customer_id}
          onChange={handleChange}
        />
        <RadioButton
          handleChange={handleChange}
          options={membership}
          label="Membership"
          name="membership"
          value={state.membership}
        />

        <div className="buttons">
          <Button onClick={handleCancel} type="reset">
            Cancel
          </Button>
          <Button variant="success">Save</Button>
        </div>
      </form>
    </div>
  )
}

export default Form
