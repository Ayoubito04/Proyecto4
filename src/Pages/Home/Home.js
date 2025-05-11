import "./Home.css";
import { cleanPage } from "../../utils/cleanpage.js";


export const Home=()=>{
    const container=document.querySelector('main');
    cleanPage(container);
    const home=document.createElement('div');
    home.classList.add('home');
    home.innerHTML=`
    <div class=home_content>
        <h1 class="home_title">Bienvenido a mi CV</h1>
        <p class="home_description">Aquí podrán saber todo sobre mi,la experiecia de trabajo,mis conocimientos y mi formación dentro del mundo de la programación</p>
    </div>
    `
    container.appendChild(home);
    return home;

}