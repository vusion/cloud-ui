import './src/u-base.vue/base.css';
import * as directives from 'u-base.vue/directives';
import Base from './src/u-base.vue';
import Link from './src/u-link.vue';
import Button from './src/u-button.vue';
import LinearProgress from 'u-linear-progress.vue';
import LinearLayout from 'u-linear-layout.vue';
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
import SubnavItem from './src/u-subnav-item.vue';
import Subnav from './src/u-subnav.vue';
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
import XBarChart from './src/u-xbar-chart.vue';
import Blank from './src/u-blank.vue';
import Validation from './src/u-validation.vue';
import Field from './src/u-field.vue';
import InputField from './src/u-input-field.vue';
import TableColumn from './src/u-table-column.vue';
import TableView from './src/u-table-view.vue';
import SelectColor from './src/u-select-color.vue';
import Popper from './src/u-popper.vue';
import Popover from './src/u-popover.vue';
import Badge from './src/u-badge.vue';

const Components = {
    Base,
    Link,
    Button,
    LinearProgress,
    LinearLayout,
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
    SubnavItem,
    Subnav,
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
    XBarChart,
    Blank,
    Validation,
    Field,
    InputField,
    TableColumn,
    TableView,
    SelectColor,
    Popper,
    Popover,
    Badge,
};

export {
    Base,
    Link,
    Button,
    LinearProgress,
    LinearLayout,
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
    SubnavItem,
    Subnav,
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
    XBarChart,
    Blank,
    Validation,
    Field,
    InputField,
    TableColumn,
    TableView,
    SelectColor,
    Popper,
    Popover,
    Badge,
};

const Library = {
    install(Vue) {
        for (const key in directives)
            Vue.directive(key, directives[key]);
        for (const key in Components)
            Vue.component(Components[key].name, Components[key]);
    },
};

export default Library;
