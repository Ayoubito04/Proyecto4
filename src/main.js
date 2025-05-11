import './style.css'
import { cleanPage } from './utils/cleanpage.js';
import {linkPage} from './utils/linkpage.js';
import { Home } from './Pages/Home/Home.js';
import { NavBar } from './components/NavBar/NavBar.js';
import {About} from './Pages/About/About.js';
import { Education } from './Pages/Education/Education.js';
import { Projects } from './Pages/Projects/Projects.js';
import { Experience } from './Pages/Experience/Experience.js';
import { footer } from './components/footer/footer.js';


const PrintHeader=()=>{
    NavBar();
    const DarkMode=document.createElement('button');
    DarkMode.classList.add('darkMode');
    DarkMode.innerHTML='🌙';
    DarkMode.addEventListener('click',()=>{
        document.body.classList.toggle('dark');
        if(document.body.classList.contains('dark')){
            DarkMode.innerHTML='🌞';
            const body=document.querySelector('body');
            body.style.color='whitesmoke';
            body.style.backgroundColor='#222831';
            body.style.transition="background-color 0.5s ease";
             
        }else{
            DarkMode.innerHTML='🌙';
            const body=document.querySelector('body');
            body.style.backgroundColor='whitesmoke';
            body.style.color='black';
           
        }
      
    })
   const header=document.querySelector('header');
    header.appendChild(DarkMode);
  
}


const PrintMain=()=>{
    const container=document.createElement('main');
   document.body.appendChild(container);
    cleanPage(container);
    linkPage(Home,'home');
    linkPage(About,'about');
    linkPage(Education,'education');
    linkPage(Projects,'projects');
    linkPage(Experience,'experience');
    Home();

}

const PrintFooter=()=>{
    document.body.appendChild(footer());
    

    
}
PrintHeader();
PrintMain();
PrintFooter();

