import styled from 'styled-components';

export const TaskTable = styled.table `

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

export const TaskData = styled.p `

    padding: 5px;

    text-decoration: ${props => props.status ? 'line-through' : 'none'};
    color: ${props => props.status ? 'var(--gray)' : 'var(--black)'};
`;

export const MenuAction = styled.div `
    
    position: absolute;
    right: 0;
    top: 5px;

    button {
        cursor: pointer;
        transition: .2s;
        padding: 5px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        margin: 0 auto;
    }

    button:hover {
        background: var(--secondary-white);
    }

    button svg {
        fill: var(--dark-gray);
    }

`;

export const PopUpMenu = styled.ul `

    list-style: none;
    background: var(--primary-white);
    box-shadow: 0 0 10px var(--light-gray);
    border-radius: 3px;
    width: 150px;
    padding: 10px 0;
    position: absolute;
    right: calc((0px - 150px/2) + 13px);
    transition: opacity .2s ease;
    z-index: 1;

    display: ${props => props.open ? 'block' : 'none'};

    li button {
        cursor: pointer;
        width: 100%;
        padding: 5px 10px;
        text-align: left;

        display: flex;
        align-items: center;
    }

    li button:hover {
        background: var(--secondary-white);
    }

    li button svg {
        margin-right: 6px;
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

export const CreateTaskRow = styled.tr `

    display: ${props => props.open ? "table-row" : "none"};
    
    form input {
        background: var(--secondary-white);
        border-radius: 3px;
        padding: 5px;
    }

`;

export const FormUpdateTask = styled.form `

    padding: 5px 10px;
    background: var(--primary-white);
    border-radius: 3px;
    position: absolute;
    left: 36px;
    z-index: 1000;
    box-shadow: 0 0 10px var(--light-gray);
    display: ${props => props.open ? 'block' : 'none'};

    input {
        background: var(--secondary-white);
        border-radius: 3px;
        padding: 5px;
        border: 1px solid var(--light-gray);
    }

`;