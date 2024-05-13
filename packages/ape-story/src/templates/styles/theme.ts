import { css } from '../../utils.js';

export default css`
    :root {
        --palette-primary: #eda600;
        --palette-primary-dark: #ab7900;
        --palette-text: #222222;
        --palette-text-disabled: #707070;
        --palette-background: #fcfcfc;
        --palette-background-disabled: #c0c0c0;
        --palette-paper: #f0f0f0;
        --palette-shadow: #00000050;
        --palette-shadow-light: #00000020;

        --text-font: Roboto, sans-serif;
        --text-weight-regular: 400;
        --text-weight-medium: 500;
        --text-weight-bold: 700;
        --text-size: 16px;
        --text-size-caption: 12px;
        --text-letter-spacing: 0.0375rem;

        --spacing-radius-1: 0.3125rem;
    }

    [data-theme='dark'] {
        --palette-primary: #eda600;
        --palette-primary-dark: #ab7900;
        --palette-text: #f0f0f0;
        --palette-text-disabled: #707070;
        --palette-background: #181818;
        --palette-background-disabled: #353535;
        --palette-paper: #222222;
        --palette-shadow: #00000050;
        --palette-shadow-light: #00000020;
    }
`;
