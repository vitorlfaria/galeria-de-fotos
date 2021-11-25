import styled from 'styled-components'


export const Header = styled.div`
    width: auto;
    height: 80px;
    background: #fff;
    border-bottom: solid 2px #ccc;
    box-shadow: 0 10px 50px #ccc;
    padding: 0 10em;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 150px;
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

`