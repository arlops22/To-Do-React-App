import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-width: 100vw;
        max-height: 100vh;

        background: var(--white);
    }

    *, input, button {
        border: none;
        background: none;
        outline: 0;
        color: var(--black);

        font: 400 16px Ubuntu, sans-serif;
    }

    :root {
        --back: #353535;
        --white: #fcfcfc;
    }

`

export default GlobalStyle;