import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 3em;
        font-weight: bold;
        margin-top: 1em;
    }
   
`;

export const Table = styled.table `

    margin-top: 4em;
    border-collapse: collapse;
    width: 40%;

    th {
        font-weight: bold;
        text-align: left;
        border-bottom: 1px solid var(--primary-blue);
        padding: 10px 12px;
    }
    
    td {
        border-bottom: 1px solid var(--primary-blue);
        padding: 5px 12px;

        position: relative;
    }

    td p {
        padding: 5px;
    }
    
    th:first-child, td:first-child {
        width: 5%;
        border-right: 1px solid var(--red);
        text-align: center;
        padding: 0;
    }

    input[type="checkbox"] {
        cursor: pointer;

    }

`;

export const MenuAction = styled.div `
    
    position: absolute;
    right: 0;
    top: 5px;
    z-index: 1;
    
    ul {
        list-style: none;
        background: var(--primary-white);
        box-shadow: 0 0 10px var(--light-gray);
        border-radius: 3px;
        width: 150px;
        padding: 10px 0;
        position: absolute;
        right: calc((0px - 150px/2) + 13px);
        transition: opacity .2s ease;
        
        opacity: ${props => props.open ? '100' : '0'};
    }

    ul li button {
        cursor: pointer;
        width: 100%;
        padding: 5px 10px;
        text-align: left;

        display: flex;
        align-items: center;
    }

    ul li button:hover {
        background: var(--secondary-white);
    }

    ul li button svg {
        margin-right: 6px;
    }

`;

export const ActionsButton = styled.button ` 

    cursor: pointer;
    transition: .2s;
    padding: 5px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    margin: 0 auto;

    &:hover {
        background: var(--secondary-white);
    }

    svg {
        fill: var(--dark-gray);
    }

`;

export const ButtonNew = styled.button ` 
    color: var(--light-gray);
    cursor: pointer;
    transition: .2s;
    padding: 5px;
    border-radius: 3px;
    width: 130px;
    text-align: left;
    display: flex;
    align-items: center;

    &:hover {
        background: var(--secondary-white);
    }

    svg {
        margin-right: 4px;
        fill: var(--light-gray);
    }
`;