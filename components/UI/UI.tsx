import React from "react";
// import "./UI.css"

// TODO: 是甚麼?
interface UIProps {
    // name: string;
    // age: number;
    // country: string;
    children?: React.ReactNode; // 👈️ for demo purposes
  }

const UI= (props: UIProps)=>{
    return <div>
        <header className='header'>我是Header</header>
        <section>{props.children} </section>
        <footer>我是Footer</footer>
    </div>
}
export default UI