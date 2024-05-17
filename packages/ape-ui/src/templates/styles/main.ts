import { css } from '../../utils.js';

// noinspection CssUnresolvedCustomProperty
export default css`
    html,
    body {
        margin: 0;
        padding: 0;
        background-color: var(--palette-background);
        height: 100%;
        width: 100%;
    }

    #root {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    .ape-story-navigation {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-right: 1px solid var(--palette-background-disabled);
        height: 100vh;
        overflow-y: auto;

        & nav {
            display: flex;
            flex-direction: column;
            gap: 0.45rem;
        }
    }

    .ape-story-main {
        box-sizing: border-box;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        & section {
            flex: 1;
            overflow-y: auto;
            padding: 1rem;
        }
    }

    .ape-story-header {
        padding: 1rem;
        box-shadow: 0 0.125rem 0.25rem var(--palette-shadow);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .ape-story-light-switch {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .ape-story-error {
        & h1 {
            margin: 1rem 0 1rem;
        }

        & em {
            background-color: var(--palette-text-disabled);
            padding: calc(var(--text-size) / 8) calc(var(--text-size) / 2);
            border-radius: var(--spacing-radius-1);
        }
    }
`;
