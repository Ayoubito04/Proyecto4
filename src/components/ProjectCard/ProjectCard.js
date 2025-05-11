// ProjectCard.js
import "./ProjectCard.css";
import { data } from "../../data/data.js";
export const ProjectCard = (project) => {
    const projectCard = document.createElement("li");
    projectCard.classList.add("projectCard");
    projectCard.innerHTML = `
      <h1 class="projectCard_title">${project.title}</h1>
      <p class="projectCard_description">${project.description}</p>
      <a href="${project.link}" class="projectCard_link">Ver proyecto</a>
      <img class="projectCard_preview" src="${project.preview}" alt="${project.title} preview" />
    `;
    return projectCard;

  };
  