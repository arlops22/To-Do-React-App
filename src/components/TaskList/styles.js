import styled from 'styled-components';

export const TaskTable = styled.table `

    margin-top: 4em;
    border-collapse: collapse;
    width: 40%;
    background: var(--primary-white);

    th {
        font-weight: bold;
        text-align: left;
        border-bottom: 1px solid var(--primary-blue);
        padding: 10px 12px;
        position: relative;
    }

    td {
        border-bottom: 1px solid var(--primary-blue);
        padding: 5px 12px;

        position: relative;
    }
    
    th:first-child, td:first-child {
        width: 5%;
        border-right: 1px solid var(--red);
        text-align: center;
        padding: 0;
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

export const ButtonDelete = styled.button ` 
    color: var(--gray);
    cursor: pointer;
    transition: .2s;
    padding: 5px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 5px;

    &:hover {
        background: var(--secondary-white);
    }

    svg {
        fill: var(--gray);
    }

`;

export const CreateTaskRow = styled.tr `

    display: ${props => props.open ? "table-row" : "none"};
    
    form input {
        background: var(--secondary-white);
        border-radius: 3px;
        padding: 5px;
    }

`;

