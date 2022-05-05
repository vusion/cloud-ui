<script>
import ULink from '../u-link.vue';

export default {
    name: 'u-button',
    extends: ULink,
};
</script>

<style module>
.root {
    /* Correct inability to style clickable `input` types in iOS. */
    -webkit-appearance: none;
    /* Remove margins in Chrome, Safari and Opera. */
    margin: 0;
    /* Address `overflow` set to `hidden` in IE+. */
    overflow: visible;
    /* Correct `font` properties not being inherited for `button`. */
    font: inherit;
    /* Address inconsistent `text-transform` inheritance which is only inherit in Firefox and IE. */
    text-transform: none;
    /* Required for `a`. */
    text-decoration: none;
    /* Use pointer cursor at any time. */
    cursor: var(--cursor-pointer);
    user-select: none;
    /* Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214 */
    display: inline-block;
    text-align: center;
    padding: var(--button-padding-y) var(--button-padding-x);
    height: var(--button-height);
    line-height: calc(var(--button-height) - var(--button-border-width) * 2 - var(--button-padding-y) * 2);
    background: var(--button-background);
    color: var(--button-color);
    border: var(--button-border-width) solid var(--button-border-color);
    border-radius: var(--button-border-radius);
    transition: all var(--transition-duration-base);
    font-weight: var(--button-font-weight);
    font-size: var(--button-font-size);
    min-width: var(--button-min-width);
}

.root:hover {
    /* Required for `a` elements */
    text-decoration: none;
    color: var(--button-color-hover);
    background: var(--button-background-hover);
    border-color: var(--button-border-color-hover);
}

.root:focus {
    /* Remove default focus style */
    outline: var(--focus-outline);
    box-shadow: var(--button-box-shadow-focus);
    border-color: var(--button-border-color-active);
    /* Required for `a` elements */
    text-decoration: none;
}

.root:active {
    background: var(--button-background-active);
    border-color: var(--button-border-color-active);
    color: var(--button-color-active);
    box-shadow: var(--button-box-shadow-active);
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--button-background-disabled);
    border-color: var(--button-border-color-disabled);
    color: var(--button-color-disabled);
    box-shadow: none;
}

.root[dashed] {
    border-style: dashed;
}

/**
 * Color extends
 */
.root[color="primary"] {
    background: var(--button-background-primary);
    color: var(--button-color-primary);
    border-color: var(--button-border-color-primary);
}

.root[color="primary"]:hover {
    background: var(--button-background-primary-hover);
    border-color: var(--button-border-color-primary-hover);
    color: var(--button-color-primary-hover);
}

.root[color="primary"]:focus {
    box-shadow: var(--button-box-shadow-focus-primary);
}

.root[color="primary"]:active {
    background: var(--button-background-primary-active);
    border-color: var(--button-border-color-primary-active);
    color: var(--button-color-primary-active);
    box-shadow: var(--button-box-shadow-active-primary);
}

.root[color="primary"][disabled] {
    background: var(--button-background-primary-disabled);
    border-color: var(--button-border-color-primary-disabled);
    color: var(--button-color-primary-disabled);
    box-shadow: none;
}

.root[color="primary_secondary"] {
    background: var(--button-background-primary-secondary);
    color: var(--button-color-primary-secondary);
    border-color: var(--button-border-color-primary-secondary);
}

.root[color="primary_secondary"]:hover {
    background: var(--button-background-primary-secondary-hover);
    border-color: var(--button-border-color-primary-secondary-hover);
    color: var(--button-color-primary-secondary-hover);
}

.root[color="primary_secondary"]:focus {
    box-shadow: var(--button-box-shadow-focus-primary-secondary);
}

.root[color="primary_secondary"]:active {
    background: var(--button-background-primary-secondary-active);
    border-color: var(--button-border-color-primary-secondary-active);
    color: var(--button-color-primary-secondary-active);
    box-shadow: var(--button-box-shadow-active-primary-secondary);
}

.root[color="primary_secondary"][disabled] {
    background: var(--button-background-primary-secondary-disabled);
    border-color: var(--button-border-color-primary-secondary-disabled);
    color: var(--button-color-primary-secondary-disabled);
    box-shadow: none;
}

.root[grey-border] {
    border-color: var(--button-grey-border-color);
}

.root[grey-border]:hover {
    border-color: var(--button-grey-border-color-hover);
}

.root[grey-border][disabled] {
    border-color: var(--button-grey-border-color);
}

.root[color="danger"] {
    background: var(--button-background-danger);
    color: var(--button-color-danger);
    border-color: var(--button-border-color-danger);
}

.root[color="danger"]:hover {
    background: var(--button-background-danger-hover);
    border-color: var(--button-border-color-danger-hover);
    color: var(--button-color-danger-hover);
}

.root[color="danger"]:focus {
    box-shadow: var(--button-box-shadow-focus-danger);
}

.root[color="danger"]:active {
    background: var(--button-background-danger-active);
    border-color: var(--button-border-color-danger-active);
    color: var(--button-color-danger-active);
    box-shadow: var(--button-box-shadow-active-danger);
}

.root[color="danger"][disabled] {
    background: var(--button-background-danger-disabled);
    border-color: var(--button-border-color-danger-disabled);
    color: var(--button-color-danger-disabled);
    box-shadow: none;
}

.root[color="danger_secondary"] {
    background: var(--button-background-danger-secondary);
    color: var(--button-color-danger-secondary);
    border-color: var(--button-border-color-danger-secondary);
}

.root[color="danger_secondary"]:hover {
    background: var(--button-background-danger-secondary-hover);
    border-color: var(--button-border-color-danger-secondary-hover);
    color: var(--button-color-danger-secondary-hover);
}

.root[color="danger_secondary"]:focus {
    box-shadow: var(--button-box-shadow-focus-danger-secondary);
}

.root[color="danger_secondary"]:active {
    background: var(--button-background-danger-secondary-active);
    border-color: var(--button-border-color-danger-secondary-active);
    color: var(--button-color-danger-secondary-active);
    box-shadow: var(--button-box-shadow-active-danger-secondary);
}

.root[color="danger_secondary"][disabled] {
    background: var(--button-background-danger-secondary-disabled);
    border-color: var(--button-border-color-danger-secondary-disabled);
    color: var(--button-color-danger-secondary-disabled);
    box-shadow: none;
}

/**
 * Size extends
 */
.root[size="mini"] {
    height: var(--button-height-mini);
    line-height: calc(var(--button-height-mini) - var(--button-border-width) * 2 - var(--button-padding-y-mini) * 2);
    padding: var(--button-padding-y-mini) var(--button-padding-x-mini);
    font-size: var(--button-font-size-mini);
}

.root[size="mini"] [class^="i-ico_lcp-iconv"] {
    font-size: var(--button-font-size-mini);
}

.root[size="small"] {
    height: var(--button-height-small);
    line-height: calc(var(--button-height-small) - var(--button-border-width) * 2 - var(--button-padding-y-small) * 2);
    padding: var(--button-padding-y-small) var(--button-padding-x-small);
    font-size: var(--button-font-size-small);
}

.root[size="medium"] {
    height: var(--button-height-medium);
    line-height: calc(var(--button-height-medium) - var(--button-border-width) * 2 - var(--button-padding-y-medium) * 2);
    padding: var(--button-padding-y-medium) var(--button-padding-x-medium);
    font-size: var(--button-font-size-medium);
}

.root[size="large"] {
    height: var(--button-height-large);
    line-height: calc(var(--button-height-large) - var(--button-border-width) * 2 - var(--button-padding-y-large) * 2);
    padding: var(--button-padding-y-large) var(--button-padding-x-large);
    font-size: var(--button-font-size-large);
}

.root[size="huge"] {
    height: var(--button-height-huge);
    line-height: calc(var(--button-height-huge) - var(--button-border-width) * 2 - var(--button-padding-y-huge) * 2);
    padding: var(--button-padding-y-huge) var(--button-padding-x-huge);
    font-size: var(--button-font-size-huge);
}

.root[square], /* @deprecated */
.root[shape="square"] {
    width: var(--button-height);
    min-width: auto;
    padding: 0;
}

.root[shape="circle"] {
    width: var(--button-height);
    min-width: auto;
    padding: 0;
    border-radius: 1000px;
}

.root[shape="round"] {
    border-radius: 1000px;
}

.root[size="mini"][shape="square"], .root[size="mini"][shape="circle"] {
    width: var(--button-height-mini);
}

.root[size="small"][shape="square"], .root[size="small"][shape="circle"] {
    width: var(--button-height-small);
}

.root[size="large"][shape="square"], .root[size="large"][shape="circle"] {
    width: var(--button-height-large);
}

.root[size="huge"][shape="square"], .root[size="huge"][shape="circle"] {
    width: var(--button-height-huge);
}

/**
 * Icon extends
 */
/* .root[icon="create"]::before {
    icon-font: url('../i-icon.vue/icons/create.svg');
}

.root[icon="refresh"]::before {
    icon-font: url('../i-icon.vue/icons/refresh.svg');
}

.root[icon="success"]::before {
    icon-font: url('../i-icon.vue/assets/success.svg');
    font-size: 18px;
    vertical-align: -2px;
} */

.root[icon="loading"]::before, /* @deprecated */
.root[loading]::before {
    content: '';
    font: inherit;
    display: inline-block;
    vertical-align: -4px;
    width: var(--button-loading-size);
    height: var(--button-loading-size);
    border: var(--button-loading-width) solid currentColor;
    border-top-color: transparent;
    border-radius: var(--button-loading-size);
    animation: rotate var(--spinner-animation-duration) ease-in-out var(--spinner-animation-delay) infinite;
}

/* .root[icon]:not(:empty)::before, .root[loading]:not(:empty)::before {
    margin-right: 6px;
} */
.root[loading]::before{
    margin: 0 4px;
}

@keyframes rotate {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
}

.root[display="block"] {
    display: block;
    width: auto;
}
.root [class^="i-ico_lcp-iconv"] {
    margin: 0 4px;
    vertical-align: top;
}
.root[loading] [class^="i-ico_lcp-iconv"]{
    display: none;
}
</style>
