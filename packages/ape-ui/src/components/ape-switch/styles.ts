import { css } from 'lit';

export default css`
    :host {
        --switch-duration: 0.4s;
        --switch-width: 33px;
        --switch-height: 16px;
        --switch-slider-size: 12px;
        --switch-spacing: 2px;
        --switch-translate: 17px;
        --switch-border: 1px solid;
        height: var(--switch-height);
    }

    .ape-switch_label {
        cursor: pointer;
        display: inline-block;
        position: relative;
        width: var(--switch-width);
        height: var(--switch-height);
    }

    .ape-switch_input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .ape-switch_input:checked + .ape-switch_slider {
        background-color: var(--palette-primary);
    }

    .ape-switch_input:checked + .ape-switch_slider:before {
        -webkit-transform: translateX(var(--switch-translate));
        -ms-transform: translateX(var(--switch-translate));
        transform: translateX(var(--switch-translate));
    }

    .ape-switch_slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-sizing: border-box;
        background-color: var(--palette-background-disabled);
        border-radius: 50px;
        -webkit-transition: var(--switch-duration);
        transition: var(--switch-duration);
        box-shadow: inset 0 0 12px var(--palette-shadowlight-light);
        -webkit-box-shadow: inset 0 0 calc(var(--text-size) * 0.55) var(--palette-shadow-light);

        &:before {
            position: absolute;
            left: var(--switch-spacing);
            bottom: var(--switch-spacing);
            content: '';
            box-sizing: border-box;
            height: var(--switch-slider-size);
            width: var(--switch-slider-size);
            background-color: white;
            border-radius: 50%;
            -webkit-transition: var(--switch-duration);
            transition: var(--switch-duration);
        }
    }
`;
