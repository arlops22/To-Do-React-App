import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div ` 
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 3em;
        font-weight: bold;
        margin: 1em 0;
    }
`;

export const Form = styled.form `
    width: 25vw;
`;

export const InputGroup = styled.div `
    display: flex;
    flex-direction: column;

    label {
        margin-bottom: 8px;
        color: var(--light-gray);
    }

    input {
        padding: 10px;
        border-radius: 3px;
        border: 1px solid var(--secondary-white);
        margin-bottom: 1em;
        transition: .3s;
    }

    input:focus {
        border-color: var(--light-gray);
    }

`;

export const Button = styled.button `

    width: 100%;
    background: var(--red);
    border-radius: 3px;
    color: var(--secondary-white);
    padding: 10px 0;
    cursor: pointer;
    display: block;
    margin-bottom: 1em;
    transition: .2s;
    
    &:hover, &:focus {
        background: var(--red-hover);
    }

`;

export const SecondaryButton = styled(Link) `
    width: 100%;
    background: var(--light-blue);
    border-radius: 3px;
    color: var(--secondary-white);
    padding: 10px 0;
    cursor: pointer;
    text-decoration: none;
    display: block;
    text-align: center;
    transition: .2s;
    
    &:hover, &:focus {
        background: var(--light-blue-hover);
    }
`;