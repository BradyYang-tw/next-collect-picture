import React from 'react';
import Image from 'next/image'
import styles from './Header.module.css'

const Header = ()=>{
    return <div className={styles.header}>
        {/* //TODO: what is LCP ? */}
        <Image src='https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80' alt='temp' width={100} height={100}></Image>
        <p className={styles.title}>Collect Picture</p>
            <ul className={styles.nav}>
                <li>List</li>
                <li>Upload</li>
                <li>XXX</li>
            </ul>
    </div>
}

export default Header;