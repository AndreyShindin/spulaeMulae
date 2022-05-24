import React, { Component } from "react";
import navs from'./Navbar.module.css';

class Navbar extends Component {
    render(){
        return(
            <nav className={navs.nav}>
            <ul className={navs.list}>
              <li className={navs.item}>
                <a className={navs.link} href=''>Profile</a>
              </li>
              <li className={navs.item}>
                <a className={navs.link} href=''>Messages</a>
              </li>
              <li className={navs.item}>
                <a className={navs.link} href=''>News</a>
              </li>
              <li className={navs.item}>
                <a className={navs.link} href=''>Music</a>
              </li>
              <li className={navs.item}>
                <a className={navs.link} href=''>Settings</a>
              </li>
            </ul>
          </nav> 
        )
    }
}

export default Navbar