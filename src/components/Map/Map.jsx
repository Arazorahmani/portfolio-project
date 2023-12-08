import React from "react";
import styles from "./Map.module.css";


export const Map=()=>{
    const position = [34.336030, 69.187530];
    return(
       <div className={styles.container}>
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420918.04183803394!2d62.51572109481631!3d34.492179221445326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3cfb71f14e85e7%3A0x32512f54afaadb4c!2z2YjZhNiz2YjYp9mE24wg2KfZhtis24zZhNiMINin2YHYutin2YbYs9iq2KfZhg!5e0!3m2!1sfa!2s!4v1702012594260!5m2!1sfa!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
   width="600"
   height="450"
   style={{ border: "0" }}></iframe>
       </div>
    );
}

export default Map;