import React from "react"
import "./ContentPanel.scss"

type Props = {
  show: boolean | (() => void)
}

const ContentPanel = (props: Props) => {
  const { show } = props

  return (
    <div className={`content-wrapper ${show? 'show': 'hide'}`}>
      <h1>My world today</h1>
      <p>
        Pellentesque habitant morbi tristique senectus et nets et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. View all days eu libero sit amet
        quam egestas semper. Aenean ultricies mi vitae est. Maris placerat
        eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
        Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
        wisi. Aenean fermentum, elit get tincidunt condimentum, eros ipsum
        rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis
        pulvinar facilisis. Ut felis. Present dapibus, neque id cursus faucibus,
        tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam
        erat
      </p>
    </div>
  )
}

export default ContentPanel
