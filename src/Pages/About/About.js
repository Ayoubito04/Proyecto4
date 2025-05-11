import "./About.css";
import { cleanPage } from "../../utils/cleanpage.js";
import { data } from "../../data/data.js";

export const About=()=>{
    const container=document.querySelector('main');
    cleanPage(container);
    const about=document.createElement('div');
    about.classList.add('about');
    about.innerHTML=`
    <div class="about_content">
    <h1 class="about_title">Sobre mi</h1>
    <img  class="about_avatar" alt="Avatar" src="${data.avatar}" />
     <div class="abaout_skills">
    <h2 class="habilidades">Habilidades:</h2>
    <ul class="habilidades_lista">
        ${data.skills.map(skill=>{
            return `<li class="habilidades_Item">${skill}</li>`
        }).join('')}
    </ul>
    </div>
    
    <p class="about_name">${data.name}</p>
    <p class="about_address">${data.address}</p>
    <p class="about_email">${data.email}</p>
    <p class="about_aboutMe">${data.aboutMe}</p>
       </div>

    `;
    container.appendChild(about);
    return about;
}