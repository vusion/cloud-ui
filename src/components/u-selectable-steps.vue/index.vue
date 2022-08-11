<script>
import { USteps } from '../u-steps.vue';

export default {
    name: 'u-selectable-steps',
    childName: 'u-selectable-step',
    extends: USteps,
    props: {
        readonly: { type: Boolean, default: false },
        counter: { type: Boolean, default: false },
        layout: { type: String, default: 'inline' },
        direction: { type: String, default: 'horizontal' },
    },
};
</script>

<style module>
@extends '../u-steps.vue/index.css';

.head {
    display: flex;
    justify-content: center;
}

.item-body {
    display: flex;
    background: var(--steps-seleatable-item-body-background);
    cursor: default;
}

.title {
    cursor: var(--cursor-pointer);
}

.root[layout="inline"] .title {
    padding: 0 0 0 8px;
}

.item {
    display: flex;
    flex-direction: column;
    width: auto;
    white-space: nowrap;
    margin-right: 24px;
    cursor: default;
}

.item:last-child {
    width: auto !important;
    margin-right: 0;
}

.item .item-body::after {
    position: static;
    align-self: center;
    min-width: var(--steps-seleatable-item-width);
    margin-left: 24px;
    cursor: default;
}

.root[size="auto"] .item .item-body::after {
    min-width: auto;
    flex: 1;
}

.desc {
    text-align: left;
    padding-left: 32px;
    color: var(--brand-disabled-dark);
    white-space: normal;
}

.radio {
    flex-shrink: 0;
    vertical-align: middle;
    border: 1px solid var(--steps-seleatable-radio-border-color);
    margin-left: 0;
    background: var(--steps-seleatable-radio-background);
    cursor: var(--cursor-pointer);
}

.radio:hover {
    border-color: var(--steps-seleatable-item-radio-border-color-hover);
}

.root[disabled] .item:not([passed]):not([selected]) .radio,
.item[disabled]:not([passed]):not([selected]) .radio {
    border-color: var(--steps-seleatable-radio-border-color-disabled);
    background: var(--steps-item-radio-background-disabled);
}
.root[readonly] .radio,
.item[readonly] .radio,
.root[readonly] .title,
.item[readonly] .title {
    cursor: default;
}
.root[disabled] .radio,
.item[disabled] .radio,
.root[disabled] .title,
.item[disabled] .title {
    cursor: not-allowed;
}
.root[readonly] .item:not([passed]):not([selected]) .radio:hover,
.item[readonly]:not([passed]):not([selected]) .radio:hover{
    border-color: var(--steps-seleatable-radio-border-color);
}
.root[disabled] .item:not([passed]):not([selected]) .radio:hover,
.item[disabled]:not([passed]):not([selected]) .radio:hover {
    border-color: var(--steps-seleatable-radio-border-color-disabled);
}

.item[passed] .radio {
    border-color: var(--steps-seleatable-border-color-passed);
}

.item[passed] .radio::before {
    position: relative;
    top: -1px;
    icon-font: url("./assets/pass.svg");
}

.item[selected]:not([passed]) .radio {
    background: var(--steps-seleatable-radio-background-selected);
    border: 1px solid var(--steps-seleatable-border-color-passed);
}

.item[selected]:not([passed]) .radio::before {
    display: inline-block;
    content: "";
    width: var(--steps-seleatable-radio-dot-width-selected);
    height: var(--steps-seleatable-radio-dot-height-selected);
    border-radius: 100px;
    background: var(--steps-seleatable-background-selected);
    top: 0;
}

.root[direction="vertical"] {
    display: flex;
}

.root[direction="vertical"] .head {
    flex-direction: column;
    margin-right: 24px;
}

.root[direction="vertical"] .item {
    min-height: 200px;
    margin-right: 0;
    margin-bottom: 16px;
}

.root[direction="vertical"] .item:last-child {
    min-height: auto;
    margin-bottom: 0;
}

.root[direction="vertical"] .item .item-body::after {
    display: none;
}

.root[direction="vertical"] .item::after {
    content: "";
    width: 1px;
    height: 160px;
    display: block;
    pointer-events: none;
    background-color: var(--steps-item-radio-background);
    margin-left: 11px;
    margin: 16px 0 0 11px;
}

.root[direction="vertical"] .item[passed]::after {
    background-color: var(--steps-item-radio-background-passed);
}

.root[direction="vertical"] .item:last-child::after {
    display: none;
}

.root[direction="vertical"] .item[desc]::after {
    margin-top: 0;
}

.root[direction="vertical"] .body {
    margin-top: 0;
    flex: 1;
}
</style>
