import React from 'react'
import style from './Output.module.scss'

const Output = ({ msg }) => {
  return (
    <div className={style.output}>
      <p>{msg}</p>
    </div>
  )
}

export default Output