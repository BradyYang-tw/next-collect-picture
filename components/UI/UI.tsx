import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from './UI.module.css'

// TODO: 是甚麼?
interface UIProps {
    // name: string;
    // age: number;
    // country: string;
    children?: React.ReactNode; // 👈️ for demo purposes
  }

const UI= (props: UIProps)=>{
    return <div>
        <Header />
        <section className={styles.content}>{props.children} </section>
        <Footer/>
    </div>
}
export default UI