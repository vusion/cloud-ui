<template>
<div :class="$style.root">
    <div :class="$style.side" v-if="!message.singleton">
        <u-sidebar :class="$style.sidebar" size="small">
            <u-checkbox :class="$style.checkbox" v-model="showAdvanced">显示高级组件</u-checkbox>
            <!-- <u-checkbox :class="$style.checkbox" v-model="showDeprecated">显示废弃组件</u-checkbox>
            <u-checkbox :class="$style.checkbox" v-model="showInfrequent">显示低频组件</u-checkbox> -->
            <template v-for="group in groups">
                <template v-if="!group.name">
                    <u-sidebar-item v-for="material in group.children" :key="material.name"
                        v-show="(!material.advanced || showAdvanced) && (!material.deprecated || showDeprecated) && (!material.infrequent || showInfrequent)"
                        :href="material.href" :to="material.to ? material.to : `/${type}/` + material.name" :target="material.target">
                        {{ camelName ? material.CamelName : material.name }}
                        <small :class="$style.alias">{{ material.alias }}</small>
                        &nbsp;<u-label size="small" v-if="material.advanced">高级</u-label>
                        &nbsp;<u-label size="small" v-if="material.deprecated" color="warning">废弃</u-label>
                        &nbsp;<u-label size="small" v-if="material.newest" color="primary">NEW</u-label>
                        &nbsp;<u-label size="small" v-if="material.infrequent">低频</u-label>
                    </u-sidebar-item>
                </template>
                <u-sidebar-group v-else :key="group.name" :title="group.name">
                    <u-sidebar-item v-for="material in group.children" :key="material.name"
                        v-show="(!material.advanced || showAdvanced) && (!material.deprecated || showDeprecated) && (!material.infrequent || showInfrequent)"
                        :href="material.href" :to="material.to ? material.to : `/${type}/` + material.name" :target="material.target">
                        {{ camelName ? material.CamelName : material.name }}
                        <small :class="$style.alias">{{ material.alias }}</small>
                        &nbsp;<u-label size="small" v-if="material.advanced">高级</u-label>
                        &nbsp;<u-label size="small" v-if="material.deprecated" color="warning">废弃</u-label>
                        &nbsp;<u-label size="small" v-if="material.newest" color="primary">NEW</u-label>
                        &nbsp;<u-label size="small" v-if="material.infrequent">低频</u-label>
                    </u-sidebar-item>
                </u-sidebar-group>
            </template>
        </u-sidebar>
    </div>
    <div :class="$style.main">
        <div :class="$style.content">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import message from '../message';
export default {
    name: 's-materials-view',
    props: {
        type: { type: String, default: 'components' },
        camelName: { type: Boolean, default: true },
        sidebarSize: { type: String, default: 'small' },
    },
    data() {
        return {
            message,
            groups: this.$docs.componentsGroups,
            showAdvanced: true,
            showDeprecated: false,
            showInfrequent: false,
        };
    },
};
</script>

<style module>
.side {
    position: fixed;
    width: var(--sidebar-width);
    top: var(--navbar-height);
    bottom: 0;
    overflow: hidden;
}

:global(.singleton) .side {
    display: none;
}

.sidebar[class] {
    padding: 36px 0;
}

.checkbox[class] {
    margin-left: 20px;
    margin-bottom: 10px;
    display: inline-block;
}

.alias {
    font-size: 90%;
}

.main {
    margin-left: var(--sidebar-width);
    margin-right: 240px;
}

:global(.singleton) .main {
    margin-left: 0;
}

.content {
    padding: 30px 50px 50px;
}
</style>
