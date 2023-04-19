import { LitElement } from "lit";
export declare class MyPanelJffp extends LitElement {
    static styles: import("lit").CSSResult;
    title: string;
    icon: string;
    opened: boolean;
    private onIconClickHandler;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HMTLElementTagNameMap {
        'my-panel-jffp': MyPanelJffp;
    }
}
