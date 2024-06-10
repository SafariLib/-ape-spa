import { css } from 'lit';

export default css`
    :host {
        --internal-bg-color: var(--ape-button-bg-color, var(--palette-primary));
        --internal-border-color: var(--ape-button-border-color, var(--palette-primary));
        --internal-selected-color: var(--ape-button-selected-color, inherit);
        --internal-selected-bg-color: var(--ape-button-selected-bg-color, var(--palette-primary-light));
        --internal-selected-border-color: var(--ape-button-selected-border-color, var(--palette-primary-light));
        --internal-disabled-color: var(--ape-button-disabled-color, var(--palette-text-disabled));
        --internal-disabled-border-color: var(--ape-button-disabled-border-color, var(--palette-background-disabled));
        --internal-secondary-bg-color: var(--ape-button-bg-color, transparent);
        --internal-secondary-border-color: var(--ape-button-border-color, var(--palette-text));
        --internal-text-color: var(--ape-button-color, var(--palette-text));
        --internal-text-selected-bg-color: var(--ape-button-selected-bg-color, var(--palette-background-disabled));
        --internal-text-selected-color: var(--ape-button-selected-color, var(--palette-text))
    }

    .ape-button {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        cursor: pointer;
        position: relative;
        white-space: nowrap;

        text-decoration: var(--ape-button-text-decoration, none);
        min-width: var(--ape-button-min-width, 5rem);
        min-height: var(--ape-button-min-height, 1.8125rem);
        height: var(--ape-button-height, unset);
        width: var(--ape-button-width, unset);
        padding: var(--ape-button-padding, 0.25rem 1rem);
        border: var(--ape-button-border, 1px solid);
        border-radius: var(--ape-button-border-radius, var(--spacing-radius-1));
        color: var(--ape-button-color, inherit);
        transition: var(--ape-button-transitions, all 0.3s ease);

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
        border-color: var(--internal-border-color);
        background-color: var(--internal-bg-color);
        &:hover {
            background-color: var(--internal-selected-bg-color);
            border-color: var(--internal-selected-border-color);
            color: var(--internal-selected-color);
        }
    }
    :host([variant='primary']):host([disabled]) .ape-button {
        background-color: var(--ape-button-disabled-bg-color, var(--palette-background-disabled));
        border-color: var(--internal-disabled-border-color);
        color: var(--internal-disabled-color);
    }
    :host([variant='primary']):host([selected]) .ape-button {
        background-color: var(--internal-selected-bg-color);
        border-color: var(--internal-selected-border-color);
        color: var(--internal-selected-color);
    }

    /* Secondary button */
    :host([variant='secondary']) .ape-button {
        border-color: var(--internal-secondary-border-color);
        background-color: var(--internal-secondary-bg-color);
        &:hover {
            border-color: var(--internal-selected-border-color);
        }
    }
    :host([variant='secondary']):host([disabled]) .ape-button {
        border-color: var(--internal-disabled-border-color);
        color: var(--internal-disabled-color);
    }
    :host([variant='secondary']):host([selected]) .ape-button {
        border-color: var(--internal-selected-border-color);
        color: var(--internal-selected-color);
    }

    /* Text button */
    :host([variant='text']) .ape-button {
        border-color: transparent;
        background-color: transparent;
        color: var(--internal-text-color);
        &:hover {
            background-color: var(--internal-text-selected-bg-color);
            color: var(--internal-text-selected-color);
        }
    }
    :host([variant='text']):host([selected]) .ape-button {
        background-color: var(--internal-text-selected-bg-color);
        color: var(--internal-text-selected-color);
    }
    :host([variant='text']):host([disabled]) .ape-button {
        color: var(--internal-disabled-color);
    }

    /* Loading state */
    :host([loading]) .ape-button {
        cursor: default;
        pointer-events: none;
        & ape-loader {
            position: absolute;
            top: -15%;
        }
        & .ape-button_content {
            opacity: 0;
        }
    }

    /* Disabled state */
    :host([disabled]) .ape-button {
        pointer-events: none;
        cursor: default;
    }
`;
