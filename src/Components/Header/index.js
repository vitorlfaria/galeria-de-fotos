import { Header } from "./styled"
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from "react"

export default function HeaderComponent() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <Header>            
            <img src="https://i.imgur.com/Ok9dQZV.png" alt="Logo" />

            <FaBars className="bars" onClick={handleClick} />

            <ul className='nav-menu'>
                <li><a href="https://www.linkedin.com/in/vitor-lacerda-faria/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/vitorlfaria" target="_blank">GitHub</a></li>
            </ul>

            <ul className={click ? 'mobile-menu ativo' : 'mobile-menu'} onClick={handleClick}>
                <FaTimes className="bars" onClick={closeMobileMenu} />
                <li><a href="https://www.linkedin.com/in/vitor-lacerda-faria/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/vitorlfaria" target="_blank">GitHub</a></li>
            </ul>

        </Header>
    )
}