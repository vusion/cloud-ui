``` vue
<template>
<div>
    <u-combo-pagination :page="page" show-total show-sizer show-jumper @change="page = $event.page"></u-combo-pagination>
    <u-button @click="page++">Click</u-button>
</div>
</template>
<script>
export default {
    data() {
        return {
            page: 3,
        };
    },
};
</script>
```
