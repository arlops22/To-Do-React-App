import styled, { css } from 'styled-components';

export const TableRow = styled.tr `


    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"] + label {
        cursor: pointer;
        width: 1em;
        height: 1em;
        background: transparent;
        border: 2px solid var(--light-gray);
        border-radius: 2px;
        margin-left: 4px;
        transition: .2s;
        display: flex;
    }

    input[type="checkbox"] + label:hover {
        border: 2px solid var(--gray);
    }

    input[type="checkbox"]:checked + label {
        border: .5em solid var(--light-blue-hover);
    }

    input[type="checkbox"]:checked + label:hover {
        border: .5em solid var(--light-blue);
    }

    input[type="checkbox"]:checked + label:before {
        content: "";
        position: absolute;
        top: 16px;
        left: 6px;
        border-right: 3px solid transparent;
        border-bottom: 3px solid transparent;
        transform: rotate(45deg);
        transform-origin: 0% 100%;
        width: .2em;
        height: .5em;    
        border-color: var(--primary-white);
        transform: translate3d(0,-.5em,0) rotate(45deg);
    }

    .drag-button {
        position: absolute;
        left: -24px;
        top: 5px;
        padding: 4px 0;
        cursor: grab;
        border-radius: 3px;
        display: flex;
        align-items: center;
        transition: .2s;
        opacity: 0;
    }

    .drag-button:hover {
        background: var(--secondary-white);
    }

    .drag-button svg {
        fill: var(--light-gray);
    }

    &:hover > td .drag-button {
        opacity: 100;
    }

    ${props => props.isDragging && css `

        background: transparent;
        opacity: 0;
        cursor: grabbing;

        td {
            border-right: 0;
        }
    `}  

`;

export const TaskData = styled.p `

    padding: 5px;
    transition: .2s;

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
        fill: var(--gray);
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