import React from 'react'
import style from './Button.module.scss'

import { RxReload as ReloadButton } from 'react-icons/rx'

const Button = (props) => {
  return (
    <>
      <button className={style.button} onClick={props.onClickedButton}><ReloadButton size={30} color='#EEEEEE'/></button>
    </>
  )
}

export default Button