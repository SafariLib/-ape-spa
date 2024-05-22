import { css } from 'lit';

export default css`
    :host {
        color: var(--palette-text);
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span,
    a,
    button,
    input,
    select,
    textarea {
        font-family: var(--text-font);
        font-weight: var(--text-weight-regular);
        font-size: var(--text-size);
        letter-spacing: var(--text-letter-spacing);
        margin: 0;
        padding: 0;
    }

    h1 {
        letter-spacing: calc(var(--text-letter-spacing) * 3.5);
        font-size: 1.5rem;
    }
    h2 {
        letter-spacing: calc(var(--text-letter-spacing) * 3);
        font-size: 1.275rem;
    }
    h3 {
        letter-spacing: calc(var(--text-letter-spacing) * 2.5);
        font-size: 1.075rem;
    }
`;
