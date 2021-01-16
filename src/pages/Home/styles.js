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
        border-bottom: 1px solid var(--blue-primary);
        padding: 5px 12px;
    }
    
    td {
        border-bottom: 1px solid var(--blue-primary);
        padding: 5px 12px;
    }
    
    th:first-child, td:first-child {
        width: 5%;
        border-right: 1px solid var(--red);
        text-align: center;
        padding: 0;
    }
`;

export const TaskRow = styled.tr `
    
    td:last-child {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
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

export const ActionsButton = styled.button ` 

    cursor: pointer;
    transition: .2s;
    padding: 5px;
    border-radius: 3px;
    display: flex;
    align-items: center;

    &:hover {
        background: var(--secondary-white);
    }

    svg {
        fill: var(--dark-gray);
    }

`;