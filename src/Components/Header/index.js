import { Header } from "./styled"

export default function HeaderComponent() {
    return (
        <Header>            
            <img src="https://i.imgur.com/Ok9dQZV.png" alt="Logo" />
            <ul>
                <li><a href="https://www.linkedin.com/in/vitor-lacerda-faria/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/vitorlfaria" target="_blank">GitHub</a></li>
            </ul>
        </Header>
    )
}