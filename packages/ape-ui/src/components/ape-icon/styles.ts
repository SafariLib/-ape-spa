import { css } from 'lit';

export default css`
    :host {
        line-height: 0;

        --icon-transition: 0.4s;
        --icon-color: currentColor;
        --icon-size: 1rem;
    }
    :host([no-animation]) {
        --icon-transition: 0s;
    }
    :host([color='primary']) {
        --icon-color: var(--palette-primary);
    }
    :host([color='text']) {
        --icon-color: var(--palette-text);
    }
    :host([color='disabled']) {
        --icon-color: var(--palette-text-disabled);
    }
    :host([size='small']) svg {
        --icon-size: calc((var(--text-size) * 1.125));
    }
    :host([size='medium']) svg {
        --icon-size: calc((var(--text-size) * 1.75));
    }
    :host([size='large']) svg {
        --icon-size: calc((var(--text-size) * 3));
    }
    :host([size='fullwidth']) svg {
        --icon-size: 100%;
    }
    :host([direction='up']) svg {
        --icon-transform: rotate(360deg);
    }
    :host([direction='down']) svg {
        --icon-transform: rotate(180deg);
    }
    :host([direction='left']) svg {
        --icon-transform: rotate(270deg);
    }
    :host([direction='right']) svg {
        --icon-transform: rotate(90deg);
    }

    svg {
        color: var(--icon-color);
        fill: var(--icon-color);
        width: var(--icon-size);
        height: var(--icon-size);
        transform: var(--icon-transform);
        -webkit-transition: var(--icon-transition);
        transition: var(--icon-transition);
    }
`;
