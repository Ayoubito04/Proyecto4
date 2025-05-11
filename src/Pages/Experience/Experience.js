import "./Experience.css";
import { cleanPage } from "../../utils/cleanpage.js";
import { ExperienceCard } from "../../components/ExperienceCard/ExperienceCard.js";

export const Experience = ()=>{
    const container=document.querySelector('main');
    cleanPage(container);
    const experience=document.createElement('div');
    experience.classList.add('experience');
    experience.innerHTML=`
    <h1 class="experience_title">Experiencia</h1>
     <h2 class="experience_subtitle">Tengo experiencia en:</h2>
    <div class= "experience_content">
   
    </div>
    `;
    const experienceList=experience.querySelector('.experience_content');
    const card=ExperienceCard();
    experienceList.appendChild(card);
    container.appendChild(experience);
    return experience;
    
}