import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { ApeButtonVariant } from '../../components-utils';
import './component';

const meta: Meta = {
    title: 'Button/ape-button',
    component: 'ape-button',
    render: args => html`
        <ape-button
            variant=${args.variant}
            ?loading=${args.loading}
            ?disabled=${args.disabled}
            ?selected=${args.selected}
            @click=${() => (args.onClick ? args.onClick() : console.log('clicked'))}>
            ${args.children ?? ''}
        </ape-button>
    `,
    argTypes: {
        children: {
            control: { type: 'text' },
        },
        loading: {
            control: { type: 'boolean' },
        },
        disabled: {
            control: { type: 'boolean' },
        },
        selected: {
            control: { type: 'boolean' },
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'text'],
        },
    },
};
type Story = StoryObj<{
    children?: string;
    variant?: ApeButtonVariant;
    loading?: boolean;
    disabled?: boolean;
    selected?: boolean;
    onClick?: () => void;
}>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};

export default meta;
