import { customElement, html, LitElement, property, TemplateResult } from "lit-element";

@customElement("property-bug")
export class PropertyBug extends LitElement {
    @property() text: string;

    constructor() {
        super();
        // delete this["text"]; // Uncomment this to fix the property.
        this.text = "This text should not be displayed.";
    }

    updated(): void {
        console.log("Updated:", this.text)
    }

    render(): TemplateResult {
        return html`<p>${this.text}</p>`;
    }
}

