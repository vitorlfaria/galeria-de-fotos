import styled from "styled-components";

export const Footer = styled.div`
    width: 100%;
    height: 10em;
    background-color: #1b2a4a;
    border-top: solid 2px #071126;
    padding: 0 10em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 7em;
    }

    #redes {
        color: #fff;

        h4 {
            text-align: center;
            margin-bottom: .5em;
        }

        ul {
            list-style: none;
            
            li {
                display: inline;
                margin: 0 .7em;
                font-size: 2em;

                a {
                    text-decoration: none;
                    color: #0cc1f7;
                }
            }
        }
    }
`

export const UnderFooter = styled.div`
    width: 100%;
    height: 2.5em;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: #fff;

        a {
            text-decoration: none;
            color: #0cc1f7;
        }
    }
`