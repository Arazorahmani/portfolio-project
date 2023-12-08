import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
export const Skills=()=>{
return(
    <section className={styles.container} id="skills">
        <h1 className={styles.title}>my web Skills</h1>
        <div  className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <img src={getImageUrl("images/htmllogo.png")} alt="img" className={styles.skillimmg}  />
                <div className={styles.aboutItemText}>
                <p>Html</p>
                
                <ProgressBar completed={90} bgColor='#2896b2' animateOnRender={true}></ProgressBar>
                        </div>
                </li>

                <li className={styles.aboutItem}>
                <img src={getImageUrl("images/csslogo.jpg")} alt="img" className={styles.skillimmg}  />
                <p>Css</p>
                <ProgressBar completed={90} bgColor='#2896b2' animateOnRender={true}></ProgressBar>
                </li>

                <li className={styles.aboutItem}>
                <img src={getImageUrl("images/bootlogo.jpg")} alt="img" className={styles.skillimmg}  />
                <p>Bootstrap</p>
                <ProgressBar completed={80} bgColor='#2896b2' animateOnRender={true}></ProgressBar>
                </li>

                <li className={styles.aboutItem}>
                <img src={getImageUrl("images/jslogo2.jpg")} alt="img"  className={styles.skillimmg} />
                <p>Javascrpt</p>
                <ProgressBar completed={60} bgColor='#2896b2' animateOnRender={true}></ProgressBar>
                </li>

                <li className={styles.aboutItem}>
                <img src={getImageUrl("images/reactlogo2.png")} alt="img" className={styles.skillimmg} />
                <p>React</p>
                <ProgressBar completed={50} bgColor='#2896b2' animateOnRender={true}></ProgressBar>
                </li>
            </ul>

            {/* progressbar */}
            </div>
    </section>
);
}