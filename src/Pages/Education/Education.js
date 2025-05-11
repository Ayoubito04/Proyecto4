import "./Education.css";
import { cleanPage } from "../../utils/cleanpage.js";
import { data } from "../../data/data.js";

export const Education=()=>{
    const container=document.querySelector('main');
    cleanPage(container);
    const education=document.createElement('div');
    education.classList.add('education');
    education.innerHTML=`
    <div class=education_content>
    <h1 class="education_title">Educación</h1>
    <p class="education_description">Aquí podrás ver mi formación académica y mis habilidades.</p>
    <div class="education_list">
       <h2 class=education_degree>${data.education.degree}</h2>
       <h3 class=education_university>${data.education.university}</h3>
       <p class=education_graduationYear>${data.education.graduationYear}</p>
       <p class=education_honors>${data.education.honors}</p>
       <p class=education_relevantCourses>${data.education.relevantCourses.join(",")}</p>
    
    </div>

    </div>
    `
    container.appendChild(education);
    return education;
}
