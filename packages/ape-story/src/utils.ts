export function html(strings: TemplateStringsArray, ...values: any[]) {
    return strings.reduce((prev, curr, i) => prev + curr + (values[i] ?? ''), '');
}

export function css(strings: TemplateStringsArray, ...values: any[]) {
    return strings.reduce((prev, curr, i) => prev + curr + (values[i] ?? ''), '');
}
