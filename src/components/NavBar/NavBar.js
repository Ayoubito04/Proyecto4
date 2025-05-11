import "./NavBar.css";

export const NavBar = () => {
    const header = document.createElement("header");
    document.body.appendChild(header);
    header.classList.add("header");

    const navBar = document.createElement("nav");
    navBar.classList.add("navBar");
    navBar.innerHTML=`
      <div class="navBar_content">
      <ul class="navBar_list">
        <li class="navBar_item"><a href="#/home" id='home'>Home</a></li>
        <li class="navBar_item"><a href="#/about" id='about'>About</a></li>
        <li class="navBar_item"><a href="#/Education" id='education'>Education</a></li>
        <li class="navBar_item"><a href="#/projects" id='projects'>Projects</a></li>
        <li class="navBar_item"><a href="#/experience" id='experience'>Experience</a></li>
        </ul>
      </div>`
    header.appendChild(navBar);

   

}