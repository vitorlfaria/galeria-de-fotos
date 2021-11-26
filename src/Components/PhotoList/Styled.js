import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const PhotoContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 5em 0 2em;
    position: relative;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;

    form {
        position: absolute;
        right: 0;
        top: 2em;

        input {
            outline: none;
            border: solid 2px #1b2a4a;
            border-radius: 10em;
            padding: .5em 5em .5em 1em;
        }
        .search {
            font-size: 1.2em;
            color: #1b2a4a;
            position: absolute;
            top: .3em;
            right: .7em;
        }
    }
`

export const PhotoBox = styled.div`
    min-height: 15em;
    border-radius: .75em;
    background-color: #ccc;
    position: relative;
    box-shadow: 0 0 20px #ccc;

    overflow: hidden;

    &::before {
        content: ""; // ::before and ::after both require content
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top, rgba(0,0,0,.2), rgba(0,0,0,0));
    }

    h3 {
        position: absolute;
        bottom: 1em;
        left: 0;
        color: #fff;
        font-weight: 500;
        text-shadow: .1em .1em .3em #000;
        opacity: 0;
        transition: 400ms ease;
    }

    &:hover h3{
        opacity: 1;
        left: 1em;
    }
`

export const Button = styled.button`
    margin: 0 auto;
    padding: .7em 5em;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    border: none;
    border-radius: .4em;
    background-color: #1b2a4a;
    margin-bottom: 3em;
    cursor: pointer;
`