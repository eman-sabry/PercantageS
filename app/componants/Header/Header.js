"use client";
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import styles from "./Header.moudule.css";
import Image from 'next/image';
import Link from 'next/link';
export default function Header(){
    return(
        
      
      <Nav id="emo" activeKey="/homeLink">
        
         <Nav.Item >
          <Nav.Link  href="/"><img id="logo" src="Neutral Beige Simple Aesthetic Flower Boutique Logo (6).png" /></Nav.Link>
        </Nav.Item>
        
      </Nav>
   

    )
}