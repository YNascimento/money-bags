import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    html,body, #root{
        max-height: 100vh;
        max-width: 100vw;

        width:100%;
        height: 100%;
    }

    body{
        background: #eee;
        color: #333;
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }
`;
