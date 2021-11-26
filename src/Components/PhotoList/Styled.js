import styled from "styled-components";

export const PhotoContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 5em 0;
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
            border: solid 2px #ccc;
            border-radius: 10em;
            padding: .5em 0 .5em .8em;
        }
    }
`

export const PhotoBox = styled.div`
    min-height: 15em;
    border-radius: .75em;
    background-color: #ccc;
    position: relative;
    box-shadow: 0 0 20px #ccc;
    margin: 1em;

    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

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
        font-weight: 300;
        opacity: 0;
        transition: 400ms ease;
    }

    &:hover h3{
        opacity: 1;
        left: 1em;
    }
`