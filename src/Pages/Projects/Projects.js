import "./Projects.css";
import { cleanPage } from "../../utils/cleanpage.js";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard.js";
import { data } from "../../data/data.js";

export const Projects = ()=>{
   
    const container=document.querySelector('main');
    cleanPage(container);
    const projects=document.createElement('div');
    projects.classList.add('projects');
    projects.innerHTML=`
    <h1 class="projects_title">Proyectos</h1>
    <h2 class="projects_subtitle">Estos son algunos de mis proyectos:</h2>
    <ul class="projects_list">
    </ul>
    `;
    const projectsList=projects.querySelector('.projects_list');
     for(const project of data.projects){
        const projectCard=ProjectCard(project);
        projectsList.appendChild(projectCard);

}
    container.appendChild(projects);
    return projects;
    
}



    
