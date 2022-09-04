import { LitElement,html } from "lit";
import {customElement} from 'lit/decorators.js'

@customElement("app-element")
export class AppElement extends LitElement{

    protected override render(): unknown {
        return html`
            <div>minimal web-component app</div>
        `
    }
}


// declaration map for other components
// declare global {
//     interface HTMLElementTagNameMap {
//       'my-element': MyElement;
//     }
//   }