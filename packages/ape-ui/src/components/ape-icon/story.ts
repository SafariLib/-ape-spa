import type { Args, Meta, StoryObj } from '@storybook/web-components';
import { html, literal, unsafeStatic } from 'lit/static-html.js';
import type {
    Direction,
    IconVariant,
    PaletteColor,
    RelativeSizeOrFullWidth,
} from '../../components-utils/types';
import Icons from './index';

const renderIcons = (args: Args) => html`
    <div class="icons-row">
        ${Object.keys(Icons).map(icon => {
            const instance = new Icons[icon as keyof typeof Icons]();
            const tagName = literal`${unsafeStatic(instance.getElementTagName())}`;
            return html`
                <${tagName} variant="${args.variant}" color="${args.color}" size="${args.size}"></${tagName}>
            `;
        })}
    </div>
`;

const meta: Meta = {
    title: 'Icon/ape-icon',
    component: 'ape-icon',
    render: args => html`
        <style>
            .icons-container {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .icons-row {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
            }
            .icons-actions {
                display: flex;
                gap: 1rem;
            }
            .resizable {
                width: 100px;
                height: 100px;
                border: 1px solid red;
                resize: both;
                overflow: hidden;
            }
        </style>
        <div class="icons-container">
            ${(() => {
                if (args.size === 'fullwidth')
                    return html`
                        <div class="resizable">
                            <ape-icon-account size="fullwidth"></ape-icon-account>
                        </div>
                    `;
                if (args.animation) {
                    const doAnimate = (direction: Direction) => {
                        const element = document.getElementById('arrow-icon');
                        const animatedElement = document.getElementById('arrow-icon-animated');
                        element?.setAttribute('direction', direction);
                        animatedElement?.setAttribute('direction', direction);
                    };

                    return html`
                        <div class="icons-actions">
                            <button @click=${() => doAnimate('up')}>Up</button>
                            <button @click=${() => doAnimate('down')}>Down</button>
                            <button @click=${() => doAnimate('left')}>Left</button>
                            <button @click=${() => doAnimate('right')}>Right</button>
                        </div>
                        <ape-icon-arrow
                            id="arrow-icon-animated"
                            size="${args.size}"
                            direction="up"></ape-icon-arrow>
                        <ape-icon-arrow
                            id="arrow-icon"
                            size="${args.size}"
                            direction="up"
                            no-animation></ape-icon-arrow>
                    `;
                }
                return html`
                    ${renderIcons({ ...args, variant: 'filled', color: 'disabled' })}
                    ${renderIcons({ ...args, variant: 'outlined', color: 'disabled' })}
                    ${renderIcons({ ...args, variant: 'filled', color: 'text' })}
                    ${renderIcons({ ...args, variant: 'outlined', color: 'text' })}
                    ${renderIcons({ ...args, variant: 'filled', color: 'primary' })}
                    ${renderIcons({ ...args, variant: 'outlined', color: 'primary' })}
                `;
            })()}
        </div>
    `,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['outlined', 'filled'],
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'text', 'disabled'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
};

type Story = StoryObj<{
    variant: IconVariant;
    color: PaletteColor;
    size: RelativeSizeOrFullWidth;
    animation: boolean;
}>;

export const small: Story = { args: { size: 'small' } };
export const medium: Story = { args: { size: 'medium' } };
export const large: Story = { args: { size: 'large' } };
export const fullwidth: Story = { args: { size: 'fullwidth' } };
export const animation: Story = { args: { size: 'medium', animation: true } };

export default meta;
