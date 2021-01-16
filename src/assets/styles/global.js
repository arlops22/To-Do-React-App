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

        background: var(--primary-white);
    }

    *, input, button {
        border: none;
        background: none;
        outline: 0;
        color: var(--black);

        font: 400 16px Ubuntu, sans-serif;
    }

    :root {
        --black: #1F1F1F;
        --dark-gray: #50514F;
        --gray: #999a98;
        --light-gray: #c4c4c4;
        --secondary-white: #efefef;
        --primary-white: #fcfcfc;
        --red: #f25f5c;
        --red-hover: #ef3c39;
        --primary-blue: #247ba0;
        --light-blue-hover: #50d8bf;
        --light-blue: #70C1B3;
    }

`

export default GlobalStyle;