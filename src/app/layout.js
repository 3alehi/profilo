import { Inter } from "next/font/google";
import "./globals.css";
import GsapMouse from "./componnets/gsapMouse";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <GsapMouse/>



      {children}

      </body>
    </html>
  );
}
