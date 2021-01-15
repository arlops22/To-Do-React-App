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
        border-bottom: 1px solid blue;
        padding: 5px 12px;
    }
    
    td {
        border-bottom: 1px solid blue;
        padding: 5px 12px;
    }
    
    th:first-child, td:first-child {
        width: 5%;
        border-right: 1px solid red;
        text-align: center;
        padding: 0;
    }
`;

export const ButtonNew = styled.button ` 
    color: gray;
    cursor: pointer;
    transition: .2s;

    &:hover {
        background: gray;
        color: white;
    }
`;