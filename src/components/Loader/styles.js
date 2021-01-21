import styled from 'styled-components';

export const Load = styled.div `
    border: 16px solid rgb(117, 117, 117, 0.3);
    border-top: 16px solid var(--gray-primary);
    margin: 3em 0 1em 0;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin .7s linear infinite;


    @keyframes spin {
        0% { 
            transform: rotate(0deg); 
        }
        100% { 
            transform: rotate(360deg); 
        }
    }
`;

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;