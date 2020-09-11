<script>
import UButton from '../u-button.vue';

export default { name: 'u-form-table-add-button', extends: UButton };
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
    width: 100%;
    text-align: center;
    padding: var(--button-padding-y) var(--button-padding-x);
    height: var(--button-height);
    line-height: calc(var(--button-height) - var(--button-border-width) * 2 - var(--button-padding-y) * 2);
    background: var(--button-background);
    color: var(--button-color);
    border: var(--button-border-width) solid var(--button-border-color);
    border-radius: var(--button-border-radius);
    transition: all var(--transition-duration-base);
}

.root::before {
    /* font-size: var(--form-table-button-font-size); */
    content: '+ ';
}

.root:hover {
    text-decoration: none;
    color: var(--button-color-hover);
    background: var(--button-background-hover);
    border-color: var(--button-border-color-hover);
    /* box-shadow: 0 0 8px rgba(13, 4, 8, 0.1); */
}

.root[disabled] {
    cursor: var(--cursor-not-allowed);
    background: var(--button-background-disabled);
    border-color: var(--button-border-color-disabled);
    color: var(--button-color-disabled);
    box-shadow: none;
}
</style>
