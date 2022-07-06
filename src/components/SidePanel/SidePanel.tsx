import React from "react"
import "./SidePanel.scss"
import arrow from "../../assets/images/arrow.svg"
import face from "../../assets/images/face.svg"

type Props = {
  toggleShow: () => void
  show: boolean | (() => void)
}

const SidePanel = (props: Props) => {
  const { toggleShow, show } = props
  console.log(show)

  return (
    <section className="side-panel">
      <div className="container">
        <img className="face" src={face} alt="face" />
        <h1>Front-end challenge!</h1>
        <p>This is a design that you will need to code up and impress us.</p>
        <img
          className={`arrow ${show ? "rotate" : "original"}`}
          onClick={toggleShow}
          src={arrow}
          alt="arrow"
        />
      </div>
    </section>
  )
}

export default SidePanel
