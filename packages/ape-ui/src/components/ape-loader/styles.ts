import { css } from 'lit';

export default css`
    :host * {
        box-sizing: border-box;
    }
    :host([color='primary']) {
        --color: var(--palette-primary);
    }
    :host([color='text']) {
        --color: var(--palette-text);
    }
    :host([color='disabled']) {
        --color: var(--palette-text-disabled);
    }
    :host([size='small']) {
        --size-block: 40px;
        --size-dot: 6.66667px;
        --left-1: 4px;
        --left-2: 16px;
        --left-3: 28px;
        --translate: 12px;
    }
    :host([size='medium']) {
        --size-block: 60px;
        --size-dot: 10px;
        --left-1: 6px;
        --left-2: 24px;
        --left-3: 42px;
        --translate: 18px;
    }
    :host([size='large']) {
        --size-block: 80px;
        --size-dot: 13.33333px;
        --left-1: 8px;
        --left-2: 32px;
        --left-3: 56px;
        --translate: 24px;
    }

    .ellipsis {
        display: inline-block;
        position: relative;
        width: var(--size-block);
    }

    .ellipsis div {
        position: absolute;
        width: var(--size-dot);
        height: var(--size-dot);
        border-radius: 50%;
        background: var(--color);
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
        &:nth-of-type(1) {
            left: var(--left-1);
            animation: ellipsis1 0.6s infinite;
        }

        &:nth-of-type(2) {
            left: var(--left-1);
            animation: ellipsis2 0.6s infinite;
        }

        &:nth-of-type(3) {
            left: var(--left-2);
            animation: ellipsis2 0.6s infinite;
        }

        &:nth-of-type(4) {
            left: var(--left-3);
            animation: ellipsis3 0.6s infinite;
        }
    }

    @keyframes ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(var(--translate), 0);
        }
    }

    @keyframes ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
`;
