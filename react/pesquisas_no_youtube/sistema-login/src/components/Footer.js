import React from "react";
import github from './github.svg'
import './footer.css'


function Footer(){
    return(
        <footer className="rodape">
             <a href='https://github.com/L0tus-Program/API_base_uso_Ronaldo' target='_blank' rel="noreferrer"><img src={github} className='icons' alt="github" /></a>
        </footer>
    )
}


export default Footer