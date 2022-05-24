import React from "react";
import head from'./Header.module.css';

function Header(){
    return(
        <header className={head.header}>
            <a className={head.link} href="">
                <img className={head.image} src='https://i.pinimg.com/originals/f6/7a/3a/f67a3a261f0c952640f9c1d214d73e96.png'></img>
            </a>
       </header>
    )
}

export default Header