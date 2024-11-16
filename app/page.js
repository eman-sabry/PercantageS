'use client'
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";



 
export default function Home() {
 
  return (
<main className={styles.main}>
<Main/>


</main>

  );
}

function Main()
{

return(
  <div className={styles.center}>
  <h1 id="font">
  أهلاً وسهلاً
  </h1>
  <h1>
  لحساب النسبة المئوية الخاصة بك
  </h1>
 <Link href="/School">
 <button className={styles.btn}>اضغط هنا</button></Link> 
  </div>
  
)
}
