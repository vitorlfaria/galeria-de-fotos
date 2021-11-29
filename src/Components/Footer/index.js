import { Footer, UnderFooter } from "./styled";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'


export default function FooterComponent() {
    return (
        <>
        <Footer>
            <img src="https://i.imgur.com/B9ct6L1.png" />
            <div id="redes">
                <h4>Minhas Redes</h4>
                <ul>
                    <li><a href="https://www.instagram.com/_ovito/" target="_blank"><FaInstagram /></a></li>
                    <li><a href="https://github.com/vitorlfaria" target="_blank"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/vitor-lacerda-faria/" target="_blank"><FaLinkedin /></a></li>
                </ul>
            </div>
        </Footer>
        <UnderFooter>
            <p>Projeto criado por utilizando 
                <a href="https://nextjs.org/"> ReactJS/NextJS</a> e 
                <a href="https://www.pexels.com/pt-br/api/"> Pexels API</a>
            </p>
        </UnderFooter>
        </>
    )
}