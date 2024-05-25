import { css } from 'lit';

export const demoStyles = css`
    main {
        font-family: 'Arial', sans-serif;
        display: flex;
        flex-direction: column;
        color: #fff;
        padding: 1rem;
        gap: 1rem;
    }

    .navigation {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    hr {
        width: 100%;
    }

    a {
        color: #00a6cb;
        text-decoration: none;
        font-size: small;
        &:hover {
            text-decoration: underline;
        }
    }
`;
