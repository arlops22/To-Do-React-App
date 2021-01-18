import styled from 'styled-components';

export const Nav = styled.nav `

    border-bottom: 1px solid var(--secondary-white);
    padding: 15px 30px;

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    ul li {
        margin: 0 5px;
    }

    ul li a, ul li button {
        cursor: pointer;
        color: var(--light-gray);
        text-decoration: none;
        transition: .1s;
    }

    ul li a:hover, ul li button:hover {
        color: var(--dark-gray);
    }

`;