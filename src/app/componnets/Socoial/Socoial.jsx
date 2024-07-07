import React from "react";
import style from "./Socoial.module.css";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

export default function Socoial() {
  return (
    <div className={style.Socoial}>
      <li>
        <FaTelegram />
      </li>
      <li>
        <FaGithub />
      </li>
      <li>
        <FaSquareXTwitter />
      </li>

      <li>
        <FaLinkedin />
      </li>
      <li>
        <FaInstagram />
      </li>
    </div>
  );
}
