import { Header } from "./styled"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function HeaderComponent() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <Header>            
            <img src="https://i.imgur.com/Ok9dQZV.png" alt="Logo" />

            <FaBars className="bars" onClick={handleClick} />

            <ul className='nav-menu'>
                <li><a href="https://www.linkedin.com/in/vitor-lacerda-faria/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/vitorlfaria" target="_blank">GitHub</a></li>
            </ul>

            <ul className={click ? 'mobile-menu ativo' : 'mobile-menu'}>
                <FaTimes className="bars" onClick={handleClick} />
                <li><a href="https://www.linkedin.com/in/vitor-lacerda-faria/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/vitorlfaria" target="_blank">GitHub</a></li>
            </ul>

        </Header>
    )
}