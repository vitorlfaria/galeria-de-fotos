import styled from "styled-components";

export const Body = styled.div`
    min-height: 100vh;
    width: 100vw;
`

export const LinkWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;

    a {
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        background-color: #1099e8;
        padding: .5em 2em .5em 1em;
        border-radius: .5em;
        position: relative;

        .link {
            position: absolute;
            color: #fff;
            top: .5em;
            right: .5em;
        }
    }

    
    
    .home {
        position: absolute;
        color: #fff;
        top: .5em;
        right: .5em;
    }
`

export const PhotoBox = styled.div`
    width: 50%;
    overflow: hidden;
    margin: 1em auto 3em;
    border-radius: 1em;
    box-shadow: 0 0 20px #ccc;
`
