import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit/static-html.js';
import './component';
import { fonts } from '../../components-utils/stylesheets';

const meta: Meta = {
    title: 'Inputs/ape-switch',
    component: 'ape-switch',
    render: args => html`
        <style>
            ${fonts} .wrapper {
                display: flex;
                flex-direction: column;
                gap: 1.2rem;
            }
            .value-render {
                display: flex;
                gap: 1.2rem;
                & :nth-child(odd) {
                    width: 6rem;
                }
            }
            form {
                display: flex;
                align-items: center;
                gap: 1.2rem;
            }
        </style>
        <div class="wrapper">
            ${(() => {
                if (args.isForm)
                    return html`
                        <div class="value-render">
                            <p>Submitted:</p>
                            <p id="render-value-submitted"></p>
                        </div>
                        <form
                            @submit=${(e: Event & { target: HTMLFormElement }) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const submitted = document.getElementById('render-value-submitted');
                                if (submitted)
                                    submitted.textContent = JSON.stringify(Object.fromEntries(formData));
                            }}>
                            <ape-switch name="switch-test"></ape-switch>
                            <button type="submit">Submit</button>
                        </form>
                    `;
                return html`
                    <div class="value-render">
                        <p>State value:</p>
                        <p id="render-value-checked"></p>
                    </div>
                    <ape-switch
                        @change=${(e: CustomEvent & { target: HTMLInputElement }) => {
                            const renderValue = document.getElementById('render-value-checked');
                            if (renderValue) renderValue.textContent = e.detail.toString();
                        }}
                        name="switch-test"></ape-switch>
                `;
            })()}
        </div>
    `,
    argTypes: {},
};

type Story = StoryObj;

export const WithState: Story = { args: {} };
export const WithForm: Story = { args: { isForm: true } };
export default meta;
