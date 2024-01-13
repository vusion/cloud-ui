/// <reference types="@nasl/types" />
declare namespace nasl.ui {
    class EWatermark extends ViewComponent {
        constructor(options?: Partial<EWatermarkOptions>);
    }
    class EWatermarkOptions {
        private image;
        text: nasl.core.String;
        opacity: nasl.core.Decimal;
    }
}
declare namespace nasl.ui {
    class IIco extends ViewComponent {
        constructor(options?: Partial<IIcoOptions>);
    }
    class IIcoOptions {
        name: nasl.core.String;
        icotype: 'only' | 'top' | 'left';
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        onClick: () => void;
        onDblclick: () => void;
        onRightclick: () => void;
        onOver: () => void;
        onOut: () => void;
        onDown: () => void;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UAbsoluteLayout extends ViewComponent {
        constructor(options?: Partial<UAbsoluteLayoutOptions>);
    }
    class UAbsoluteLayoutOptions {
        onClick: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UAlert extends ViewComponent {
        constructor(options?: Partial<UAlertOptions>);
    }
    class UAlertOptions {
        private title;
        private desc;
        private horizontal;
        type: 'info' | 'success' | 'warning' | 'error';
        showIcon: nasl.core.Boolean;
        closeable: nasl.core.Boolean;
        bordered: nasl.core.Boolean;
        onClose: () => void;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UAnchor extends ViewComponent {
        constructor(options?: Partial<UAnchorOptions>);
    }
    class UAnchorOptions {
        label: nasl.core.String;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UBadge extends ViewComponent {
        constructor(options?: Partial<UBadgeOptions>);
    }
    class UBadgeOptions {
        private dot;
        value: nasl.core.Integer;
        max: nasl.core.Decimal;
        corner: nasl.core.Boolean;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UButton extends ViewComponent {
        constructor(options?: Partial<UButtonOptions>);
    }
    class UButtonOptions {
        private to;
        private replace;
        private append;
        text: nasl.core.String;
        color: 'primary' | 'primary_secondary' | 'default' | 'danger' | 'danger_secondary';
        display: 'inline' | 'block';
        icon: nasl.core.String;
        iconPosition: 'left' | 'right';
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        disabled: nasl.core.Boolean;
        private loading;
        dashed: nasl.core.Boolean;
        size: 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        shape: 'default' | 'square' | 'round' | 'circle';
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        onFocus: () => void;
        onBlur: () => void;
        private onBeforeNavigate;
        private onNavigate;
    }
}
declare namespace nasl.ui {
    class UCalendarView<T> extends ViewComponent {
        reload(): void;
        constructor(options?: Partial<UCalendarViewOptions<T>>);
    }
    class UCalendarViewOptions<T> {
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        startKey: (item: T) => nasl.core.Date;
        endKey: (item: T) => nasl.core.Date;
        value: nasl.core.Date;
        minDate: nasl.core.Date;
        maxDate: nasl.core.Date;
        showWeekDays: nasl.core.Boolean;
        showWeeks: nasl.core.Boolean;
        showBasic: nasl.core.Boolean;
        showAdvance: nasl.core.Boolean;
        firstDayOfWeek: nasl.core.Integer;
        multiple: nasl.core.Boolean;
        onSelect: (event: {
            date: nasl.core.Integer;
            timestamp: nasl.core.Integer;
            value: nasl.core.String | nasl.core.Date;
            oldValue: nasl.core.String | nasl.core.Date;
            week: nasl.core.Integer;
        }) => void;
        onChange: (event: {
            date: nasl.core.Integer;
            timestamp: nasl.core.Integer;
            week: nasl.core.Integer;
        }) => void;
        private onBeforeLoad;
        onLoad: (event: null) => void;
        slotDefault: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCapsules extends ViewComponent {
        constructor(options?: Partial<UCapsulesOptions>);
    }
    class UCapsulesOptions {
        value: nasl.core.Any;
        autoSelect: nasl.core.Boolean;
        cancelable: nasl.core.Boolean;
        multiple: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private onBeforeSelect;
        onInput: (event: nasl.core.String) => void;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: nasl.core.String;
            oldItem: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
            items: nasl.collection.List<nasl.core.String>;
            oldItems: nasl.collection.List<nasl.core.String>;
        }) => void;
        onChange: (event: {
            selected: nasl.core.Boolean;
            item: nasl.core.String;
            oldItem: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
            items: nasl.collection.List<nasl.core.String>;
            oldItems: nasl.collection.List<nasl.core.String>;
        }) => void;
        slotDefault: () => Array<UCapsule>;
    }
    class UCapsule extends ViewComponent {
        constructor(options?: Partial<UCapsuleOptions>);
    }
    class UCapsuleOptions {
        private item;
        value: nasl.core.Any;
        label: nasl.core.String;
        flag: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private size;
        onClick: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        private onBeforeSelect;
        slotDefault: () => Array<ViewComponent>;
    }
    class UCapsulesGroup extends ViewComponent {
        constructor(options?: Partial<UCapsulesGroupOptions>);
    }
    class UCapsulesGroupOptions {
        slotDefault: () => Array<UCapsule>;
    }
}
declare namespace nasl.ui {
    class UCard extends ViewComponent {
        constructor(options?: Partial<UCardOptions>);
    }
    class UCardOptions {
        private title;
        width: nasl.core.String;
        shadow: 'always' | 'hover' | 'never';
        border: nasl.core.Boolean;
        split: nasl.core.Boolean;
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        slotDefault: () => Array<ViewComponent>;
        slotCover: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCarousel<T> extends ViewComponent {
        reload(): void;
        constructor(options?: Partial<UCarouselOptions<T>>);
    }
    class UCarouselOptions<T> {
        private loop;
        private direction;
        private animation;
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        private value;
        autoplay: nasl.core.Boolean;
        interval: nasl.core.Integer;
        private onBeforeSelect;
        private onSelect;
        private onBeforeLoad;
        onLoad: (event: null) => void;
        slotDefault: () => Array<UCarouselItem>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class UCarouselItem extends ViewComponent {
        constructor(options?: Partial<UCarouselItemOptions>);
    }
    class UCarouselItemOptions {
        private title;
        private value;
        slotDefault: () => Array<ViewComponent>;
        private slotTitle;
    }
}
declare namespace nasl.ui {
    class UCascader<T, V> extends ViewComponent {
        data: UCascaderOptions<T, V>['dataSource'];
        value: UCascaderOptions<T, V>['value'];
        open(): void;
        close(): void;
        clear(): void;
        reload(): void;
        constructor(options?: Partial<UCascaderOptions<T, V>>);
    }
    class UCascaderOptions<T, V> {
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        field: (item: T) => nasl.core.String;
        valueField: (item: T) => V;
        childrenField: (item: T) => nasl.collection.List<T>;
        parentField: (item: T) => nasl.core.String;
        value: V;
        useArrayLikeValue: nasl.core.Boolean;
        filterable: nasl.core.Boolean;
        placeholder: nasl.core.String;
        showFinalValue: nasl.core.Boolean;
        autofocus: nasl.core.Boolean;
        trigger: 'click' | 'hover';
        clearable: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        opened: nasl.core.Boolean;
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        private join;
        onInput: (event: V) => void;
        onSelect: (event: {
            value: V;
            values: nasl.collection.List<V>;
            items: nasl.collection.List<T>;
        }) => void;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onClear: () => void;
        private onBeforeLoad;
        onLoad: (event: null) => void;
    }
}
declare namespace nasl.ui {
    class UCheckboxes<T, V, C extends string> extends ViewComponent {
        data: UCheckboxesOptions<T, V, C>['dataSource'];
        value: UCheckboxesOptions<T, V, C>['value'];
        reload(): void;
        constructor(options?: Partial<UCheckboxesOptions<T, V, C>>);
    }
    class UCheckboxesOptions<T, V, C extends string> {
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        private textField;
        valueField: (item: T) => V;
        value: C extends '' ? nasl.collection.List<V> : nasl.core.String;
        checkAll: nasl.core.Boolean;
        checkAllText: nasl.core.String;
        checkAllDisplay: 'inline' | 'block';
        min: nasl.core.Decimal;
        max: nasl.core.Decimal;
        converter: '' | 'join' | 'join:|' | 'join:;' | 'json';
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onInput: (event: nasl.collection.List<V>) => void;
        onCheck: (event: {
            value: nasl.collection.List<V> | nasl.core.String;
            oldValue: nasl.collection.List<V> | nasl.core.String;
        }) => void;
        onChange: (event: {
            value: nasl.collection.List<V> | nasl.core.String;
            oldValue: nasl.collection.List<V> | nasl.core.String;
        }) => void;
        private onBeforeLoad;
        onLoad: () => void;
        slotDefault: () => Array<UCheckbox<T, V>>;
        slotCheckAll: () => Array<UText>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class UCheckbox<T, V> extends ViewComponent {
        constructor(options?: Partial<UCheckboxOptions<T, V>>);
    }
    class UCheckboxOptions<T, V> {
        private text;
        value: nasl.core.Boolean | null;
        label: V;
        autofocus: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        preview: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private onBeforeCheck;
        onInput: (event: V) => void;
        onCheck: (event: {
            value: V;
        }) => void;
        onChange: (event: {
            value: V;
            oldValue: V;
        }) => void;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCircularProgress extends ViewComponent {
        constructor(options?: Partial<UCircularProgressOptions>);
    }
    class UCircularProgressOptions {
        percent: nasl.core.Decimal;
        size: 'small' | 'normal' | 'large' | 'huge';
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCollapse extends ViewComponent {
        constructor(options?: Partial<UCollapseOptions>);
    }
    class UCollapseOptions {
        appear: 'default' | 'simple';
        fill: 'head' | 'content' | 'none';
        accordion: nasl.core.Boolean;
        expandTrigger: 'click' | 'click-expander';
        disabled: nasl.core.Boolean;
        onExpand: () => void;
        onCollapse: () => void;
        slotDefault: () => Array<UCollapseItem>;
    }
    class UCollapseItem extends ViewComponent {
        constructor(options?: Partial<UCollapseItemOptions>);
    }
    class UCollapseItemOptions {
        private title;
        expanded: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onExpand: () => void;
        onCollapse: () => void;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
        slotExtra: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UComboSlider extends ViewComponent {
        constructor(options?: Partial<UComboSliderOptions>);
    }
    class UComboSliderOptions {
        private tip;
        value: nasl.core.Decimal | Array<nasl.core.Decimal>;
        min: nasl.core.Decimal;
        max: nasl.core.Decimal;
        step: nasl.core.Decimal;
        precision: nasl.core.Decimal;
        range: Array<nasl.core.Decimal>;
        private formatter;
        multiple: nasl.core.Boolean;
        unit: nasl.core.String;
        syncOn: 'input' | 'blur';
        hideButtons: nasl.core.Boolean;
        showTooltip: nasl.core.Boolean;
        tooltip: nasl.core.String;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onInput: (event: nasl.core.Decimal) => void;
        onSlide: (event: {
            value: nasl.core.Decimal;
            oldValue: nasl.core.Decimal;
            percent: nasl.core.Decimal;
            index: nasl.core.Decimal;
        }) => void;
        onChange: (event: {
            value: nasl.core.Decimal;
            oldValue: nasl.core.Decimal;
        }) => void;
        onNumberInput: (event: nasl.core.Decimal) => void;
        private onSlideEnd;
        slotTip: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCopy extends ViewComponent {
        constructor(options?: Partial<UCopyOptions>);
    }
    class UCopyOptions {
        private text;
        private successText;
        private feedback;
        private placement;
        private hideDelay;
        value: nasl.core.String;
        disabled: nasl.core.Boolean;
        onCopy: (event: {
            value: nasl.core.String;
        }) => void;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCountDown extends ViewComponent {
        start(): void;
        pause(): void;
        continue(): void;
        stop(): void;
        constructor(options?: Partial<UCountDownOptions>);
    }
    class UCountDownOptions {
        timer: nasl.core.Decimal;
        reverse: 'positive' | 'negative';
        autostart: nasl.core.Boolean;
        onStart: () => void;
        onPause: () => void;
        onContinue: () => void;
        onStop: () => void;
    }
}
declare namespace nasl.ui {
    class UCrumb extends ViewComponent {
        constructor(options?: Partial<UCrumbOptions>);
    }
    class UCrumbOptions {
        auto: nasl.core.Boolean;
        separator: 'arrow' | 'slash';
        icon: nasl.core.Boolean;
        slotDefault: () => Array<UCrumbItem>;
    }
    class UCrumbItem extends ViewComponent {
        constructor(options?: Partial<UCrumbItemOptions>);
    }
    class UCrumbItemOptions {
        private text;
        private replace;
        private append;
        icon: nasl.core.String;
        private type;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        disabled: nasl.core.Boolean;
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        onFocus: () => void;
        onBlur: () => void;
        private onBeforeNavigate;
        private onNavigate;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UDatePicker extends ViewComponent {
        constructor(options?: Partial<UDatePickerOptions>);
    }
    class UDatePickerOptions {
        picker: 'date' | 'week' | 'month' | 'quarter' | 'year';
        range: nasl.core.Boolean;
        value: nasl.core.String | nasl.core.Decimal | nasl.core.Date;
        startDate: nasl.core.String | nasl.core.Decimal | nasl.core.Date;
        endDate: nasl.core.String | nasl.core.Decimal | nasl.core.Date;
        minDate: nasl.core.String | nasl.core.Decimal | nasl.core.Date;
        maxDate: nasl.core.String | nasl.core.Decimal | nasl.core.Date;
        private time;
        yearDiff: nasl.core.Decimal;
        yearAdd: nasl.core.Decimal;
        showFormatter: 'YYYY年M月D日' | 'YYYY-MM-DD' | 'M/D/YYYY' | 'D/M/YYYY' | 'GGGG-W周' | 'GGGG年第W周' | 'GGGG-WWWW' | 'YYYY年M月' | 'YYYY-MM' | 'M/YYYY' | 'YYYY年第Q季度' | 'YYYY年QQ' | 'YYYY-QQ' | 'YYYY年' | 'YYYY';
        advancedFormat: {
            enable: nasl.core.Boolean;
            value: nasl.core.String;
        };
        autofocus: nasl.core.Boolean;
        placeholder: nasl.core.String;
        placeholderRight: nasl.core.String;
        alignment: 'left' | 'right';
        converter: 'json' | 'timestamp' | 'date' | 'format';
        preIcon: 'calendar';
        suffixIcon: 'calendar';
        appendTo: 'reference' | 'body';
        clearable: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        preview: nasl.core.Boolean;
        opened: nasl.core.Boolean;
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        onInput: (event: Date) => void;
        onChange: (event: {
            date: nasl.core.String;
            time: nasl.core.String;
        }) => void;
        onSelect: (event: {
            date: nasl.core.String;
            time: nasl.core.String;
        }) => void;
        private onToggle;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
    }
}
declare namespace nasl.ui {
    class UDateTimePicker extends ViewComponent {
        constructor(options?: Partial<UDateTimePickerOptions>);
    }
    class UDateTimePickerOptions {
        minUnit: 'second' | 'minute';
        range: nasl.core.Boolean;
        value: nasl.core.String | nasl.core.Decimal | nasl.core.Date;
        startDate: nasl.core.String | nasl.core.Decimal | nasl.core.Date;
        endDate: nasl.core.String | nasl.core.Decimal | nasl.core.Date;
        minDate: nasl.core.String | nasl.core.Decimal | nasl.core.Date;
        maxDate: nasl.core.String | nasl.core.Decimal | nasl.core.Date;
        yearDiff: nasl.core.Decimal;
        yearAdd: nasl.core.Decimal;
        showDateFormatter: 'YYYY年M月D日' | 'YYYY-MM-DD' | 'M/D/YYYY' | 'D/M/YYYY';
        showTimeFormatter: 'HH:mm:ss' | 'HH时mm分ss秒' | 'HH:mm' | 'HH时mm分';
        advancedFormat: {
            enable: nasl.core.Boolean;
            value: nasl.core.String;
        };
        placeholder: nasl.core.String;
        autofocus: nasl.core.Boolean;
        showRightNowButton: nasl.core.Boolean;
        rightNowTitle: nasl.core.String;
        showFooterButton: nasl.core.Boolean;
        cancelTitle: nasl.core.String;
        okTitle: nasl.core.String;
        converter: 'json' | 'timestamp' | 'date' | 'format';
        preIcon: 'calendar';
        suffixIcon: 'calendar';
        appendTo: 'reference' | 'body';
        clearable: nasl.core.Boolean;
        opened: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        preview: nasl.core.Boolean;
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        onSelect: (event: {
            date: nasl.core.String;
            time: nasl.core.String;
        }) => void;
        onChange: (event: {
            date: nasl.core.String;
            time: nasl.core.String;
        }) => void;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
    }
}
declare namespace nasl.ui {
    class UDivider extends ViewComponent {
        constructor(options?: Partial<UDividerOptions>);
    }
    class UDividerOptions {
        private title;
        dashed: 'b' | 'a';
        contentPosition: 'center' | 'left' | 'right';
        direction: 'horizontal' | 'column';
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UDrawer extends ViewComponent {
        open(): void;
        close(): void;
        constructor(options?: Partial<UDrawerOptions>);
    }
    class UDrawerOptions {
        placement: 'left' | 'right';
        showHead: nasl.core.Boolean;
        showFoot: nasl.core.Boolean;
        maskClosable: nasl.core.Boolean;
        visible: nasl.core.Boolean;
        size: 'small' | 'normal' | 'large';
        onOpen: () => void;
        onBeforeClose: (event: {
            ok: nasl.core.Boolean;
        }) => void;
        onClose: (event: {
            ok: nasl.core.Boolean;
        }) => void;
        slotTitle: () => Array<ViewComponent>;
        slotBody: () => Array<ViewComponent>;
        slotFoot: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UDropdown<T, V> extends ViewComponent {
        constructor(options?: Partial<UDropdownOptions<T, V>>);
    }
    class UDropdownOptions<T, V> {
        hasDataSource: nasl.core.Boolean;
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        textField: (item: T) => nasl.core.String;
        valueField: (item: T) => V;
        iconField: (item: T) => nasl.core.String;
        toField: (item: T) => nasl.core.String;
        parentField: (item: T) => nasl.core.String;
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'manual';
        type: 'text' | 'primary' | 'primary_secondary' | 'normal' | 'more';
        placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
        appendTo: 'reference' | 'body';
        router: nasl.core.Boolean;
        value: V;
        disabled: nasl.core.Boolean;
        opened: nasl.core.Boolean;
        slotDefault: () => Array<UDropdownGroup | UDropdownItem>;
        slotTitle: () => Array<ViewComponent>;
    }
    class UDropdownItem extends ViewComponent {
        constructor(options?: Partial<UDropdownItemOptions>);
    }
    class UDropdownItemOptions {
        private text;
        private to;
        icon: nasl.core.String;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        disabled: nasl.core.Boolean;
        onClick: () => void;
        slotDefault: () => Array<ViewComponent>;
    }
    class UDropdownGroup extends ViewComponent {
        constructor(options?: Partial<UDropdownGroupOptions>);
    }
    class UDropdownGroupOptions {
        private title;
        collapsible: nasl.core.Boolean;
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'none';
        expanded: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        slotDefault: () => Array<UDropdownGroup | UDropdownItem>;
    }
}
declare namespace nasl.ui {
    class UForm extends ViewComponent {
        validate(trigger?: nasl.core.String, muted?: nasl.core.Boolean): any;
        validateItem(name: nasl.core.String, trigger?: nasl.core.String, muted?: nasl.core.Boolean): any;
        constructor(options?: Partial<UFormOptions>);
    }
    class UFormOptions {
        private model;
        private size;
        private rules;
        layout: 'inline' | 'block' | 'inline-flex';
        repeat: nasl.core.Decimal;
        labelLayout: 'inline' | 'block';
        labelEllipsis: nasl.core.Boolean;
        collapsible: nasl.core.Boolean;
        accordion: nasl.core.Boolean;
        expandTrigger: 'click' | 'click-expander';
        preview: nasl.core.Boolean;
        gapWidth: 'none' | 'small' | 'normal' | 'large';
        gapHeight: 'none' | 'small' | 'normal' | 'large';
        labelSize: 'mini' | 'small' | 'normal' | 'large';
        onValidate: (event: {
            rawValue: nasl.core.String;
            value: nasl.core.String;
            trigger: nasl.core.String;
            muted: nasl.core.String;
            valid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            triggerValid: nasl.core.Boolean;
        }) => void;
        slotDefault: () => Array<UFormGroup | UFormItem>;
    }
    class UFormItem extends ViewComponent {
        validate(trigger?: nasl.core.String, muted?: nasl.core.Boolean): any;
        constructor(options?: Partial<UFormItemOptions>);
    }
    class UFormItemOptions {
        private name;
        private label;
        private muted;
        private placement;
        private ignoreRules;
        private validatingOptions;
        private validatingValue;
        private validatingProcess;
        span: nasl.core.Decimal;
        labelLayout: 'inline' | 'block';
        labelEllipsis: nasl.core.Boolean;
        required: nasl.core.Boolean;
        requiredPosition: 'left' | 'right';
        message: nasl.core.String;
        description: nasl.core.String;
        layout: 'block' | 'center' | 'end';
        rules: nasl.core.String;
        ignoreValidation: nasl.core.Boolean;
        fieldSize: 'mini' | 'small' | 'normal' | 'large';
        labelSize: 'mini' | 'small' | 'normal' | 'large';
        onValidate: (event: {
            rawValue: nasl.core.String;
            value: nasl.core.String;
            trigger: nasl.core.String;
            muted: nasl.core.String;
            valid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            triggerValid: nasl.core.Boolean;
        }) => void;
        slotDefault: () => Array<ViewComponent>;
        slotLabel: () => Array<ViewComponent>;
        private slotDescription;
        private slotExtra;
    }
    class UFormGroup extends ViewComponent {
        constructor(options?: Partial<UFormGroupOptions>);
    }
    class UFormGroupOptions {
        title: nasl.core.String;
        repeat: nasl.core.Decimal;
        labelLayout: 'inline' | 'block';
        labelEllipsis: nasl.core.Boolean;
        collapsible: nasl.core.Boolean;
        expanded: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private onBeforeToggle;
        onToggle: (event: {
            expanded: nasl.core.Boolean;
        }) => void;
        slotDefault: () => Array<UFormItem>;
        slotTitle: () => Array<ViewComponent>;
        slotExtra: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UGallery<T> extends ViewComponent {
        reload(): void;
        constructor(options?: Partial<UGalleryOptions<T>>);
    }
    class UGalleryOptions<T> {
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        pattern: 'small' | 'big';
        num: nasl.core.Decimal;
        arrow: nasl.core.Boolean;
        private onBeforeLoad;
        onLoad: () => void;
    }
}
declare namespace nasl.ui {
    class UGridLayout extends ViewComponent {
        constructor(options?: Partial<UGridLayoutOptions>);
    }
    class UGridLayoutOptions {
        gap: 'compact' | 'none' | 'small' | 'normal' | 'large';
        onScroll: (event: {
            scrollTop: nasl.core.Integer;
            scrollLeft: nasl.core.Integer;
            scrollWidth: nasl.core.Integer;
            scrollHeight: nasl.core.Integer;
            clientWidth: nasl.core.Integer;
            clientHeight: nasl.core.Integer;
        }) => void;
        slotDefault: () => Array<UGridLayoutRow>;
    }
    class UGridLayoutRow extends ViewComponent {
        constructor(options?: Partial<UGridLayoutRowOptions>);
    }
    class UGridLayoutRowOptions {
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
        repeat: nasl.core.Decimal;
        gap: 'none' | 'mini' | 'small' | 'normal' | 'large' | 'huge';
        slotDefault: () => Array<UGridLayoutColumn>;
    }
    class UGridLayoutColumn extends ViewComponent {
        constructor(options?: Partial<UGridLayoutColumnOptions>);
    }
    class UGridLayoutColumnOptions {
        private mediaHuge;
        private mediaLarge;
        private mediaMedium;
        private mediaSmall;
        private mediaMini;
        mode: 'inline' | 'flex';
        direction: 'horizontal' | 'vertical';
        _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
        _alignment: 'start' | 'center' | 'end' | 'stretch';
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        span: nasl.core.Decimal;
        offset: nasl.core.Decimal;
        pull: nasl.core.Decimal;
        push: nasl.core.Decimal;
        wrap: nasl.core.Boolean;
        gap: 'shrink' | 'none' | 'small' | 'normal' | 'large';
        private onResponsive;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UGridView<T, V, P extends boolean, M extends boolean, C extends string> extends ViewComponent {
        data: UGridViewOptions<T, V, P, M, C>['dataSource'];
        size: UGridViewOptions<T, V, P, M, C>['pageSize'];
        page: UGridViewOptions<T, V, P, M, C>['pageNumber'];
        reload(): void;
        constructor(options?: Partial<UGridViewOptions<T, V, P, M, C>>);
    }
    class UGridViewOptions<T, V, P extends boolean, M extends boolean, C extends string> {
        private value;
        private field;
        private cancelable;
        private multiple;
        private clearable;
        dataSource: P extends true ? {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        } : nasl.collection.List<T>;
        dataSchema: T;
        textField: (item: T) => nasl.core.String;
        valueField: (item: T) => V;
        pageable: nasl.core.Boolean;
        pageSize: nasl.core.Integer;
        pageNumber: nasl.core.Integer;
        pageSizeOptions: Array<nasl.core.Decimal>;
        showTotal: nasl.core.Boolean;
        showSizer: nasl.core.Boolean;
        showJumper: nasl.core.Boolean;
        remotePaging: nasl.core.Boolean;
        private remoteFiltering;
        private matchMethod;
        private caseSensitive;
        private placeholder;
        repeat: nasl.core.Decimal;
        showHead: nasl.core.Boolean;
        title: nasl.core.String;
        showFoot: nasl.core.Boolean;
        initialLoad: nasl.core.Boolean;
        designerMode: 'success' | 'empty' | 'loading' | 'error';
        loadingText: nasl.core.String;
        loading: nasl.core.Boolean;
        errorText: nasl.core.String;
        error: nasl.core.Boolean;
        emptyText: nasl.core.String;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private width;
        private height;
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;
        onInput: (event: V) => void;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;
        onChange: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;
        onBeforeLoad: () => void;
        onLoad: () => void;
        slotDefault: () => Array<ViewComponent>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UIframe extends ViewComponent {
        constructor(options?: Partial<UIframeOptions>);
    }
    class UIframeOptions {
        src: nasl.core.String;
        onLoad: () => void;
    }
}
declare namespace nasl.ui {
    class UImage extends ViewComponent {
        constructor(options?: Partial<UImageOptions>);
    }
    class UImageOptions {
        private convertSrcFn;
        src: nasl.core.String;
        fit: 'contain' | 'scale-down' | 'none' | 'fill' | 'cover';
        circle: nasl.core.Boolean;
        horizontalCenter: 'left' | 'center' | 'right';
        verticalCenter: 'top' | 'center' | 'bottom';
        preview: nasl.core.Boolean;
        loadingType: 'loading' | 'none' | 'placeholder';
        placeholderSrc: nasl.core.String;
        onLoad: () => void;
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
    }
}
declare namespace nasl.ui {
    class UInfoList extends ViewComponent {
        constructor(options?: Partial<UInfoListOptions>);
    }
    class UInfoListOptions {
        repeat: nasl.core.Decimal;
        showHead: nasl.core.Boolean;
        labelSize: 'auto' | 'small' | 'normal' | 'large';
        slotDefault: () => Array<UInfoListGroup | UInfoListItem>;
    }
    class UInfoListItem extends ViewComponent {
        constructor(options?: Partial<UInfoListItemOptions>);
    }
    class UInfoListItemOptions {
        private label;
        span: nasl.core.Decimal;
        ellipsis: nasl.core.Boolean;
        labelSize: 'auto' | 'small' | 'normal' | 'large';
        slotDefault: () => Array<ViewComponent>;
        slotLabel: () => Array<ViewComponent>;
    }
    class UInfoListGroup extends ViewComponent {
        constructor(options?: Partial<UInfoListGroupOptions>);
    }
    class UInfoListGroupOptions {
        private title;
        repeat: nasl.core.Decimal;
        labelSize: 'auto' | 'small' | 'normal' | 'large';
        slotDefault: () => Array<UInfoListItem>;
        slotTitle: () => Array<ViewComponent>;
        slotExtra: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UInput extends ViewComponent {
        focus(): void;
        blur(): void;
        clear(): void;
        constructor(options?: Partial<UInputOptions>);
    }
    class UInputOptions {
        private minlength;
        private spellcheck;
        private maxlengthMessage;
        type: 'text' | 'password';
        value: nasl.core.String;
        placeholder: nasl.core.String;
        maxlength: nasl.core.Integer;
        autofocus: nasl.core.Boolean;
        prefix: nasl.core.String;
        suffix: nasl.core.String;
        clearable: nasl.core.Boolean;
        password: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        preview: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        private onBeforeInput;
        onInput: (event: nasl.core.String) => void;
        onChange: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => void;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        private onBeforeClear;
        onClear: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => void;
        onClickPrefix: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onClickSuffix: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onKeydown: (event: {
            altKey: nasl.core.Boolean;
            code: nasl.core.String;
            ctrlKey: nasl.core.Boolean;
            isComposing: nasl.core.Boolean;
            key: nasl.core.String;
            metaKey: nasl.core.Boolean;
            repeat: nasl.core.Boolean;
            shiftKey: nasl.core.Boolean;
        }) => void;
        onKeyup: (event: {
            altKey: nasl.core.Boolean;
            code: nasl.core.String;
            ctrlKey: nasl.core.Boolean;
            isComposing: nasl.core.Boolean;
            key: nasl.core.String;
            metaKey: nasl.core.Boolean;
            repeat: nasl.core.Boolean;
            shiftKey: nasl.core.Boolean;
        }) => void;
        private slotDefault;
    }
}
declare namespace nasl.ui {
    class ULabel extends ViewComponent {
        constructor(options?: Partial<ULabelOptions>);
    }
    class ULabelOptions {
        text: nasl.core.String;
        type: 'filled' | 'line';
        color: 'default' | 'primary' | 'success' | 'warning' | 'error';
        display: 'inline' | 'block';
        removable: nasl.core.Boolean;
        size: 'small' | 'normal' | 'large' | 'huge';
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        private onBeforeRemove;
        onRemove: () => void;
    }
}
declare namespace nasl.ui {
    class ULinearLayout extends ViewComponent {
        openLoading(): void;
        closeLoading(): void;
        constructor(options?: Partial<ULinearLayoutOptions>);
    }
    class ULinearLayoutOptions {
        private display;
        private type;
        mode: 'inline' | 'block' | 'flex';
        direction: 'horizontal' | 'vertical';
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
        _alignment: 'start' | 'center' | 'end' | 'stretch';
        _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        layout: 'none' | 'inline' | 'block';
        wrap: nasl.core.Boolean;
        loadingIcon: nasl.core.String;
        loadingIconRotate: nasl.core.Boolean;
        loadingText: nasl.core.String;
        gap: 'shrink' | 'none' | 'small' | 'normal' | 'large';
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        onScroll: (event: {
            scrollTop: nasl.core.Integer;
            scrollLeft: nasl.core.Integer;
            scrollWidth: nasl.core.Integer;
            scrollHeight: nasl.core.Integer;
            clientWidth: nasl.core.Integer;
            clientHeight: nasl.core.Integer;
        }) => void;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class ULinearProgress extends ViewComponent {
        constructor(options?: Partial<ULinearProgressOptions>);
    }
    class ULinearProgressOptions {
        private range;
        percent: nasl.core.Decimal;
        direction: 'horizontal' | 'vertical';
        size: 'small' | 'normal' | 'large' | 'huge';
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class ULink extends ViewComponent {
        constructor(options?: Partial<ULinkOptions>);
    }
    class ULinkOptions {
        private to;
        private replace;
        private append;
        private decoration;
        text: nasl.core.String;
        color: 'default' | 'light' | 'success' | 'warning' | 'danger';
        display: 'inline' | 'block';
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        hoverType: 'underline' | 'color';
        disabled: nasl.core.Boolean;
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        onFocus: () => void;
        onBlur: () => void;
        private onBeforeNavigate;
        private onNavigate;
    }
}
declare namespace nasl.ui {
    class UListComponents<T> extends ViewComponent {
        data: UListComponentsOptions<T>['dataSource'];
        constructor(options?: Partial<UListComponentsOptions<T>>);
    }
    class UListComponentsOptions<T> {
        dataSource: nasl.collection.List<T>;
        dataSchema: T;
        colnum: nasl.core.Decimal;
        equalWidth: nasl.core.Boolean;
        slotDefault: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UListView<T, V, P extends boolean, M extends boolean, C extends string> extends ViewComponent {
        data: UListViewOptions<T, V, P, M, C>['dataSource'];
        size: UListViewOptions<T, V, P, M, C>['pageSize'];
        page: UListViewOptions<T, V, P, M, C>['pageNumber'];
        reload(): void;
        constructor(options?: Partial<UListViewOptions<T, V, P, M, C>>);
    }
    class UListViewOptions<T, V, P extends boolean, M extends boolean, C extends string> {
        dataSource: P extends true ? {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        } : nasl.collection.List<T>;
        dataSchema: T;
        pageable: nasl.core.Boolean;
        pageSize: nasl.core.Integer;
        pageNumber: nasl.core.Integer;
        pageSizeOptions: Array<nasl.core.Decimal>;
        showTotal: nasl.core.Boolean;
        showSizer: nasl.core.Boolean;
        showJumper: nasl.core.Boolean;
        filterable: nasl.core.Boolean;
        remotePaging: nasl.core.Boolean;
        private remoteFiltering;
        matchMethod: nasl.core.String;
        caseSensitive: nasl.core.Boolean;
        placeholder: nasl.core.String;
        value: M extends true ? (C extends '' ? nasl.collection.List<V> : nasl.core.String) : V;
        textField: (item: T) => nasl.core.String;
        valueField: (item: T) => V;
        cancelable: nasl.core.Boolean;
        multiple: M;
        clearable: nasl.core.Boolean;
        showHead: nasl.core.Boolean;
        title: nasl.core.String;
        showFoot: nasl.core.Boolean;
        initialLoad: nasl.core.Boolean;
        designerMode: 'success' | 'empty' | 'loading' | 'error';
        loadingText: nasl.core.String;
        loading: nasl.core.Boolean;
        errorText: nasl.core.String;
        error: nasl.core.Boolean;
        emptyText: nasl.core.String;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        border: nasl.core.Boolean;
        width: 'full' | 'huge' | 'large' | 'normal' | 'auto';
        height: 'full' | 'huge' | 'large' | 'normal' | 'auto';
        private onBeforeSelect;
        onInput: (event: V) => void;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;
        onChange: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;
        private onBeforeLoad;
        onLoad: () => void;
        private slotDefault;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UModal extends ViewComponent {
        open(): void;
        close(): void;
        constructor(options?: Partial<UModalOptions>);
    }
    class UModalOptions {
        private title;
        private content;
        private description;
        private okButton;
        private cancelButton;
        private static;
        showHead: nasl.core.Boolean;
        showFoot: nasl.core.Boolean;
        icon: '' | 'success' | 'warning' | 'error';
        maskClose: nasl.core.Boolean;
        visible: nasl.core.Boolean;
        size: 'small' | 'normal' | 'large' | 'huge' | 'auto';
        private onBeforeOpen;
        onOpen: () => void;
        private onBeforeClose;
        onClose: (event: {
            ok: nasl.core.Boolean;
        }) => void;
        slotTitle: () => Array<ViewComponent>;
        slotHead: () => Array<ViewComponent>;
        slotBody: () => Array<ViewComponent>;
        slotFoot: () => Array<ViewComponent>;
        slotHeading: () => Array<ViewComponent>;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UMultiLayout extends ViewComponent {
        constructor(options?: Partial<UMultiLayoutOptions>);
    }
    class UMultiLayoutOptions {
        direction: 'horizontal' | 'vertical';
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
        _alignment: 'start' | 'center' | 'end' | 'stretch';
        _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        gap: 'shrink' | 'none' | 'small' | 'normal' | 'large';
        onScroll: (event: {
            scrollTop: nasl.core.Integer;
            scrollLeft: nasl.core.Integer;
            scrollWidth: nasl.core.Integer;
            scrollHeight: nasl.core.Integer;
            clientWidth: nasl.core.Integer;
            clientHeight: nasl.core.Integer;
        }) => void;
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        slotDefault: () => Array<UMultiLayoutItem>;
    }
    class UMultiLayoutItem extends ViewComponent {
        constructor(options?: Partial<UMultiLayoutItemOptions>);
    }
    class UMultiLayoutItemOptions {
        private fixed;
        private fixdirec;
        private display;
        mode: 'inline' | 'flex';
        direction: 'horizontal' | 'vertical';
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
        _alignment: 'start' | 'center' | 'end' | 'stretch';
        _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        gap: 'shrink' | 'none' | 'small' | 'normal' | 'large';
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UNavbarMulti<T, V> extends ViewComponent {
        constructor(options?: Partial<UNavbarMultiOptions<T, V>>);
    }
    class UNavbarMultiOptions<T, V> {
        hasDataSource: nasl.core.Boolean;
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        textField: (item: T) => nasl.core.String;
        valueField: (item: T) => V;
        iconField: (item: T) => nasl.core.String;
        toField: (item: T) => nasl.core.String;
        parentField: (item: T) => nasl.core.String;
        router: nasl.core.Boolean;
        value: V;
        private field;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
        }) => void;
        slotDefault: () => Array<UNavbarGroupMulti | UNavbarItemMulti | UNavbarDividerMulti>;
        slotLeft: () => Array<ViewComponent>;
        slotRight: () => Array<ViewComponent>;
    }
    class UNavbarItemMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarItemMultiOptions>);
    }
    class UNavbarItemMultiOptions {
        private text;
        private item;
        private to;
        private replace;
        private exact;
        value: nasl.core.String;
        icon: nasl.core.String;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        disabled: nasl.core.Boolean;
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        onFocus: () => void;
        onBlur: () => void;
        private onNavigate;
        slotDefault: () => Array<ViewComponent>;
    }
    class UNavbarDividerMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarDividerMultiOptions>);
    }
    class UNavbarDividerMultiOptions {
    }
    class UNavbarDropdownMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarDropdownMultiOptions>);
    }
    class UNavbarDropdownMultiOptions {
        placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'manual';
        disabled: nasl.core.Boolean;
    }
    class UNavbarMenuMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuMultiOptions>);
    }
    class UNavbarMenuMultiOptions {
    }
    class UNavbarMenuGroupMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuGroupMultiOptions>);
    }
    class UNavbarMenuGroupMultiOptions {
    }
    class UNavbarMenuItemMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuItemMultiOptions>);
    }
    class UNavbarMenuItemMultiOptions {
    }
    class UNavbarMenuDividerMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuDividerMultiOptions>);
    }
    class UNavbarMenuDividerMultiOptions {
    }
    class UNavbarSelectMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectMultiOptions>);
    }
    class UNavbarSelectMultiOptions {
    }
    class UNavbarSelectGroupMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectGroupMultiOptions>);
    }
    class UNavbarSelectGroupMultiOptions {
    }
    class UNavbarSelectItemMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectItemMultiOptions>);
    }
    class UNavbarSelectItemMultiOptions {
    }
    class UNavbarSelectDividerMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectDividerMultiOptions>);
    }
    class UNavbarSelectDividerMultiOptions {
    }
    class UNavbarGroupMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarGroupMultiOptions>);
    }
    class UNavbarGroupMultiOptions {
        private title;
        collapsible: nasl.core.Boolean;
        trigger: 'click' | 'hover' | 'right-click' | 'double-click';
        expanded: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        slotDefault: () => Array<UNavbarGroupMulti | UNavbarItemMulti>;
    }
}
declare namespace nasl.ui {
    class UNavbar extends ViewComponent {
        constructor(options?: Partial<UNavbarOptions>);
    }
    class UNavbarOptions {
        router: nasl.core.Boolean;
        value: nasl.core.String;
        private field;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private onClick;
        private onBeforeSelect;
        private onInput;
        onSelect: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
            selectedItem: nasl.core.Any;
            item: nasl.core.Any;
            oldItem: nasl.core.Any;
        }) => void;
        private onChange;
        slotDefault: () => Array<UNavbarItem | UNavbarDivider>;
        slotLeft: () => Array<ViewComponent>;
        slotRight: () => Array<ViewComponent>;
    }
    class UNavbarItem extends ViewComponent {
        constructor(options?: Partial<UNavbarItemOptions>);
    }
    class UNavbarItemOptions {
        text: nasl.core.String;
        value: nasl.core.Any;
        icon: nasl.core.String;
        disabled: nasl.core.Boolean;
        private item;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        private to;
        private replace;
        private exact;
        private onBeforeSelect;
        private onBeforeNavigate;
        private onNavigate;
        slotDefault: () => Array<ViewComponent>;
    }
    class UNavbarDivider extends ViewComponent {
        constructor(options?: Partial<UNavbarDividerOptions>);
    }
    class UNavbarDividerOptions {
    }
    class UNavbarDropdown extends ViewComponent {
        constructor(options?: Partial<UNavbarDropdownOptions>);
    }
    class UNavbarDropdownOptions {
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'manual';
        placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
        disabled: nasl.core.Boolean;
    }
    class UNavbarMenu extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuOptions>);
    }
    class UNavbarMenuOptions {
    }
    class UNavbarMenuGroup extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuGroupOptions>);
    }
    class UNavbarMenuGroupOptions {
    }
    class UNavbarMenuItem extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuItemOptions>);
    }
    class UNavbarMenuItemOptions {
    }
    class UNavbarMenuDivider extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuDividerOptions>);
    }
    class UNavbarMenuDividerOptions {
    }
    class UNavbarSelect extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectOptions>);
    }
    class UNavbarSelectOptions {
    }
    class UNavbarSelectGroup extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectGroupOptions>);
    }
    class UNavbarSelectGroupOptions {
    }
    class UNavbarSelectItem extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectItemOptions>);
    }
    class UNavbarSelectItemOptions {
    }
    class UNavbarSelectDivider extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectDividerOptions>);
    }
    class UNavbarSelectDividerOptions {
    }
}
declare namespace nasl.ui {
    class UNumberInput extends ViewComponent {
        constructor(options?: Partial<UNumberInputOptions>);
    }
    class UNumberInputOptions {
        private formatter;
        value: nasl.core.Decimal;
        min: nasl.core.Decimal;
        max: nasl.core.Decimal;
        private precision;
        decimalLength: nasl.core.Decimal;
        decimalPlaces: {
            places: nasl.core.Decimal;
            omit: nasl.core.Boolean;
        };
        thousandths: nasl.core.Boolean;
        percentSign: nasl.core.Boolean;
        unit: {
            type: nasl.core.String;
            value: nasl.core.String;
        };
        advancedFormat: {
            enable: nasl.core.Boolean;
            value: nasl.core.String;
        };
        placeholder: nasl.core.String;
        autofocus: nasl.core.Boolean;
        hideButtons: nasl.core.Boolean;
        clearable: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        preview: nasl.core.Boolean;
        step: nasl.core.Decimal;
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        onInput: (event: String) => void;
        onValidate: (event: {
            trigger: nasl.core.String;
            valid: nasl.core.Boolean;
            triggerValid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => void;
        onChange: (event: {
            value: nasl.core.Decimal;
            oldValue: nasl.core.Decimal;
            formattedValue: nasl.core.String;
            valid: nasl.core.Boolean;
        }) => void;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onKeydown: (event: {
            altKey: nasl.core.Boolean;
            code: nasl.core.String;
            ctrlKey: nasl.core.Boolean;
            isComposing: nasl.core.Boolean;
            key: nasl.core.String;
            metaKey: nasl.core.Boolean;
            repeat: nasl.core.Boolean;
            shiftKey: nasl.core.Boolean;
        }) => void;
        onKeyup: (event: {
            altKey: nasl.core.Boolean;
            code: nasl.core.String;
            ctrlKey: nasl.core.Boolean;
            isComposing: nasl.core.Boolean;
            key: nasl.core.String;
            metaKey: nasl.core.Boolean;
            repeat: nasl.core.Boolean;
            shiftKey: nasl.core.Boolean;
        }) => void;
        private slotDefault;
    }
}
declare namespace nasl.ui {
    class UPagination extends ViewComponent {
        constructor(options?: Partial<UPaginationOptions>);
    }
    class UPaginationOptions {
        page: nasl.core.Decimal;
        total: nasl.core.Decimal;
        side: nasl.core.Decimal;
        around: nasl.core.Decimal;
        totalItems: nasl.core.Decimal;
        pageSize: nasl.core.Decimal;
        pageSizeOptions: Array<nasl.core.Decimal>;
        showTotal: nasl.core.Boolean;
        showSizer: nasl.core.Boolean;
        showJumper: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private onBeforeSelect;
        onSelect: (event: {
            page: nasl.core.Integer;
            oldPage: nasl.core.Integer;
        }) => void;
        onChange: (event: {
            page: nasl.core.Integer;
            oldPage: nasl.core.Integer;
        }) => void;
        onChangePageSize: (event: {
            page: nasl.core.Integer;
            oldPage: nasl.core.Integer;
            pageSizeOptions: Array<nasl.core.Integer>;
        }) => void;
    }
}
declare namespace nasl.ui {
    export class UPanel extends ViewComponent {
        constructor(options?: Partial<UPanelOptions>);
    }
    export class UPanelOptions {
        private content;
        private title;
        bordered: nasl.core.Boolean;
        shadow: 'always' | 'hover' | 'never';
        slotDefault: () => Array<UPanelGroup>;
        slotTitle: () => Array<ViewComponent>;
    }
    class UPanelGroup extends ViewComponent {
        constructor(options?: Partial<UPanelGroupOptions>);
    }
    class UPanelGroupOptions {
        title: nasl.core.String;
        slotDefault: () => Array<ViewComponent>;
    }
    export {};
}
declare namespace nasl.ui {
    class UPopupCombination extends ViewComponent {
        open(): void;
        close(): void;
        toggle(opened?: nasl.core.Boolean): void;
        update(): void;
        scheduleUpdate(): void;
        constructor(options?: Partial<UPopupCombinationOptions>);
    }
    class UPopupCombinationOptions {
        private offset;
        private mergeBorders;
        title: nasl.core.String;
        placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
        hideDelay: nasl.core.Decimal;
        followCursor: nasl.core.Boolean;
        display: 'inline' | 'block';
        ellipsis: nasl.core.Boolean;
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'manual';
        opened: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private onBeforeOpen;
        onOpen: () => void;
        private onBeforeClose;
        onClose: () => void;
        private onBeforeToggle;
        private onToggle;
        slotDefault: () => Array<ViewComponent>;
        slotReference: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class URadios<T, V> extends ViewComponent {
        data: URadiosOptions<T, V>['dataSource'];
        value: URadiosOptions<T, V>['value'];
        reload(): void;
        constructor(options?: Partial<URadiosOptions<T, V>>);
    }
    class URadiosOptions<T, V> {
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        private textField;
        valueField: (item: T) => V;
        value: V;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        preview: nasl.core.Boolean;
        private onBeforeSelect;
        onInput: (event: String) => void;
        onSelect: () => void;
        onChange: (event: {
            value: V;
            oldValue: V;
        }) => void;
        private onBeforeLoad;
        onLoad: () => void;
        slotDefault: () => Array<URadio<V>>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class URadio<V> extends ViewComponent {
        constructor(options?: Partial<URadioOptions<V>>);
    }
    class URadioOptions<V> {
        private text;
        label: V;
        autofocus: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private onBeforeSelect;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class URate extends ViewComponent {
        constructor(options?: Partial<URateOptions>);
    }
    class URateOptions {
        value: nasl.core.Decimal;
        max: nasl.core.Decimal;
        showText: nasl.core.Boolean;
        texts: Array<nasl.core.String>;
        showTooltip: nasl.core.Boolean;
        tooltips: Array<nasl.core.String>;
        allowHalf: nasl.core.Boolean;
        clearable: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        onChange: (event: {
            value: nasl.core.Decimal;
            oldValue: nasl.core.Decimal;
        }) => void;
    }
}
declare namespace nasl.ui {
    class URegionSelect<T, V> extends ViewComponent {
        open(): void;
        close(): void;
        clear(): void;
        constructor(options?: Partial<URegionSelectOptions<T, V>>);
    }
    class URegionSelectOptions<T, V> {
        private join;
        converter: 'name' | 'code';
        data: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        value: nasl.core.Any;
        field: nasl.core.String;
        filterable: nasl.core.Boolean;
        placeholder: nasl.core.String;
        showFinalValue: nasl.core.Boolean;
        autofocus: nasl.core.Boolean;
        trigger: 'click' | 'hover';
        clearable: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        opened: nasl.core.Boolean;
        onInput: (event: nasl.core.String) => void;
        onSelect: (event: {
            value: V;
            values: nasl.collection.List<V>;
            items: nasl.collection.List<T>;
        }) => void;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onClear: () => void;
    }
}
declare namespace nasl.ui {
    class URouterView extends ViewComponent {
        constructor(options?: Partial<URouterViewOptions>);
    }
    class URouterViewOptions {
        disableKeepAlive: nasl.core.Boolean;
    }
}
declare namespace nasl.ui {
    class USelect<T, V, P extends boolean, M extends boolean, C extends string> extends ViewComponent {
        data: USelectOptions<T, V, P, M, C>['dataSource'];
        value: USelectOptions<T, V, P, M, C>['value'];
        size: USelectOptions<T, V, P, M, C>['pageSize'];
        page: USelectOptions<T, V, P, M, C>['pageNumber'];
        opened: USelectOptions<T, V, P, M, C>['opened'];
        open(): void;
        close(): void;
        toggle(opened?: nasl.core.Boolean): void;
        reload(): void;
        addItem(item: T, inFirst?: nasl.core.Boolean): void;
        constructor(options?: Partial<USelectOptions<T, V, P, M, C>>);
    }
    class USelectOptions<T, V, P extends boolean, M extends boolean, C extends string> {
        dataSource: P extends true ? {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        } : nasl.collection.List<T>;
        dataSchema: T;
        value: M extends true ? (C extends '' ? nasl.collection.List<V> : nasl.core.String) : V;
        textField: (item: T) => nasl.collection.List<T>;
        valueField: (item: T) => V;
        private pageable;
        private remotePaging;
        pagination: nasl.core.Boolean;
        pageSize: nasl.core.Decimal;
        private pageNumber;
        sorting: {
            field: nasl.core.String;
            order: 'asc' | 'desc';
        };
        description: nasl.core.Boolean;
        descriptionField: (item: T) => nasl.core.String;
        iconField: (item: T) => nasl.core.String;
        private selectedValuesData;
        filterable: nasl.core.Boolean;
        private remoteFiltering;
        matchMethod: 'includes' | 'startsWith' | 'endsWith';
        showRenderFooter: nasl.core.Boolean;
        hasAllCheckItem: nasl.core.Boolean;
        allCheckItemText: nasl.core.String;
        converter: '' | 'join' | 'join:|' | 'join:;' | 'json';
        placeholder: nasl.core.String;
        autofocus: nasl.core.Boolean;
        prefix: 'search';
        suffix: 'search';
        appendTo: 'reference' | 'body';
        clearable: nasl.core.Boolean;
        tagsOverflow: 'hidden' | 'collapse' | 'visible';
        private cancelable;
        multiple: M;
        initialLoad: nasl.core.Boolean;
        private loadingText;
        showEmptyText: nasl.core.Boolean;
        emptyText: nasl.core.String;
        emptyDisabled: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        preview: nasl.core.Boolean;
        opened: nasl.core.Boolean;
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        popperWidth: nasl.core.String;
        isItemDisplay: nasl.core.Boolean;
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        private caseSensitive;
        private autoComplete;
        private onBeforeSelect;
        onInput: (event: V) => void;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;
        onChange: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            values: nasl.collection.List<V>;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;
        private onBeforeOpen;
        onOpen: () => void;
        private onBeforeClose;
        onClose: () => void;
        private onBeforeLoad;
        onLoad: () => void;
        onClickPrefix: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onClickSuffix: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        onBeforeFilter: (event: {
            filterText: nasl.core.String;
        }) => void;
        slotDefault: () => Array<USelectItem<T, V> | USelectGroup<T, V> | USelectDivider>;
    }
    class USelectItem<T, V> extends ViewComponent {
        constructor(options?: Partial<USelectItemOptions<T, V>>);
    }
    class USelectItemOptions<T, V> {
        text: nasl.core.String;
        value: V;
        description: nasl.core.String;
        item: T;
        disabled: nasl.core.Boolean;
        private onBeforeSelect;
        slotDefault: (current: Current<T>) => Array<ViewComponent>;
    }
    class USelectGroup<T, V> extends ViewComponent {
        constructor(options?: Partial<USelectGroupOptions<T, V>>);
    }
    class USelectGroupOptions<T, V> {
        title: nasl.core.String;
        slotDefault: () => Array<USelectItem<T, V>>;
        slotTitle: () => Array<ViewComponent>;
        private slotExtra;
    }
    class USelectDivider extends ViewComponent {
        constructor(options?: Partial<USelectDividerOptions>);
    }
    class USelectDividerOptions {
    }
}
declare namespace nasl.ui {
    class USelectableSteps<T> extends ViewComponent {
        reload(): void;
        constructor(options?: Partial<USelectableStepsOptions<T>>);
    }
    class USelectableStepsOptions<T> {
        dataSource: nasl.collection.List<T>;
        dataSchema: T;
        private titleField;
        private descField;
        value: nasl.core.Decimal;
        direction: 'horizontal' | 'vertical';
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        size: 'auto' | 'normal';
        private onBeforeSelect;
        onSelect: (event: {
            value: nasl.core.Integer;
            oldValue: nasl.core.Integer;
            item: T;
        }) => void;
        onChange: (event: {
            value: nasl.core.Integer;
            oldValue: nasl.core.Integer;
            item: T;
            oldItem: T;
        }) => void;
        slotDefault: () => Array<USelectableStep>;
        slotTitle: (current: Current<T>) => Array<ViewComponent>;
        slotDesc: (current: Current<T>) => Array<ViewComponent>;
    }
    class USelectableStep extends ViewComponent {
        constructor(options?: Partial<USelectableStepOptions>);
    }
    class USelectableStepOptions {
        private title;
        private desc;
        status: 'pending' | 'selected' | 'passed' | 'failed';
        icon: nasl.core.String;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class USidebar<T, V> extends ViewComponent {
        toggleAll(expanded: nasl.core.Boolean): void;
        constructor(options?: Partial<USidebarOptions<T, V>>);
    }
    class USidebarOptions<T, V> {
        hasDataSource: nasl.core.Boolean;
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        textField: nasl.core.String;
        valueField: nasl.core.String;
        iconField: nasl.core.String;
        toField: nasl.core.String;
        parentField: nasl.core.String;
        router: nasl.core.Boolean;
        value: nasl.core.Any;
        collapsible: nasl.core.Boolean;
        accordion: nasl.core.Boolean;
        expandTrigger: 'click' | 'click-expander';
        enableCollapse: nasl.core.Boolean;
        collapseMode: 'fold' | 'expand';
        expandIcon: nasl.core.String;
        foldIcon: nasl.core.String;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;
        slotDefault: () => Array<USidebarGroup | USidebarItem | USidebarDivider>;
    }
    class USidebarItem extends ViewComponent {
        constructor(options?: Partial<USidebarItemOptions>);
    }
    class USidebarItemOptions {
        private text;
        private item;
        private to;
        private replace;
        private exact;
        value: nasl.core.String;
        icon: nasl.core.String;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        disabled: nasl.core.Boolean;
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        onFocus: () => void;
        onBlur: () => void;
        private onNavigate;
        slotDefault: () => Array<ViewComponent>;
    }
    class USidebarGroup extends ViewComponent {
        constructor(options?: Partial<USidebarGroupOptions>);
    }
    class USidebarGroupOptions {
        private title;
        collapsible: nasl.core.Boolean;
        expanded: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        slotDefault: () => Array<USidebarGroup | USidebarItem | USidebarDivider>;
        slotTitle: () => Array<ViewComponent>;
        slotExtra: () => Array<ViewComponent>;
    }
    class USidebarDivider extends ViewComponent {
        constructor(options?: Partial<USidebarDividerOptions>);
    }
    class USidebarDividerOptions {
    }
}
declare namespace nasl.ui {
    class USwitch extends ViewComponent {
        constructor(options?: Partial<USwitchOptions>);
    }
    class USwitchOptions {
        value: nasl.core.Boolean;
        withText: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private onBeforeToggle;
        onInput: (event: nasl.core.Boolean) => void;
        onOn: () => void;
        onOff: () => void;
        onToggle: (event: {
            value: nasl.core.Boolean;
            oldValue: nasl.core.Boolean;
        }) => void;
        onChange: (event: {
            value: nasl.core.Boolean;
            oldValue: nasl.core.Boolean;
        }) => void;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UTableView<T, T1, V, P extends boolean, M extends boolean> extends ViewComponent {
        data: UTableViewOptions<T, T1, V, P, M>['dataSource'];
        size: UTableViewOptions<T, T1, V, P, M>['pageSize'];
        page: UTableViewOptions<T, T1, V, P, M>['pageNumber'];
        sort: UTableViewOptions<T, T1, V, P, M>['sorting']['field'];
        order: UTableViewOptions<T, T1, V, P, M>['sorting']['order'];
        value: UTableViewOptions<T, T1, V, P, M>['value'];
        values: UTableViewOptions<T, T1, V, P, M>['values'];
        reload(): void;
        getFields(): any;
        exportExcel(page?: nasl.core.Integer, size?: nasl.core.Integer, filename?: nasl.core.String, sort?: nasl.core.String, order?: 'asc' | 'desc', excludeColumns?: Array<nasl.core.String>): void;
        resetEdit(item?: object): void;
        constructor(options?: Partial<UTableViewOptions<T, T1, V, P, M>>);
    }
    class UTableViewOptions<T, T1, V, P extends boolean, M extends boolean> {
        dataSource: P extends true ? {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        } : nasl.collection.List<T>;
        dataSchema: T;
        private extraParams;
        private pageable;
        private remotePaging;
        pagination: nasl.core.Boolean;
        pageSize: nasl.core.Decimal;
        showSizer: nasl.core.Boolean;
        pageSizeOptions: Array<nasl.core.Decimal>;
        pageNumber: nasl.core.Decimal;
        showTotal: nasl.core.Boolean;
        showJumper: nasl.core.Boolean;
        sorting: {
            field: nasl.core.String;
            order: nasl.core.String;
            compare?: Function;
        };
        private remoteSorting;
        private defaultOrder;
        private filtering;
        private remoteFiltering;
        valueField: (item: T) => V;
        value: T;
        values: nasl.collection.List<T>;
        treeDisplay: nasl.core.Boolean;
        parentField: (item: T) => V;
        childrenField: (item: T) => nasl.collection.List<T>;
        hasChildrenField: (item: T) => nasl.core.Boolean;
        treeCheckType: 'up+down' | 'down' | 'up' | 'none';
        title: nasl.core.String;
        showHead: nasl.core.Boolean;
        stickHead: nasl.core.Boolean;
        stickHeadOffset: nasl.core.Decimal;
        private hover;
        selectable: nasl.core.Boolean;
        cancelable: nasl.core.Boolean;
        draggable: nasl.core.Boolean;
        acrossTableDrag: nasl.core.Boolean;
        canDragableHandler: Function;
        canDropinHandler: Function;
        accordion: nasl.core.Boolean;
        resizable: nasl.core.Boolean;
        resizeRemaining: 'sequence' | 'average' | 'none';
        configurable: nasl.core.Boolean;
        virtual: nasl.core.Boolean;
        itemHeight: nasl.core.Decimal;
        virtualCount: nasl.core.Decimal;
        initialLoad: nasl.core.Boolean;
        designerMode: 'success' | 'empty' | 'loading' | 'error';
        loadingText: nasl.core.String;
        loading: nasl.core.Boolean;
        errorText: nasl.core.String;
        error: nasl.core.Boolean;
        emptyText: nasl.core.String;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        titleAlignment: 'left' | 'center' | 'right';
        boldHeader: nasl.core.Boolean;
        private border;
        line: nasl.core.Boolean;
        striped: nasl.core.Boolean;
        defaultColumnWidth: nasl.core.String | nasl.core.Decimal;
        private onBeforeLoad;
        onLoad: (event: null) => void;
        private onBeforePage;
        onPage: (event: {
            size: nasl.core.Integer;
            oldSize: nasl.core.Integer;
            number: nasl.core.Integer;
            oldNumber: nasl.core.Integer;
        }) => void;
        private onBeforeSort;
        onSort: (event: {
            field: nasl.core.String;
            order: nasl.core.String;
            compare?: Function;
        }) => void;
        private onBeforeFilter;
        onFilter: (event: object) => void;
        onClickRow: (event: {
            item: T;
            index: nasl.core.Integer;
            rowIndex: nasl.core.Integer;
        }) => void;
        onDblclickRow: (event: {
            item: T;
            index: nasl.core.Integer;
            rowIndex: nasl.core.Integer;
        }) => void;
        private onBeforeSelect;
        onInput: (event: V) => void;
        onSelect: (event: {
            selectedItem: T;
            value: V;
            oldValue: V;
            item: T;
            oldItem: T;
        }) => void;
        onCheck: (event: {
            checked: nasl.core.Boolean;
            oldChecked: nasl.core.Boolean;
            values: nasl.collection.List<V>;
            oldValues: nasl.collection.List<V>;
            item: T;
        }) => void;
        onChange: (event: {
            value: V;
            oldValue: V;
            item: T;
            oldItem: T;
            values: nasl.collection.List<V>;
            oldValues: nasl.collection.List<V>;
            items: nasl.collection.List<T>;
        }) => void;
        onResize: () => void;
        onBeforeToggleExpanded: (event: {
            item: T;
            expanded: nasl.core.Boolean;
            oldExpanded: nasl.core.Boolean;
        }) => void;
        onToggleExpanded: (event: {
            item: T;
            expanded: nasl.core.Boolean;
        }) => void;
        onDragstart: (event: {
            source: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            target: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            finalSource: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            position: nasl.core.String;
            updateData: {
                sourceList: nasl.collection.List<T>;
                targetList: nasl.collection.List<T>;
            };
        }) => void;
        onDragover: (event: {
            source: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            target: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            finalSource: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            position: nasl.core.String;
            updateData: {
                sourceList: nasl.collection.List<T>;
                targetList: nasl.collection.List<T>;
            };
        }) => void;
        onDrop: (event: {
            source: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            target: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            finalSource: {
                parent: T;
                item: T;
                level: nasl.core.Integer;
                index: nasl.core.Integer;
            };
            position: nasl.core.String;
            updateData: {
                sourceList: nasl.collection.List<T>;
                targetList: nasl.collection.List<T>;
            };
        }) => void;
        slotDefault: () => Array<UTableViewColumn<T, V, P, M> | UTableViewColumnDynamic<T, T1, V, P, M> | UTableViewColumnGroup<T, V, P, M>>;
        slotLoading: () => Array<ViewComponent>;
        slotError: () => Array<ViewComponent>;
        slotEmpty: () => Array<ViewComponent>;
        slotDragGhost: (current: Current<T>) => Array<ViewComponent>;
    }
    class UTableViewColumn<T, V, P extends boolean, M extends boolean> extends ViewComponent {
        constructor(options?: Partial<UTableViewColumnOptions<T, V, P, M>>);
    }
    class UTableViewColumnOptions<T, V, P extends boolean, M extends boolean> {
        private formatter;
        private filters;
        field: (item: T) => V;
        sortable: nasl.core.Boolean;
        defaultOrder: 'asc' | 'desc';
        type: 'normal' | 'index' | 'radio' | 'checkbox' | 'expander' | 'tree' | 'editable' | 'dragHandler';
        autoIndex: nasl.core.Boolean;
        startIndex: nasl.core.Decimal;
        private dblclickHandler;
        private title;
        fixed: nasl.core.Boolean;
        ellipsis: nasl.core.Boolean;
        hidden: nasl.core.Boolean;
        expanderPosition: 'left' | 'right';
        width: nasl.core.String | nasl.core.Decimal;
        colSpan: nasl.core.Integer;
        autoRowSpan: nasl.core.Boolean;
        slotCell: (current: Current<T>) => Array<ViewComponent>;
        slotEditcell: (current: Current<T>) => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
        slotExpandContent: (current: Current<T>) => Array<ViewComponent>;
        slotExpander: (current: Current<T>) => Array<ViewComponent>;
    }
    class UTableViewColumnConfig<T, V> extends ViewComponent {
        constructor(options?: Partial<UTableViewColumnConfigOptions<T, V>>);
    }
    class UTableViewColumnConfigOptions<T, V> {
        private textField;
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        valueField: (item: T) => V;
        value: V;
        showFooter: nasl.core.Boolean;
        onSelect: (event: {
            selectedItem: T;
            value: V;
            oldValue: V;
            item: T;
            oldItem: T;
        }) => void;
        slotTitle: () => Array<ViewComponent>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class UTableViewColumnDynamic<T, T1, V, P extends boolean, M extends boolean> extends ViewComponent {
        data: UTableViewColumnDynamicOptions<T, T1, V, P, M>['dataSource'];
        constructor(options?: Partial<UTableViewColumnDynamicOptions<T, T1, V, P, M>>);
    }
    class UTableViewColumnDynamicOptions<T, T1, V, P extends boolean, M extends boolean> {
        dataSource: P extends true ? {
            list: nasl.collection.List<T1>;
            total: nasl.core.Integer;
        } : nasl.collection.List<T1>;
        dataSchema: T1;
        valueField: (item: T) => V;
        sortable: nasl.core.Boolean;
        defaultOrder: 'asc' | 'desc';
        fixed: nasl.core.Boolean;
        ellipsis: nasl.core.Boolean;
        hidden: nasl.core.Boolean;
        width: nasl.core.String | nasl.core.Decimal;
        slotTitle: (current: Current<T1>) => Array<ViewComponent>;
        slotCell: (current: CurrentDynamic<T, T1>) => Array<ViewComponent>;
    }
    class UTableViewColumnGroup<T, V, P extends boolean, M extends boolean> extends ViewComponent {
        constructor(options?: Partial<UTableViewColumnGroupOptions<T, V, P, M>>);
    }
    class UTableViewColumnGroupOptions<T, V, P extends boolean, M extends boolean> {
        private title;
        slotDefault: () => Array<UTableViewColumn<T, V, P, M>>;
        slotTitle: () => Array<ViewComponent>;
    }
    class UTableViewExpander extends ViewComponent {
        constructor(options?: Partial<UTableViewExpanderOptions>);
    }
    class UTableViewExpanderOptions {
        expandIcon: nasl.core.String;
        collapseIcon: nasl.core.String;
    }
}
declare namespace nasl.ui {
    class UTabs<T, V> extends ViewComponent {
        reload(): void;
        constructor(options?: Partial<UTabsOptions<T, V>>);
    }
    class UTabsOptions<T, V> {
        private showScrollButtons;
        dataSource: nasl.collection.List<T>;
        dataSchema: T;
        titleField: (item: T) => nasl.core.String;
        valueField: (item: T) => V;
        urlField: (item: T) => nasl.core.String;
        value: V;
        router: nasl.core.Boolean;
        closableField: nasl.core.String;
        closable: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        appear: 'square' | 'round' | 'line' | 'text' | 'capsule' | 'split';
        size: 'normal' | 'small' | 'mini';
        onClick: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        private onBeforeSelect;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => void;
        private onBeforeClose;
        onClose: (event: {
            value: V;
            oldValue: V;
        }) => void;
        private onBeforeLoad;
        onLoad: () => void;
        slotDefault: () => Array<UTab<V>>;
        private slotExtra;
        slotTitle: (current: Current<T>) => Array<ViewComponent>;
        slotContent: (current: Current<T>) => Array<ViewComponent>;
    }
    class UTab<V> extends ViewComponent {
        constructor(options?: Partial<UTabOptions<V>>);
    }
    class UTabOptions<V> {
        private title;
        private href;
        private target;
        private to;
        private replace;
        private append;
        private exact;
        value: V;
        linkType: 'destination';
        hrefAndTo: nasl.core.String;
        closable: nasl.core.Boolean;
        showTabItem: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UTaskbox extends ViewComponent {
        constructor(options?: Partial<UTaskboxOptions>);
    }
    class UTaskboxOptions {
        icon: nasl.core.String;
        size: nasl.core.Decimal;
        interval: nasl.core.Decimal;
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
        onFocus: () => void;
        onBlur: () => void;
    }
}
declare namespace nasl.ui {
    class UText extends ViewComponent {
        constructor(options?: Partial<UTextOptions>);
    }
    class UTextOptions {
        text: nasl.core.String;
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'disabled';
        display: 'inline' | 'block';
        overflow: 'normal' | 'ellipsis' | 'break' | 'nowrap';
        size: 'default' | 'small' | 'normal' | 'large' | 'huge';
        onClick: () => void;
        onDblclick: () => void;
        onContextmenu: () => void;
        onMousedown: () => void;
        onMouseup: () => void;
        onMouseenter: () => void;
        onMouseleave: () => void;
    }
}
declare namespace nasl.ui {
    class UTextarea extends ViewComponent {
        private focus;
        private blur;
        private clear;
        constructor(options?: Partial<UTextareaOptions>);
    }
    class UTextareaOptions {
        private minlength;
        private spellcheck;
        value: nasl.core.String;
        placeholder: nasl.core.String;
        maxlength: nasl.core.Decimal;
        showWordLimit: nasl.core.Boolean;
        limitPosition: 'inside' | 'outside';
        autofocus: nasl.core.Boolean;
        clearable: nasl.core.Boolean;
        resize: 'none' | 'both' | 'horizontal' | 'vertical';
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        preview: nasl.core.Boolean;
        size: 'full' | 'huge' | 'large' | 'medium' | 'normal';
        autosize: nasl.core.Boolean | object;
        private onBeforeInput;
        onInput: (event: nasl.core.String) => void;
        onChange: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => void;
        private onFocus;
        private onBlur;
        private onBeforeClear;
        onClear: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => void;
        private slotDefault;
    }
}
declare namespace nasl.ui {
    class UTimePicker extends ViewComponent {
        constructor(options?: Partial<UTimePickerOptions>);
    }
    class UTimePickerOptions {
        minUnit: 'second' | 'minute';
        range: nasl.core.Boolean;
        value: nasl.core.String;
        startTime: nasl.core.String;
        endTime: nasl.core.String;
        minTime: nasl.core.String;
        maxTime: nasl.core.String;
        showFormatter: 'HH:mm:ss' | 'HH时mm分ss秒' | 'HH:mm' | 'HH时mm分';
        advancedFormat: {
            enable: nasl.core.Boolean;
            value: nasl.core.String;
        };
        autofocus: nasl.core.Boolean;
        showRightNowButton: nasl.core.Boolean;
        rightNowTitle: nasl.core.String;
        showFooterButton: nasl.core.Boolean;
        cancelTitle: nasl.core.String;
        okTitle: nasl.core.String;
        preIcon: 'time';
        suffixIcon: 'time';
        appendTo: 'reference' | 'body';
        clearable: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        preview: nasl.core.Boolean;
        private visible;
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        onChange: (event: {
            date: nasl.core.String;
            time: nasl.core.String;
        }) => void;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
    }
}
declare namespace nasl.ui {
    class UTimeline<T> extends ViewComponent {
        constructor(options?: Partial<UTimelineOptions<T>>);
    }
    class UTimelineOptions<T> {
        dataSource: nasl.collection.List<T>;
        dataSchema: T;
        mode: 'default' | 'label';
        pending: nasl.core.Boolean;
        slotDefault: () => Array<UTimelineItem>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class UTimelineItem extends ViewComponent {
        constructor(options?: Partial<UTimelineItemOptions>);
    }
    class UTimelineItemOptions {
        label: nasl.core.String;
        position: 'left' | 'right';
        color: nasl.core.String;
        slotDefault: () => Array<ViewComponent>;
        slotDot: () => Array<ViewComponent>;
        slotLabel: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UToastSingle extends ViewComponent {
        open(): void;
        close(): void;
        constructor(options?: Partial<UToastSingleOptions>);
    }
    class UToastSingleOptions {
        text: nasl.core.String;
        color: 'success' | 'warning' | 'error' | 'loading' | 'custom';
        customIcon: nasl.core.String;
        duration: nasl.core.Decimal;
        private position;
        private single;
        private closable;
        onOpen: (event: {
            text: nasl.core.String;
            color: nasl.core.String;
            duration: nasl.core.Integer;
            timestamp: nasl.core.Integer;
        }) => void;
        onClose: (event: {
            text: nasl.core.String;
            color: nasl.core.String;
            duration: nasl.core.Integer;
            timestamp: nasl.core.Integer;
        }) => void;
    }
}
declare namespace nasl.ui {
    class UToc extends ViewComponent {
        constructor(options?: Partial<UTocOptions>);
    }
    class UTocOptions {
        value: nasl.core.String;
        onBeforeSelect: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
            node: nasl.core.String;
            oldNode: nasl.core.String;
        }) => void;
        onSelect: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
            node: nasl.core.String;
            oldNode: nasl.core.String;
        }) => void;
        slotDefault: () => Array<UTocItem>;
    }
    class UTocItem extends ViewComponent {
        constructor(options?: Partial<UTocItemOptions>);
    }
    class UTocItemOptions {
        private label;
        value: nasl.core.String;
        private item;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        disabled: nasl.core.Boolean;
        onClick: (event: {
            altKey: nasl.core.Boolean;
            button: nasl.core.Integer;
            clientX: nasl.core.Integer;
            clientY: nasl.core.Integer;
            ctrlKey: nasl.core.Boolean;
            metaKey: nasl.core.Boolean;
            movementX: nasl.core.Integer;
            movementY: nasl.core.Integer;
            offsetX: nasl.core.Integer;
            offsetY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            screenX: nasl.core.Integer;
            screenY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => void;
        slotDefault: () => Array<UTocItem>;
        slotLabel: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UTransfer<T, V> extends ViewComponent {
        forward(values: Array<nasl.core.String>): void;
        reverse(values: Array<nasl.core.String>): void;
        transfer(direction: 'forward' | 'reverse', values: Array<nasl.core.String>): void;
        constructor(options?: Partial<UTransferOptions<T, V>>);
    }
    class UTransferOptions<T, V> {
        private matchMethod;
        private pageable;
        private pageSize;
        source: nasl.collection.List<T>;
        target: nasl.collection.List<T>;
        textField: (item: T) => nasl.core.String;
        valueField: (item: T) => V;
        filterable: nasl.core.Boolean;
        caseSensitive: nasl.core.Boolean;
        clearable: nasl.core.Boolean;
        showHead: nasl.core.Boolean;
        sourceTitle: nasl.core.String;
        targetTitle: nasl.core.String;
        placeholder: nasl.core.String;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onTransfer: (event: {
            source: nasl.collection.List<T>;
            target: nasl.collection.List<T>;
            transfer: nasl.collection.List<T>;
            transferValues: nasl.collection.List<V>;
        }) => void;
        onChange: (event: {
            source: nasl.collection.List<T>;
            target: nasl.collection.List<T>;
            transfer: nasl.collection.List<T>;
            transferValues: nasl.collection.List<V>;
        }) => void;
        private slotDefault;
        private slotItem;
    }
}
declare namespace nasl.ui {
    class UTreeSelectNew<T, V, M extends boolean> extends ViewComponent {
        data: UTreeSelectNewOptions<T, V, M>['dataSource'];
        value: UTreeSelectNewOptions<T, V, M>['value'];
        reload(): void;
        constructor(options?: Partial<UTreeSelectNewOptions<T, V, M>>);
    }
    class UTreeSelectNewOptions<T, V, M extends boolean> {
        dataSource: nasl.collection.List<T>;
        dataSchema: T;
        textField: (item: T) => nasl.core.String;
        valueField: (item: T) => V;
        parentField: (item: T) => nasl.core.String;
        childrenField: (item: T) => nasl.core.String;
        value: V;
        checkable: nasl.core.Boolean;
        placeholder: nasl.core.String;
        checkControlled: nasl.core.Boolean;
        disabledField: nasl.core.String;
        clearable: nasl.core.Boolean;
        appendTo: 'reference' | 'body';
        disabled: nasl.core.Boolean;
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        onChange: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => void;
        onSelect: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => void;
        onCheck: (event: {
            checked: nasl.core.Boolean;
            oldChecked: nasl.core.Boolean;
            node: T;
            values: nasl.collection.List<V>;
        }) => void;
        private onBeforeLoad;
        onLoad: () => void;
        onBeforeClear: (event: {
            value: V;
            oldValue: V;
            values: nasl.collection.List<V>;
            oldValues: nasl.collection.List<V>;
        }) => void;
        onClear: (event: {
            value: V;
            oldValue: V;
            values: nasl.collection.List<V>;
            oldValues: nasl.collection.List<V>;
        }) => void;
        slotDefault: () => Array<UTreeViewNodeNew<T, V>>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UTreeViewNew<T, V, M extends boolean> extends ViewComponent {
        private walk;
        private find;
        private toggleAll;
        private checkAll;
        reload(): void;
        constructor(options?: Partial<UTreeViewNewOptions<T, V, M>>);
    }
    class UTreeViewNewOptions<T, V, M extends boolean> {
        dataSource: nasl.collection.List<T>;
        dataSchema: T;
        textField: (item: T) => nasl.core.String;
        valueField: (item: T) => V;
        childrenField: nasl.core.String;
        parentField: nasl.core.String;
        value: V;
        checkControlled: nasl.core.Boolean;
        checkable: nasl.core.Boolean;
        accordion: nasl.core.Boolean;
        expandTrigger: 'click' | 'click-expander';
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private onBeforeSelect;
        onInput: (event: V | nasl.collection.List<V>) => void;
        onSelect: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => void;
        onChange: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => void;
        onToggle: (event: {
            expanded: nasl.core.Boolean;
            node: T;
        }) => void;
        onCheck: (event: {
            checked: nasl.core.Boolean;
            oldChecked: nasl.core.Boolean;
            node: T;
            values: nasl.collection.List<V>;
        }) => void;
        private onBeforeLoad;
        onLoad: () => void;
        slotDefault: () => Array<UTreeViewNodeNew<T, V>>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class UTreeViewNodeNew<T, V> extends ViewComponent {
        constructor(options?: Partial<UTreeViewNodeNewOptions<T, V>>);
    }
    class UTreeViewNodeNewOptions<T, V> {
        text: nasl.core.String;
        private node;
        value: V;
        checked: nasl.core.Boolean;
        expanded: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        private onBeforeSelect;
        private onBeforeToggle;
        onToggle: (event: {
            expanded: nasl.core.Boolean;
            node: T;
        }) => void;
        onCheck: (event: {
            checked: nasl.core.Boolean;
            oldChecked: nasl.core.Boolean;
            node: T;
        }) => void;
        slotDefault: () => Array<UTreeViewNodeNew<T, V>>;
    }
}
declare namespace nasl.ui {
    class UUploader extends ViewComponent {
        select(): void;
        constructor(options?: Partial<UUploaderOptions>);
    }
    class UUploaderOptions {
        private dataType;
        private pastable;
        value: nasl.collection.List<nasl.core.String>;
        url: nasl.core.String;
        name: nasl.core.String;
        accept: nasl.core.String;
        withCredentials: nasl.core.Boolean;
        data: object;
        limit: nasl.core.Decimal;
        maxSize: nasl.core.String;
        listType: 'text' | 'image' | 'card';
        urlField: nasl.core.String;
        fileIconSwitcher: nasl.core.Boolean;
        private iconMap;
        fileType: 'doc|docx' | 'jpg|jpeg|png|bmp|gif|tiff|tif|webp|svg|psd|raw' | 'pdf' | 'xlsx' | 'txt' | 'ppt|pptx' | 'zip' | 'csv';
        fileIcon: nasl.core.String;
        downloadIconSwitcher: nasl.core.Boolean;
        downloadIcon: nasl.core.String;
        fileSize: nasl.core.Boolean;
        headers: Object;
        multiple: nasl.core.Boolean;
        multipleOnce: nasl.core.Boolean;
        openCropper: nasl.core.Boolean;
        fixedCropper: nasl.core.Boolean;
        cropperBoxWidth: nasl.core.Decimal;
        cropperBoxHeight: nasl.core.Decimal;
        cropperPreviewShape: 'rect' | 'square' | 'circle';
        cropperTitle: nasl.core.String;
        private autoUpload;
        showFileList: nasl.core.Boolean;
        converter: 'json' | 'simple';
        display: 'inline' | 'block';
        description: nasl.core.String;
        showErrorMessage: nasl.core.Boolean;
        dragDescription: nasl.core.String;
        checkFile: Function;
        access: 'public' | 'private';
        ttl: nasl.core.Boolean;
        ttlValue: nasl.core.Decimal;
        viaOriginURL: nasl.core.Boolean;
        lcapIsCompress: nasl.core.Boolean;
        draggable: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onBeforeUpload: (event: {
            file: File;
        }) => void;
        onProgress: (event: {
            item: {
                name: nasl.core.String;
                status: nasl.core.String;
                url: nasl.core.String;
            };
            file: File;
        }) => void;
        onCountExceed: (event: {
            item: {
                name: nasl.core.String;
                status: nasl.core.String;
                url: nasl.core.String;
            };
            file: File;
        }) => void;
        onSizeExceed: (event: {
            maxSize: nasl.core.Decimal;
            size: nasl.core.Decimal;
            message: nasl.core.String;
            name: nasl.core.String;
            file: File;
        }) => void;
        onSuccess: (event: {
            item: {
                name: nasl.core.String;
                status: nasl.core.String;
                url: nasl.core.String;
            };
            file: File;
        }) => void;
        onError: (event: {
            item: {
                name: nasl.core.String;
                status: nasl.core.String;
                url: nasl.core.String;
            };
            file: File;
        }) => void;
        onRemove: (event: {
            value: nasl.core.String;
            item: {
                name: nasl.core.String;
                status: nasl.core.String;
                url: nasl.core.String;
            };
            index: nasl.core.Integer;
        }) => void;
        slotDefault: () => Array<ViewComponent>;
        slotFileList: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UValidator extends ViewComponent {
        validate(trigger?: nasl.core.String, muted?: nasl.core.Boolean): void;
        constructor(options?: Partial<UValidatorOptions>);
    }
    class UValidatorOptions {
        validatingValue: nasl.core.Any;
        validatingProcess: Function;
        name: nasl.core.String;
        label: nasl.core.String;
        rules: nasl.core.String | Array<nasl.core.Any>;
        message: nasl.core.String;
        muted: nasl.core.String;
        ignoreValidation: nasl.core.Boolean;
        ignoreRules: nasl.core.Boolean;
        validatingOptions: object;
        manual: nasl.core.Boolean;
        appendTo: 'reference' | 'body';
        placement: 'right' | 'bottom';
        onValidate: (event: {
            trigger: nasl.core.String;
            valid: nasl.core.Boolean;
            triggerValid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => void;
        onBlurValid: (event: {
            trigger: nasl.core.String;
            valid: nasl.core.Boolean;
            triggerValid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => void;
        onBlurInvalid: (event: {
            trigger: nasl.core.String;
            valid: nasl.core.Boolean;
            triggerValid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => void;
        slotDefault: () => Array<ViewComponent>;
    }
}
