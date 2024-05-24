export default {
    stories: ['../src/**/story.@(ts)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chromatic-com/storybook'],
    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },
};
