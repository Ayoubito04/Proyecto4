import "./ourButton.css";

export const OurButton=(text,logo)=>{
    const button=document.createElement('button');
    button.classList.add('ourButton');

    button.innerHTML=`
    <div class="ourButton_circle">
    <a href="${text}" target="_blank">${text}</a>
        <img src="${logo}" alt="${text} logo" class="ourButton_logo">
    </div>
    `;
    return button;
}