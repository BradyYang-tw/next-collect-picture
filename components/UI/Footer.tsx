import React from "react";
import Image from 'next/image'
import styles from './Footer.module.css'

const Footer = ()=>{
    return <div className={styles.footer}>
        <p >Copyright © 2023 Brady Inc.</p>
    </div>
}

export default Footer;