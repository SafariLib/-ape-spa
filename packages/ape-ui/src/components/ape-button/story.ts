import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { ApeButtonVariant } from '../../utils';

const meta: Meta = {
    title: 'Button/ape-button',
    component: 'ape-button',
};
type Story = StoryObj<{
    children?: string;
    variant?: ApeButtonVariant;
    loading?: boolean;
    disabled?: boolean;
    selected?: boolean;
    color?: string;
    onClick?: () => void;
}>;

export const Primary: Story = {
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
        color: {
            control: { type: 'color' },
        },
        variant: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'text'],
        },
    },
    args: {
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
        loading: false,
        selected: false,
    },
    render: args => html`
    <ape-button
        variant=${args.variant!}
        color=${args.color!}
        ?loading=${args.loading}
        ?disabled=${args.disabled}
        ?selected=${args.selected}
        @click=${() => (args.onClick ? args.onClick() : console.log('clicked'))}>
        ${args.children ?? ''}
    </ape-button>
`,
};

export const Selectable: Story = {
    // TODO: Add css variables tests
    render: _ => html`
        <ape-button>test</ape-button>
`,
};

export default meta;
