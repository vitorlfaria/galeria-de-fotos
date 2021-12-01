import styled from "styled-components";

export const PhotoContainer = styled.div`
    width: 80%;
    max-width: 80em;
    margin: 0 auto;
    padding: 10px 0 0;
    position: relative;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;

    @media (max-width: 425px){
        width: 90%;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`

export const PhotoBox = styled.div`
    min-height: 15em;
    border-radius: .75em;
    background-color: #ccc;
    position: relative;
    box-shadow: 0 0 20px #ccc;
    cursor: pointer;

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
    margin: 3em 1em;
    padding: .7em 2em;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    border: none;
    border-radius: .4em;
    background-color: #1b2a4a;
    cursor: pointer;
    position: relative;

    .iconPrev {
        position: absolute;
        font-size: 1.8rem;
        top: 0.2em;
        left: .2em;
    }

    .iconNext {
        position: absolute;
        font-size: 1.8rem;
        top: 0.2em;
        right: .2em;
    }
`

export const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 80%;
    max-width: 80em;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    position: relative;

    input {
        outline: none;
        border: solid 2px #1b2a4a;
        border-radius: 10em;
        padding: .5em 3em .5em 1em;
    }

    .search {
        position: absolute;
        top: .55em;
        right: 1em;
        color: #1b2a4a;
    }

    @media (max-width: 425px){
        input{
            width: 100%;
        }
    }
`