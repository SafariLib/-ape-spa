import { css } from 'lit';

export default css`
    :host {
        --internal-bg-color: var(--ape-button-bg-color, var(--palette-primary));
        --internal-border-color: var(--ape-button-border-color, var(--palette-primary));
        --internal-color: var(--ape-button-color, inherit);
        --internal-disabled-bg-color: var(--ape-button-disabled-bg-color, var(--palette-background-disabled));
        --internal-disabled-border-color: var(--ape-button-disabled-border-color, var(--palette-background-disabled));
        --internal-disabled-color: var(--ape-button-disabled-color, var(--palette-text-disabled));
        --internal-selected-bg-color: var(--ape-button-selected-bg-color, var(--palette-primary-light));
        --internal-selected-border-color: var(--ape-button-selected-border-color, var(--palette-primary-light));
        --internal-selected-color: var(--ape-button-selected-color, inherit);

        --internal-secondary-bg-color: var(--ape-button-secondary-bg-color, transparent);
        --internal-secondary-border-color: var(--ape-button-secondary-border-color, var(--palette-text));
        --internal-secondary-color: var(--ape-button-secondary-color, var(--palette-text));
        --internal-secondary-disabled-bg-color: var(--ape-button-secondary-disabled-bg-color, transparent);
        --internal-secondary-disabled-border-color: var(--ape-button-secondary-disabled-border-color, var(--internal-disabled-border-color));
        --internal-secondary-disabled-color: var(--ape-button-secondary-disabled-color, var(--internal-disabled-color));
        --internal-secondary-selected-bg-color: var(--ape-button-secondary-selected-bg-color, transparent);
        --internal-secondary-selected-border-color: var(--ape-button-secondary-selected-border-color, var(--internal-selected-border-color));
        --internal-secondary-selected-color: var(--ape-button-secondary-selected-color, var(--internal-selected-color));

        --internal-text-color: var(--ape-button-text-color, var(--palette-text));
        --internal-text-disabled-color: var(--ape-button-text-disabled-color, var(--palette-text-disabled));
        --internal-text-selected-bg-color: var(--ape-button-text-selected-bg-color, var(--palette-background-disabled));
        --internal-text-selected-color: var(--ape-button-text-selected-color, var(--palette-text));
        
        --internal-min-width: var(--ape-button-min-width, 5rem);
        --internal-min-height: var(--ape-button-min-height, 1.8125rem);
        --internal-height: var(--ape-button-height, unset);
        --internal-width: var(--ape-button-width, unset);
        --internal-padding: var(--ape-button-padding, 0.25rem 1rem);
        --internal-text-decoration: var(--ape-button-text-decoration, none);
        --internal-border-radius: var(--ape-button-border-radius, var(--spacing-radius-1));
        --internal-border: var(--ape-button-border, 1px solid);
        --internal-transition: var(--ape-button-transitions, all 0.3s ease);
    }

    .ape-button {
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        cursor: pointer;
        position: relative;
        white-space: nowrap;

        text-decoration: var(--internal-text-decoration);
        min-width: var(--internal-min-width);
        min-height: var(--internal-min-height);
        height: var(--internal-height);
        width: var(--internal-width);
        padding: var(--internal-padding);
        border: var(--internal-border);
        border-radius: var(--internal-border-radius);
        color: var(--internal-color);
        transition: var(--internal-transition);

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
        background-color: var(--internal-disabled-bg-color);
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
        border-color: var(--internal-secondary-disabled-border-color);
        color: var(--internal-secondary-disabled-color);
    }
    :host([variant='secondary']):host([selected]) .ape-button {
        border-color: var(--internal-secondary-selected-border-color);
        color: var(--internal-secondary-selected-color);
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
        color: var(--internal-text-disabled-color);
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
