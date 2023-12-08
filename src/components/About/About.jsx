import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About =()=>{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img src={getImageUrl("images/myimg.jpg")} alt="about img" 
                className={styles.aboutImg}/>

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        {/* <img src={getImageUrl("images/logo192.png")} alt="img"  /> */}
                        <div className={styles.aboutItemText}>
                            {/* <h3>Arezo</h3> */}
                            <p>I am <span>Arazo Rahmani</span> front-ent developer and now i am stucent in <span>CodeToinspire</span> 
                            I graduated from Hatfi school in (2017) And in (2018), I started studying computer science at Herat University
                            i wish to become a great programmer in the futher.i love travilling solo and going to the Amazon jungle </p>
                        </div>
                    </li>
                </ul>
                
                </div>
        </section>
    );
};