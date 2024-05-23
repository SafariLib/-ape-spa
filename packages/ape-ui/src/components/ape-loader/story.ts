import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { PaletteColor, RelativeSize } from '../../components-utils/types';
import './component';

const meta: Meta = {
    title: 'Loader/ape-loader',
    component: 'ape-loader',
    render: args => html` <ape-loader size=${args.size} color=${args.color}></ape-loader> `,
    argTypes: {
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
    color: PaletteColor;
    size: RelativeSize;
}>;

export const small: Story = {
    args: {
        size: 'small',
        color: 'primary',
    },
};

export const medium: Story = {
    args: {
        size: 'medium',
        color: 'primary',
    },
};

export const large: Story = {
    args: {
        size: 'large',
        color: 'primary',
    },
};

export default meta;
