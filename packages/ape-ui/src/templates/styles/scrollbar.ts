import { css } from '../../utils.js';

// noinspection CssUnresolvedCustomProperty
export default css`
    * {
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px var(--palette-shadow);
            -webkit-box-shadow: inset 0 0 calc(var(--text-size) * 0.25) var(--palette-shadow);
            border-radius: 10px;
            background-color: var(--palette-background);
        }

        &::-webkit-scrollbar {
            width: calc(var(--text-size) * 0.5);
            background-color: var(--palette-background);
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            box-shadow: inset 0 0 6px var(--palette-shadow);
            -webkit-box-shadow: inset 0 0 calc(var(--text-size) * 0.25) var(--palette-shadow);
            background-color: var(--palette-background-disabled);
        }
    }
`;
