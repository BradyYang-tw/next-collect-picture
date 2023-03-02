import React from 'react';
import Image from 'next/image'
import styles from "./index.module.css";

const Collections = ()=>{
    return <>
     <header className={styles.header}>
        <Image 
        src="https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2023%2F01%2Fthe-first-slam-dunk-taiwan-hong-kong-first-week-box-office-0.jpg?q=75&w=800&cbr=1&fit=max" 
        alt="slamdunk"
        width={100}
        height={100} />
        <div className={styles.title}>My Favorite Pictures</div>
        <ul className={styles.nav}>
            <li>XXX</li>
            <li>XXX</li>
            <li>XXX</li>
        </ul>
    </header>
    <section className={styles.section}>

    </section >
    </> 
   
}
export default Collections