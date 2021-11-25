import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'


export const Header = styled.div`
    width: auto;
    height: 80px;
    background: #fff;
    border-bottom: solid 2px #ccc;
    box-shadow: 0 10px 50px #ccc;
    padding: 0 10em;
    position: relative;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 150px;
        max-width: none;
    }

    .bars {
        display: none;
    }

    a {
        text-decoration: none;
        color: #0d6cd1;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        overflow: hidden;

        li {
            display: inline;
            padding: 0 2em;
        }   
    }

    .mobile-menu {
        display: none;
    }

    @media only screen and (max-width: 770px){
        padding: 0 1em;

        img {
            width: 100px;
        }

        .bars {
            display: block;
            color: #1b2a4a;
            font-size: 1.5em;
        }

        .nav-menu {
            display: none;
        }

        .mobile-menu {
            position: absolute;
            top: 0;
            right: 0;
            background-color: #fff;
            width: 10em;
            height: 100vh;
            border-radius: 1.5em 0 0 1.5em ;
            z-index: 100;
            padding-top: 4em;
            box-shadow: 0 0 0 200em rgba(0,0,0,0);
            opacity: 0;
            pointer-events: none;

            .bars {
                position: absolute;
                top: 1em;
                right: 1em;
            }

            li {
                display: block;
                margin-top: 1.5em;
            }

            transition: 400ms ease;
        }

        .ativo {
            box-shadow: 0 0 0 200em rgba(0,0,0,.5);
            opacity: 1;
            pointer-events: auto;
        }
    }

`