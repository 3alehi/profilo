import React from "react";
import style from "./HeaderLeft.module.css";
export default function HeaderLeft() {
  return (
    <div className={style.Left}>
      <h1 className={style.h1}>Brittany Chiang</h1>
      <h2>Senior Frontend Engineer</h2>
      <p className={style.p}>
        I build pixel-perfect, engaging, and <br /> accessible digital
        experiences.
      </p>
      
    </div>
  );
}
