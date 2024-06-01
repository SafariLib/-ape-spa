import { Element } from './Element';

/**
 * Form associated element
 * Form-associated custom elements are custom elements that can be associated with a form.
 * @see https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element
 */
export class FormAssociatedElement extends Element {
    protected internals: ElementInternals;

    constructor() {
        super();
        this.internals = this.attachInternals();
    }

    static get formAssociated() {
        return true;
    }

    /**
     * Returns associated form data as Javascript object
     */
    protected getFormValues<T = any>() {
        const form = this.internals.form;
        const formData = new FormData(form ?? undefined);
        return form ? Object.fromEntries(formData) : ({} as T);
    }

    /**
     * Returns associated form data as FormData object
     */
    protected getFormData() {
        const form = this.internals.form;
        return form ? new FormData(form) : new FormData();
    }

    /**
     * Resets associated form
     */
    protected resetForm() {
        const form = this.internals.form;
        form && form.reset();
    }

    /**
     * Submits associated form
     */
    protected submitForm() {
        const form = this.internals.form;
        form && form.requestSubmit();
    }
}
