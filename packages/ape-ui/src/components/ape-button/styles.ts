import { css } from 'lit';

export default css`
    .ape-button {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        text-decoration: none;
        cursor: pointer;
        position: relative;

        min-width: 5rem;
        min-height: 1.8125rem;
        padding: 0.25rem 1rem;

        border: 1px solid;
        border-radius: var(--spacing-radius-1);
        color: inherit;

        white-space: nowrap;

        & sf-loader {
            position: absolute;
            left: 50%;
            top: 16.666%;
            transform: translate(-50%, -50%);
        }
    }

    button.ape-button {
        user-select: none;
    }

    /* Primary button */
    :host([variant='primary']) .ape-button {
        border-color: var(--palette-primary);
        background-color: var(--palette-primary);
        &:hover {
            background-color: var(--palette-primary-dark);
            border-color: var(--palette-primary-dark);
        }
    }
    :host([variant='primary']):host([disabled]) .ape-button {
        background-color: var(--palette-background-disabled);
        border-color: var(--palette-background-disabled);
    }
    :host([variant='primary']):host([selected]) .ape-button {
        background-color: var(--palette-primary-dark);
        border-color: var(--palette-primary-dark);
    }

    /* Secondary button */
    :host([variant='secondary']) .ape-button {
        border-color: var(--palette-text);
        background-color: transparent;
        &:hover {
            border-color: var(--palette-primary-dark);
        }
    }
    :host([variant='secondary']):host([disabled]) .ape-button {
        border-color: var(--palette-background-disabled);
    }
    :host([variant='secondary']):host([selected]) .ape-button {
        border-color: var(--palette-primary-dark);
    }

    /* Text button */
    :host([variant='text']) .ape-button {
        border-color: transparent;
        background-color: transparent;
        &:hover {
            background-color: var(--palette-background-disabled);
        }
    }
    :host([variant='text']):host([selected]) .ape-button {
        background-color: var(--palette-background-disabled);
    }

    /* Loading state */
    :host([loading]) .ape-button {
        cursor: default;
        pointer-events: none;
        & .ape-button_content {
            opacity: 0;
        }
    }

    /* Disabled state */
    :host([disabled]) .ape-button {
        pointer-events: none;
        cursor: default;
        color: var(--palette-text-disabled);
    }
`;
