"use client";

import React, { useState } from "react";
import style from "./List.module.css";

export default function List() {
  const [isActive, setIsActive] = useState("1");
  return (
    <ul className={style.List}>
      <li className={`${style.liList}`}
      onClick={e =>{
setIsActive("1")

      }}
      >
        <p className={isActive == 1 && style.isactive }></p>{" "}
        <span>ABOUT</span>
      </li>
      <li className={`${style.liList}`}
      onClick={e =>{
setIsActive("2")

      }}
      >
        <p className={isActive == 2 && style.isactive }></p> <span>EXPERIENCE</span>
      </li>
      <li className={`${style.liList}`}
      onClick={e =>{
setIsActive("3")

      }}
      >
        <p className={isActive == 3 && style.isactive }></p> <span>PROJECTS</span>
      </li>
    </ul>
  );
}
