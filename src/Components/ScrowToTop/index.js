import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.button`
    position: fixed;
    bottom: 5em;
    right: 3em;
    z-index: 200;

    border: 1px solid #fff;
    padding: 1.3em;
    background-color: #1b2a4a;
    color: #fff;
    border-radius: .5em;
    cursor: pointer;

    @media (max-width: 768px){
        bottom: 2em;
        right: 1.3em;
    }
`

export default function ScrowToTop(){

    function scrollToTop() {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

    return (
        <Button onClick={scrollToTop}><FaArrowUp /></Button>
    )
}