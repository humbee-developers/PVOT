
import   styles from './style1.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from "./nav/index";

export default function index() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="header">
            <div className="bar">
                <Link className='nav_icon_custom' to="/">Pvot</Link>
                <div onClick={() => {setIsActive(!isActive)}} className="el">
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className="label">
                        <motion.p  className='menu_names' variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p className='menu_names' variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
               
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className="background"></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav/>}
            </AnimatePresence>
        </div>
    )
}
