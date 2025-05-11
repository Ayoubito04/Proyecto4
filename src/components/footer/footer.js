import "./footer.css";
import {OurButton} from "../ourButton/ourButton.js";
import Github from "../../assets/img/Github.png";
import Linkedin from "../../assets/img/Linkedin.png";

 export const footer=()=>{
    const footer=document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML=`
    <div class="footer_container">
        <div class="footer_text">
            <h2 class="footer_title">Contactame en:</h2>
           
        </div>
        <div class="footer_buttons">
            ${OurButton('Github',Github).outerHTML}
            ${OurButton('Linkedin',Linkedin).outerHTML}
        </div>
    </div>
    `;
    return footer;
    
}
