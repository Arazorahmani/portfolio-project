import React from "react";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";
export const Home=()=>{
    return(
        <section className={styles.container} id="home">
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, Iam Arazo</h1>
                <p className={styles.description}>I am a full-stack developer👩‍💻 with 2 year of experience.</p>
                <a className={styles.contactBtn} href="mailto:arazorahmani2020@gmail.com">Contact Me</a>
            </div>
            <img  src={getImageUrl("images/home img.jpg")} alt="home img" className={styles.homeImg} />
            <div className={styles.topBlur}></div>
            <div className={styles.buttomBlur}></div>
        </section>
    );
};