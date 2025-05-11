import "./ExperienceCard.css";
import { data } from "../../data/data.js";

export const  ExperienceCard=()=>{
    const ExperienceCard=document.createElement('ul');
    ExperienceCard.classList.add('experienceCard');
    ExperienceCard.innerHTML=`
    ${data.workExperience.map(experience=>{
        return `
        <li class="experienceCard_content">
            <h1 class="experienceCard_title">${experience.position}</h1>
            <p class="experienceCard_company">${experience.company}</p>
            <p class="experienceCard_date">${experience.startDate}-${experience.endDate}</p>
            <p class="experienceCard_descirption">${experience.descirption}</p>
            </li>
         `
    
    }).join("")}

    
    `;
    return ExperienceCard;



}