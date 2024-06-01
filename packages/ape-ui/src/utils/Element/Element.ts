import { LitElement } from 'lit';

export class Element extends LitElement {
    getElementTagName() {
        return this.tagName.toLowerCase();
    }
}
