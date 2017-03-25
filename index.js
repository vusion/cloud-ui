import Vue from 'vue';

import Base from './src/v-base.vue';
import Button from './src/v-button.vue';
import LinearProgress from 'v-linear-progress.vue';
import CircularProgress from 'v-circular-progress.vue';
import Pagination from './src/v-pagination.vue';

const Components = {
    Base,
    Button,
    LinearProgress,
    CircularProgress,
    Pagination,
};

window.Vue = Vue;
Object.keys(Components).forEach((key) => Vue.component(Components[key].options.name, Components[key]));

export {
    Base,
    Button,
    LinearProgress,
    CircularProgress,
    Pagination,
};
