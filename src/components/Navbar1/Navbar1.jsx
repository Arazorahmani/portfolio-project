import React ,{useState} from "react";
import styles from "./Navbar1.module.css";
import { getImageUrl } from "../../utils";
 export const Navbar1 =()=>{
    const [menuOpen,setMenuOpen] = useState(false);

    return(
       <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen 
                ?  getImageUrl("images/menu30.png")
                : getImageUrl("images/menu30.png")} alt="Menu img" 
                onClick={()=>setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}
            onclick={()=>setMenuOpen(false)}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
       </nav>
    )
 }