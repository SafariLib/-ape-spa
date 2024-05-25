export const renderTests = (element: HTMLElement, tests: Array<{ name: string; test: () => unknown }>) => {
    const testOutput = document.createElement('div');
    testOutput.innerHTML = tests
        .map(
            ({ name, test }, i) => `
                    ${i > 0 ? '<br />' : ''}
                    <code>
                        <strong>${name} =></strong> ${test()}
                    </code>
            `,
        )
        .join('');
    element.appendChild(testOutput);
};
