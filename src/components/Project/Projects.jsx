import React from "react";
import Project from "../data/Project.json";
import styles from "./Project.module.css";
import { ProjectCard } from "./ProjectCard";
export const Projects=()=>{
    return(
       <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {Project.map((Project,id)=>{
                    return (
                     <ProjectCard  key={id} Project={Project}></ProjectCard>
            )})
            }
        </div>
       </section>
    )
}