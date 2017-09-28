import './src/u-base.vue/base.css';
import * as directives from 'u-base.vue/directives';
import Badge from './src/u-badge.vue';
import BarChart from './src/u-bar-chart.vue';
import Base from './src/u-base.vue';
import Blank from './src/u-blank.vue';
import Button from './src/u-button.vue';
import Calendar from './src/u-calendar.vue';
import Capsule from './src/u-capsule.vue';
import Capsules from './src/u-capsules.vue';
import Chart from './src/u-chart.vue';
import Checkbox from 'u-checkbox.vue';
import CircularProgress from './src/u-circular-progress.vue';
import ColorSelect from './src/u-color-select.vue';
import DatePicker from './src/u-date-picker.vue';
import DateTimePicker from './src/u-date-time-picker.vue';
import Field from './src/u-field.vue';
import Flex from './src/u-flex.vue';
import Form from './src/u-form.vue';
import FormItem from './src/u-form-item.vue';
import GridColumn from './src/u-grid-column.vue';
import GridRow from './src/u-grid-row.vue';
import Icon from './src/u-icon.vue';
import Input from './src/u-input.vue';
import InputField from './src/u-input-field.vue';
import Layout from './src/u-layout.vue';
import LineChart from './src/u-line-chart.vue';
import LinearLayout from 'u-linear-layout.vue';
import LinearProgress from 'u-linear-progress.vue';
import Link from './src/u-link.vue';
import ListView from 'u-list-view.vue';
import ListViewItem from 'u-list-view-item.vue';
import Loading from './src/u-loading.vue';
import Logo from './src/u-logo.vue';
import Modal from './src/u-modal.vue';
import MultiSelect from './src/u-multi-select.vue';
import Navbar from './src/u-navbar.vue';
import NavbarItem from './src/u-navbar-item.vue';
import NumberInput from './src/u-number-input.vue';
import OldSelect from './src/u-old-select.vue';
import Pagination from './src/u-pagination.vue';
import PieChart from './src/u-pie-chart.vue';
import Pill from './src/u-pill.vue';
import Pills from './src/u-pills.vue';
import Popover from './src/u-popover.vue';
import Popper from './src/u-popper.vue';
import Select from './src/u-select.vue';
import SelectItem from './src/u-select-item.vue';
import Sidebar from './src/u-sidebar.vue';
import SidebarItem from './src/u-sidebar-item.vue';
import SidebarMenu from './src/u-sidebar-menu.vue';
import StatusIcon from './src/u-status-icon.vue';
import Subnav from './src/u-subnav.vue';
import SubnavItem from './src/u-subnav-item.vue';
import Switch from './src/u-switch.vue';
import Tab from 'u-tab.vue';
import TableCell from './src/u-table-cell.vue';
import TableSelect from './src/u-table-select.vue';
import TableView from './src/u-table-view.vue';
import TableViewColumn from './src/u-table-view-column.vue';
import Tablet from './src/u-tablet.vue';
import Tablets from './src/u-tablets.vue';
import Tabs from './src/u-tabs.vue';
import Tag from './src/u-tag.vue';
import Textarea from 'u-textarea.vue';
import TimePicker from './src/u-time-picker.vue';
import Toast from './src/u-toast.vue';
import Tooltip from './src/u-tooltip.vue';
import TreeView from 'u-tree-view.vue';
import TreeViewNode from 'u-tree-view-node.vue';
import Validation from './src/u-validation.vue';
import XBarChart from './src/u-xbar-chart.vue';
import Drag from './src/u-drag.vue';
import Drop from './src/u-drop.vue';
import Movable from './src/u-movable.vue';

const Components = {
    Badge,
    BarChart,
    Base,
    Blank,
    Button,
    Calendar,
    Capsule,
    Capsules,
    Chart,
    Checkbox,
    CircularProgress,
    ColorSelect,
    DatePicker,
    DateTimePicker,
    Field,
    Flex,
    Form,
    FormItem,
    GridColumn,
    GridRow,
    Icon,
    Input,
    InputField,
    Layout,
    LineChart,
    LinearLayout,
    LinearProgress,
    Link,
    ListView,
    ListViewItem,
    Loading,
    Logo,
    Modal,
    MultiSelect,
    Navbar,
    NavbarItem,
    NumberInput,
    OldSelect,
    Pagination,
    PieChart,
    Pill,
    Pills,
    Popover,
    Popper,
    Select,
    SelectItem,
    Sidebar,
    SidebarItem,
    SidebarMenu,
    StatusIcon,
    Subnav,
    SubnavItem,
    Switch,
    Tab,
    TableCell,
    TableSelect,
    TableView,
    TableViewColumn,
    Tablet,
    Tablets,
    Tabs,
    Tag,
    Textarea,
    TimePicker,
    Toast,
    Tooltip,
    TreeView,
    TreeViewNode,
    Validation,
    XBarChart,
    Drag,
    Drop,
    Movable,
};

export {
    Badge,
    BarChart,
    Base,
    Blank,
    Button,
    Calendar,
    Capsule,
    Capsules,
    Chart,
    Checkbox,
    CircularProgress,
    ColorSelect,
    DatePicker,
    DateTimePicker,
    Field,
    Flex,
    Form,
    FormItem,
    GridColumn,
    GridRow,
    Icon,
    Input,
    InputField,
    Layout,
    LineChart,
    LinearLayout,
    LinearProgress,
    Link,
    ListView,
    ListViewItem,
    Loading,
    Logo,
    Modal,
    MultiSelect,
    Navbar,
    NavbarItem,
    NumberInput,
    OldSelect,
    Pagination,
    PieChart,
    Pill,
    Pills,
    Popover,
    Popper,
    Select,
    SelectItem,
    Sidebar,
    SidebarItem,
    SidebarMenu,
    Subnav,
    SubnavItem,
    Switch,
    Tab,
    TableCell,
    TableSelect,
    TableView,
    TableViewColumn,
    Tablet,
    Tablets,
    Tabs,
    Tag,
    Textarea,
    TimePicker,
    Toast,
    Tooltip,
    TreeView,
    TreeViewNode,
    Validation,
    XBarChart,
    Drag,
    Drop,
    Movable,
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
