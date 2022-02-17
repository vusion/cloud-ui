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
    },
};
</script>

<style module>
@extends '../u-steps.vue/index.css';

.radio {
    background: var(--steps-seleatable-radio-background);
    border: 1px solid var(--steps-seleatable-radio-border-color);
    vertical-align: middle;
}

.item {
    display: inline-block;
    width: auto;
    white-space: nowrap;
}

.item:first-child {
    width: auto !important;
}

.item::before {
    position: static;
    display: inline-block;
    vertical-align: middle;
    width: var(--steps-seleatable-item-width);
}

.root[size="auto"] .item::before {
    width: var(--steps-seleatable-item-width-auto);
}

.radio:hover {
    border-color: var(--steps-seleatable-item-radio-border-color-hover);
}

.root[readonly] .radio,
.root[disabled] .radio,
.item[readonly] .radio,
.item[disabled] .radio {
    border-color: var(--steps-seleatable-radio-border-color-disabled);
}

.item-body {
    background: var(--steps-seleatable-item-body-background);
}

.item[passed] .radio {
    border-color: var(--steps-seleatable-border-color-passed);
}

.item[passed] .radio::before {
    position: relative;
    top: -1px;
    icon-font: url('./assets/pass.svg');
}

.item[selected] .radio {
    background: var(--steps-seleatable-radio-background-selected);
    border: 1px solid var(--steps-seleatable-border-color-passed);
}

.item[selected] .radio::before {
    display: inline-block;
    content: '';
    width: var(--steps-seleatable-radio-dot-width-selected);
    height: var(--steps-seleatable-radio-dot-height-selected);
    border-radius: 100px;
    background: var(--steps-seleatable-background-selected);
    top: 0;
}
</style>
