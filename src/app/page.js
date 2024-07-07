import React from 'react'
import style from  "./page.module.css"
import HeaderLeft from './componnets/HeaderLeft/HeaderLeft'
import List from './componnets/List/List'
import Socoial from './componnets/Socoial/Socoial'
export default function page() {
  return (
    <div className={style.profilo}>

<div className={style.Left}>
  <HeaderLeft/>
  <List/>
  <Socoial/>


</div>
<div className={style.Right}>0</div>


    </div>
  )
}
