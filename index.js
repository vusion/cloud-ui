import Vue from 'vue';

import Base from './src/u-base.vue';
import Link from './src/u-link.vue';
import Button from './src/u-button.vue';
import LinearProgress from 'u-linear-progress.vue';
import CircularProgress from 'u-circular-progress.vue';
import Pagination from './src/u-pagination.vue';
import Sidebar from './src/u-sidebar.vue';
import SidebarItem from './src/u-sidebar-item.vue';
import SidebarMenu from './src/u-sidebar-menu.vue';
import Tabs from './src/u-tabs.vue';
import Tab from './src/u-tab.vue';
import Pills from './src/u-pills.vue';
import Pill from './src/u-pill.vue';
import Capsules from './src/u-capsules.vue';
import Capsule from './src/u-capsule.vue';
import Tablets from './src/u-tablets.vue';
import Tablet from './src/u-tablet.vue';
import Modal from './src/u-modal.vue';
import Calendar from './src/u-calendar.vue';
import NavbarItem from './src/u-navbar-item.vue';
import Navbar from './src/u-navbar.vue';
import NumberInput from './src/u-number-input.vue';
import DatePicker from './src/u-date-picker.vue';
import TimePicker from './src/u-time-picker.vue';
import Chart from './src/u-chart.vue';
import PieChart from './src/u-pie-chart.vue';
import LineChart from './src/u-line-chart.vue';
import BarChart from './src/u-bar-chart.vue';
import DateTimePicker from './src/u-date-time-picker.vue';
import Select from './src/u-select.vue';
import Toast from './src/u-toast.vue';
import Tag from './src/u-tag.vue';
import MultiSelect from './src/u-multi-select.vue';
import Switch from './src/u-switch.vue';

const Components = {
    Base,
    Link,
    Button,
    LinearProgress,
    CircularProgress,
    Pagination,
    Sidebar,
    SidebarItem,
    SidebarMenu,
    Tabs,
    Tab,
    Pills,
    Pill,
    Capsules,
    Capsule,
    Tablets,
    Tablet,
    Modal,
    Calendar,
    NavbarItem,
    Navbar,
    NumberInput,
    DatePicker,
    TimePicker,
    Chart,
    PieChart,
    LineChart,
    DateTimePicker,
    BarChart,
    Select,
    Toast,
    Tag,
    MultiSelect,
    Switch,
};

window.Vue = Vue;
Object.keys(Components).forEach((key) => Vue.component(Components[key].options.name, Components[key]));

export {
    Base,
    Link,
    Button,
    LinearProgress,
    CircularProgress,
    Pagination,
    Sidebar,
    SidebarItem,
    SidebarMenu,
    Tabs,
    Tab,
    Pills,
    Pill,
    Capsules,
    Capsule,
    Tablets,
    Tablet,
    Modal,
    Calendar,
    NavbarItem,
    Navbar,
    NumberInput,
    DatePicker,
    TimePicker,
    Chart,
    PieChart,
    LineChart,
    DateTimePicker,
    BarChart,
    Select,
    Toast,
    Tag,
    MultiSelect,
    Switch,
};
