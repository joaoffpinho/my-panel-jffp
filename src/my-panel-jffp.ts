import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";

@customElement('my-panel-jffp')
export class MyPanelJffp extends LitElement {
    static styles = css`
        .title {
            background: var(--my-panel-jffp-primary-bg, lightgreen);
            color: var(--my-panel-jffp-primary-color, #222);
            padding: 0.8rem;
            border-top-right-radius: 1rem;
            border-top-left-radius: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .body {
            padding: 1rem;
            border: 1px solid aquamarine
        }
    `
    @property({ type: String})
    title = 'WIDGET'

    @property({ type: String})
    icon = '1'

    @property({ type: Boolean})
    opened = false

    private onIconClickHandler(e: MouseEvent) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('icon-click', {bubbles: true}))
    }

    render() {
        return html`
        <div> 
            <div class="title" @click=${() => this.opened = !this.opened}> 
                ${this.title}
                <div @click=${this.onIconClickHandler}>${this.icon}</div>
            </div>

            ${when(
                this.opened,
                () => html`<div class="body"> 
                <slot></slot>
                </div>`
            )}

            
        </div>
        `
    }
}

declare global {
    interface HMTLElementTagNameMap {
        'my-panel-jffp': MyPanelJffp
    }
}