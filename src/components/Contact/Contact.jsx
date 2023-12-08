import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
 export const Contact=()=>{
    return(
        <footer  className={styles.container} id="contact">
            <div  className={styles.text}> <h2>Contace Us</h2>
            <p>Contact me on socialmedia</p>
             </div>
             <ul  className={styles.links}>
                <li  className={styles.link}><img src={getImageUrl("images/email2.png")} alt="" />
                <a href="mailto:arazorahmani2020@gmail.com">arazorahmani2020@gmail.com</a></li>
                <li className={styles.link}><img src={getImageUrl("images/github.png")} alt="" />
                <a href="https://github.com/Arazorahmani">GitHub</a></li>
                <li className={styles.link}><img src={getImageUrl("images/twitter.png")} alt="" />
                <a href="https://x.com/ArazoRahmani?t=VAKSOQR-i2dvX27jFSkx4A&s=09">Twitter</a></li>
             </ul>



             
        </footer>
    )
 }