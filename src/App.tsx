import React from "react"
import "./App.scss"
import useToggle from "./hooks/useToggle"
import ContentPanel from "./components/ContentPanel/ContentPanel"
import Form from "./components/Form/Form"
import SidePanel from "./components/SidePanel/SidePanel"

function App() {
  const [show, toggleShow] = useToggle(false)
  
  return (
    <div className="App">
      <div className="container">
        <SidePanel show={show} 
        // @ts-ignore
        toggleShow={toggleShow} />
        <ContentPanel show={show} />
        <Form show={show} />
      </div>
    </div>
  )
}

export default App
