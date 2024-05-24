/// <reference types="@nasl/types" />
declare namespace nasl.ui {
    class EWatermark extends ViewComponent {
        constructor(options?: Partial<EWatermarkOptions>);
    }
    class EWatermarkOptions extends ViewComponentOptions {
        private image;
        text: nasl.core.String;
        opacity: nasl.core.Decimal;
    }
}
declare namespace nasl.ui {
    class IIco extends ViewComponent {
        constructor(options?: Partial<IIcoOptions>);
    }
    class IIcoOptions extends ViewComponentOptions {
        name: nasl.core.String;
        icotype: 'only' | 'top' | 'left';
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onRightclick: (event: {
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
        }) => any;
        onOver: (event: {
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
        }) => any;
        onOut: (event: {
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
        }) => any;
        onDown: (event: {
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UAbsoluteLayout extends ViewComponent {
        constructor(options?: Partial<UAbsoluteLayoutOptions>);
    }
    class UAbsoluteLayoutOptions extends ViewComponentOptions {
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UAlert extends ViewComponent {
        constructor(options?: Partial<UAlertOptions>);
    }
    class UAlertOptions extends ViewComponentOptions {
        private title;
        private desc;
        private horizontal;
        type: 'info' | 'success' | 'warning' | 'error';
        showIcon: nasl.core.Boolean;
        closeable: nasl.core.Boolean;
        bordered: nasl.core.Boolean;
        onClose: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UAnchor extends ViewComponent {
        constructor(options?: Partial<UAnchorOptions>);
    }
    class UAnchorOptions extends ViewComponentOptions {
        label: nasl.core.String;
    }
}
declare namespace nasl.ui {
    class UBadge extends ViewComponent {
        constructor(options?: Partial<UBadgeOptions>);
    }
    class UBadgeOptions extends ViewComponentOptions {
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
    class UButtonOptions extends ViewComponentOptions {
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBeforeNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;
        onNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;
    }
}
declare namespace nasl.ui {
    class UCalendarView<T> extends ViewComponent {
        reload(): void;
        constructor(options?: Partial<UCalendarViewOptions<T>>);
    }
    class UCalendarViewOptions<T> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        startKey: (item: T) => any;
        endKey: (item: T) => any;
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
        }) => any;
        onChange: (event: {
            date: nasl.core.Integer;
            timestamp: nasl.core.Integer;
            week: nasl.core.Integer;
        }) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
        onChangeYear: (event: nasl.core.String) => any;
        onChangeMonth: (event: nasl.core.String) => any;
        slotDefault: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCapsules extends ViewComponent {
        constructor(options?: Partial<UCapsulesOptions>);
    }
    class UCapsulesOptions extends ViewComponentOptions {
        value: nasl.core.Any;
        autoSelect: nasl.core.Boolean;
        cancelable: nasl.core.Boolean;
        multiple: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: nasl.core.String;
            oldItem: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
            items: nasl.collection.List<nasl.core.String>;
            oldItems: nasl.collection.List<nasl.core.String>;
        }) => any;
        onInput: (event: nasl.core.String) => any;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: nasl.core.String;
            oldItem: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
            items: nasl.collection.List<nasl.core.String>;
            oldItems: nasl.collection.List<nasl.core.String>;
        }) => any;
        onChange: (event: {
            item: nasl.core.String;
            oldItem: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
            items: nasl.collection.List<nasl.core.String>;
            oldItems: nasl.collection.List<nasl.core.String>;
            values: nasl.collection.List<nasl.core.String>;
        }) => any;
        slotDefault: () => Array<UCapsule>;
    }
    class UCapsule extends ViewComponent {
        constructor(options?: Partial<UCapsuleOptions>);
    }
    class UCapsuleOptions extends ViewComponentOptions {
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
        }) => any;
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: nasl.core.String;
            oldItem: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
            items: nasl.collection.List<nasl.core.String>;
            oldItems: nasl.collection.List<nasl.core.String>;
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
    class UCapsulesGroup extends ViewComponent {
        constructor(options?: Partial<UCapsulesGroupOptions>);
    }
    class UCapsulesGroupOptions extends ViewComponentOptions {
        slotDefault: () => Array<UCapsule>;
    }
}
declare namespace nasl.ui {
    class UCard extends ViewComponent {
        constructor(options?: Partial<UCardOptions>);
    }
    class UCardOptions extends ViewComponentOptions {
        private title;
        width: nasl.core.String;
        shadow: 'always' | 'hover' | 'never';
        border: nasl.core.Boolean;
        split: nasl.core.Boolean;
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
        slotCover: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCarousel<T> extends ViewComponent {
        reload(): void;
        constructor(options?: Partial<UCarouselOptions<T>>);
    }
    class UCarouselOptions<T> extends ViewComponentOptions {
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
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
        slotDefault: () => Array<UCarouselItem>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class UCarouselItem extends ViewComponent {
        constructor(options?: Partial<UCarouselItemOptions>);
    }
    class UCarouselItemOptions extends ViewComponentOptions {
        private title;
        private value;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCascader<T, V> extends ViewComponent {
        data: UCascaderOptions<T, V>['dataSource'];
        value: UCascaderOptions<T, V>['value'];
        filterText: nasl.core.String;
        open(): void;
        close(): void;
        clear(): void;
        reload(): void;
        constructor(options?: Partial<UCascaderOptions<T, V>>);
    }
    class UCascaderOptions<T, V> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        field: (item: T) => any;
        valueField: (item: T) => V;
        childrenField: (item: T) => nasl.collection.List<any>;
        parentField: (item: T) => any;
        value: V;
        useArrayLikeValue: nasl.core.Boolean;
        filterable: nasl.core.Boolean;
        filterHightlighterColor: nasl.core.String;
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
        onInput: (event: V) => any;
        onSelect: (event: {
            value: V;
            values: nasl.collection.List<V>;
            items: nasl.collection.List<T>;
        }) => any;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onClear: (event: any) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
    }
}
declare namespace nasl.ui {
    class UCheckboxes<T, V, C extends string> extends ViewComponent {
        data: UCheckboxesOptions<T, V, C>['dataSource'];
        value: UCheckboxesOptions<T, V, C>['value'];
        reload(): void;
        constructor(options?: Partial<UCheckboxesOptions<T, V, C>>);
    }
    class UCheckboxesOptions<T, V, C extends string> extends ViewComponentOptions {
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
        checkAllWidth: nasl.core.String;
        checkAllDisplay: 'inline' | 'block';
        min: nasl.core.Decimal;
        max: nasl.core.Decimal;
        converter: '' | 'join' | 'join:|' | 'join:;' | 'json';
        readonly: nasl.core.Boolean;
        preview: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onInput: (event: nasl.collection.List<V>) => any;
        onCheck: (event: {
            value: nasl.collection.List<V> | nasl.core.String;
            oldValue: nasl.collection.List<V> | nasl.core.String;
        }) => any;
        onChange: (event: {
            value: nasl.collection.List<V> | nasl.core.String;
            oldValue: nasl.collection.List<V> | nasl.core.String;
        }) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
        slotDefault: () => Array<UCheckbox<T, V>>;
        slotCheckAll: () => Array<UText>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class UCheckbox<T, V> extends ViewComponent {
        constructor(options?: Partial<UCheckboxOptions<T, V>>);
    }
    class UCheckboxOptions<T, V> extends ViewComponentOptions {
        private text;
        private value;
        label: V;
        autofocus: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onBeforeCheck: (event: {
            value: nasl.core.Boolean;
            oldValue: nasl.core.Boolean;
        }) => any;
        onInput: (event: V) => any;
        onCheck: (event: {
            value: V;
        }) => any;
        onChange: (event: {
            value: V;
            oldValue: V;
        }) => any;
        slotItem: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCircularProgress extends ViewComponent {
        constructor(options?: Partial<UCircularProgressOptions>);
    }
    class UCircularProgressOptions extends ViewComponentOptions {
        percent: nasl.core.Decimal;
        size: 'small' | 'normal' | 'large' | 'huge';
        slotDefault: () => Array<ViewComponent>;
        slotPercent: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCollapse extends ViewComponent {
        constructor(options?: Partial<UCollapseOptions>);
    }
    class UCollapseOptions extends ViewComponentOptions {
        appear: 'default' | 'simple';
        fill: 'head' | 'content' | 'none';
        accordion: nasl.core.Boolean;
        expandTrigger: 'click' | 'click-expander';
        disabled: nasl.core.Boolean;
        onExpand: (event: any) => any;
        onCollapse: (event: any) => any;
        slotDefault: () => Array<UCollapseItem>;
    }
    class UCollapseItem extends ViewComponent {
        constructor(options?: Partial<UCollapseItemOptions>);
    }
    class UCollapseItemOptions extends ViewComponentOptions {
        private title;
        expanded: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onExpand: (event: any) => any;
        onCollapse: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
        slotExtra: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UComboSlider extends ViewComponent {
        constructor(options?: Partial<UComboSliderOptions>);
    }
    class UComboSliderOptions extends ViewComponentOptions {
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
        onInput: (event: nasl.core.Decimal) => any;
        onSlide: (event: {
            value: nasl.core.Decimal;
            oldValue: nasl.core.Decimal;
            percent: nasl.core.Decimal;
            index: nasl.core.Decimal;
        }) => any;
        onChange: (event: {
            value: nasl.core.Decimal;
            oldValue: nasl.core.Decimal;
        }) => any;
        onNumberInput: (event: nasl.core.Decimal) => any;
        onSlideEnd: (event: nasl.core.Decimal) => any;
        slotTip: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UCopy extends ViewComponent {
        constructor(options?: Partial<UCopyOptions>);
    }
    class UCopyOptions extends ViewComponentOptions {
        private text;
        private successText;
        private feedback;
        private placement;
        private hideDelay;
        value: nasl.core.String;
        disabled: nasl.core.Boolean;
        onCopy: (event: {
            value: nasl.core.String;
        }) => any;
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
    class UCountDownOptions extends ViewComponentOptions {
        timer: nasl.core.Decimal;
        reverse: 'positive' | 'negative';
        autostart: nasl.core.Boolean;
        onStart: (event: any) => any;
        onPause: (event: any) => any;
        onContinue: (event: any) => any;
        onStop: (event: any) => any;
    }
}
declare namespace nasl.ui {
    class UCrumb extends ViewComponent {
        constructor(options?: Partial<UCrumbOptions>);
    }
    class UCrumbOptions extends ViewComponentOptions {
        auto: nasl.core.Boolean;
        separator: 'arrow' | 'slash';
        icon: nasl.core.Boolean;
        slotDefault: () => Array<UCrumbItem>;
    }
    class UCrumbItem extends ViewComponent {
        constructor(options?: Partial<UCrumbItemOptions>);
    }
    class UCrumbItemOptions extends ViewComponentOptions {
        private text;
        private replace;
        private append;
        icon: nasl.core.String;
        private type;
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBeforeNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;
        onNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UDatePicker extends ViewComponent {
        constructor(options?: Partial<UDatePickerOptions>);
    }
    class UDatePickerOptions extends ViewComponentOptions {
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
        advancedFormat: {
            enable: nasl.core.Boolean;
            value: nasl.core.String;
        };
        showFormatter: 'YYYY年M月D日' | 'YYYY-MM-DD' | 'M/D/YYYY' | 'D/M/YYYY' | 'GGGG-W周' | 'GGGG年第W周' | 'GGGG-WWWW' | 'YYYY年M月' | 'YYYY-MM' | 'M/YYYY' | 'YYYY年第Q季度' | 'YYYY年QQ' | 'YYYY-QQ' | 'YYYY年' | 'YYYY';
        autofocus: nasl.core.Boolean;
        placeholder: nasl.core.String;
        placeholderRight: nasl.core.String;
        alignment: 'left' | 'right';
        converter: 'json' | 'timestamp' | 'date' | 'format';
        preIcon: 'calendar' | '';
        suffixIcon: 'calendar' | '';
        appendTo: 'reference' | 'body';
        clearable: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        preview: nasl.core.Boolean;
        opened: nasl.core.Boolean;
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        onInput: (event: nasl.core.Date) => any;
        onChange: (event: {
            date: nasl.core.String;
            time: nasl.core.String;
        }) => any;
        onSelect: (event: {
            date: nasl.core.String;
            time: nasl.core.String;
        }) => any;
        onToggle: (event: {
            opened: nasl.core.Boolean;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
    }
}
declare namespace nasl.ui {
    class UDateTimePicker extends ViewComponent {
        constructor(options?: Partial<UDateTimePickerOptions>);
    }
    class UDateTimePickerOptions extends ViewComponentOptions {
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
        placeholderRight: nasl.core.String;
        autofocus: nasl.core.Boolean;
        showRightNowButton: nasl.core.Boolean;
        rightNowTitle: nasl.core.String;
        showFooterButton: nasl.core.Boolean;
        cancelTitle: nasl.core.String;
        okTitle: nasl.core.String;
        converter: 'json' | 'timestamp' | 'date' | 'format';
        preIcon: 'calendar' | '';
        suffixIcon: 'calendar' | '';
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
        }) => any;
        onChange: (event: {
            date: nasl.core.String;
            time: nasl.core.String;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
    }
}
declare namespace nasl.ui {
    class UDivider extends ViewComponent {
        constructor(options?: Partial<UDividerOptions>);
    }
    class UDividerOptions extends ViewComponentOptions {
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
    class UDrawerOptions extends ViewComponentOptions {
        placement: 'left' | 'right' | 'top' | 'bottom';
        showHead: nasl.core.Boolean;
        showFoot: nasl.core.Boolean;
        maskClosable: nasl.core.Boolean;
        visible: nasl.core.Boolean;
        size: 'small' | 'normal' | 'large';
        onOpen: (event: any) => any;
        onBeforeClose: (event: {
            ok: nasl.core.Boolean;
        }) => any;
        onClose: (event: {
            ok: nasl.core.Boolean;
        }) => any;
        slotTitle: () => Array<ViewComponent>;
        slotBody: () => Array<ViewComponent>;
        slotFoot: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UDropdown<T, V> extends ViewComponent {
        constructor(options?: Partial<UDropdownOptions<T, V>>);
    }
    class UDropdownOptions<T, V> extends ViewComponentOptions {
        hasDataSource: nasl.core.Boolean;
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        textField: (item: T) => any;
        valueField: (item: T) => V;
        iconField: (item: T) => any;
        toField: (item: T) => any;
        parentField: (item: T) => any;
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
    class UDropdownItemOptions extends ViewComponentOptions {
        private text;
        private to;
        icon: nasl.core.String;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        disabled: nasl.core.Boolean;
        onClick: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
    }
    class UDropdownGroup extends ViewComponent {
        constructor(options?: Partial<UDropdownGroupOptions>);
    }
    class UDropdownGroupOptions extends ViewComponentOptions {
        private title;
        collapsible: nasl.core.Boolean;
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'none';
        expanded: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        slotDefault: () => Array<UDropdownGroup | UDropdownItem>;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UForm extends ViewComponent {
        validate(trigger?: nasl.core.String, muted?: nasl.core.Boolean): any;
        validateItem(name: nasl.core.String, trigger?: nasl.core.String, muted?: nasl.core.Boolean): any;
        constructor(options?: Partial<UFormOptions>);
    }
    class UFormOptions extends ViewComponentOptions {
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
        }) => any;
        slotDefault: () => Array<UFormGroup | UFormItem>;
    }
    class UFormItem extends ViewComponent {
        validate(trigger?: nasl.core.String, muted?: nasl.core.Boolean): any;
        constructor(options?: Partial<UFormItemOptions>);
    }
    class UFormItemOptions extends ViewComponentOptions {
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
        slotLabel: () => Array<ViewComponent>;
        slotDescription: () => Array<ViewComponent>;
        slotExtra: () => Array<ViewComponent>;
    }
    class UFormGroup extends ViewComponent {
        constructor(options?: Partial<UFormGroupOptions>);
    }
    class UFormGroupOptions extends ViewComponentOptions {
        title: nasl.core.String;
        repeat: nasl.core.Decimal;
        labelLayout: 'inline' | 'block';
        labelEllipsis: nasl.core.Boolean;
        collapsible: nasl.core.Boolean;
        expanded: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onBeforeToggle: (event: {
            expanded: nasl.core.Boolean;
        }) => any;
        onToggle: (event: {
            expanded: nasl.core.Boolean;
        }) => any;
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
    class UGalleryOptions<T> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        pattern: 'small' | 'big';
        num: nasl.core.Decimal;
        arrow: nasl.core.Boolean;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
    }
}
declare namespace nasl.ui {
    class UGridLayout extends ViewComponent {
        constructor(options?: Partial<UGridLayoutOptions>);
    }
    class UGridLayoutOptions extends ViewComponentOptions {
        gap: 'compact' | 'none' | 'small' | 'normal' | 'large';
        onScroll: (event: {
            scrollTop: nasl.core.Integer;
            scrollLeft: nasl.core.Integer;
            scrollWidth: nasl.core.Integer;
            scrollHeight: nasl.core.Integer;
            clientWidth: nasl.core.Integer;
            clientHeight: nasl.core.Integer;
        }) => any;
        slotDefault: () => Array<UGridLayoutRow>;
    }
    class UGridLayoutRow extends ViewComponent {
        constructor(options?: Partial<UGridLayoutRowOptions>);
    }
    class UGridLayoutRowOptions extends ViewComponentOptions {
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
        repeat: nasl.core.Decimal;
        gap: 'none' | 'mini' | 'small' | 'normal' | 'large' | 'huge';
        slotDefault: () => Array<UGridLayoutColumn>;
    }
    class UGridLayoutColumn extends ViewComponent {
        constructor(options?: Partial<UGridLayoutColumnOptions>);
    }
    class UGridLayoutColumnOptions extends ViewComponentOptions {
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
        onResponsive: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UGridView<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, C extends string> extends ViewComponent {
        data: UGridViewOptions<T, V, P, M, C>['dataSource'];
        size: UGridViewOptions<T, V, P, M, C>['pageSize'];
        page: UGridViewOptions<T, V, P, M, C>['pageNumber'];
        sort: nasl.core.String;
        order: nasl.core.String;
        reload(): void;
        constructor(options?: Partial<UGridViewOptions<T, V, P, M, C>>);
    }
    class UGridViewOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, C extends string> extends ViewComponentOptions {
        private value;
        private field;
        private cancelable;
        private multiple;
        private clearable;
        dataSource: {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        } | nasl.collection.List<T>;
        dataSchema: T;
        textField: (item: T) => any;
        valueField: (item: T) => V;
        pageable: nasl.core.Boolean;
        pageSize: nasl.core.Integer;
        pageNumber: nasl.core.Integer;
        pageSizeOptions: Array<nasl.core.Integer>;
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
        }) => any;
        onInput: (event: V) => any;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => any;
        onChange: (event: {
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
            values: nasl.collection.List<V>;
        }) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UIframe extends ViewComponent {
        constructor(options?: Partial<UIframeOptions>);
    }
    class UIframeOptions extends ViewComponentOptions {
        src: nasl.core.String;
        onLoad: (event: any) => any;
    }
}
declare namespace nasl.ui {
    class UImage extends ViewComponent {
        constructor(options?: Partial<UImageOptions>);
    }
    class UImageOptions extends ViewComponentOptions {
        private convertSrcFn;
        src: nasl.core.String;
        fit: 'contain' | 'scale-down' | 'none' | 'fill' | 'cover';
        circle: nasl.core.Boolean;
        horizontalCenter: 'left' | 'center' | 'right';
        verticalCenter: 'top' | 'center' | 'bottom';
        preview: nasl.core.Boolean;
        loadingType: 'loading' | 'none' | 'placeholder';
        placeholderSrc: nasl.core.String;
        onLoad: (event: any) => any;
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
    }
}
declare namespace nasl.ui {
    class UInfoList extends ViewComponent {
        constructor(options?: Partial<UInfoListOptions>);
    }
    class UInfoListOptions extends ViewComponentOptions {
        repeat: nasl.core.Decimal;
        showHead: nasl.core.Boolean;
        labelSize: 'auto' | 'small' | 'normal' | 'large';
        slotDefault: () => Array<UInfoListGroup | UInfoListItem>;
    }
    class UInfoListItem extends ViewComponent {
        constructor(options?: Partial<UInfoListItemOptions>);
    }
    class UInfoListItemOptions extends ViewComponentOptions {
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
    class UInfoListGroupOptions extends ViewComponentOptions {
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
    class UInputOptions extends ViewComponentOptions {
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
        onBeforeInput: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
        onInput: (event: nasl.core.String) => any;
        onChange: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBeforeClear: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
        onClear: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
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
        }) => any;
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
        }) => any;
        onKeydown: (event: {
            altKey: nasl.core.Boolean;
            code: nasl.core.String;
            ctrlKey: nasl.core.Boolean;
            isComposing: nasl.core.Boolean;
            key: nasl.core.String;
            metaKey: nasl.core.Boolean;
            repeat: nasl.core.Boolean;
            shiftKey: nasl.core.Boolean;
        }) => any;
        onKeyup: (event: {
            altKey: nasl.core.Boolean;
            code: nasl.core.String;
            ctrlKey: nasl.core.Boolean;
            isComposing: nasl.core.Boolean;
            key: nasl.core.String;
            metaKey: nasl.core.Boolean;
            repeat: nasl.core.Boolean;
            shiftKey: nasl.core.Boolean;
        }) => any;
        slotPrefix: () => Array<ViewComponent>;
        slotSuffix: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class ULabel extends ViewComponent {
        constructor(options?: Partial<ULabelOptions>);
    }
    class ULabelOptions extends ViewComponentOptions {
        text: nasl.core.String;
        type: 'filled' | 'line';
        color: 'default' | 'primary' | 'success' | 'warning' | 'error';
        display: 'inline' | 'block';
        removable: nasl.core.Boolean;
        size: 'small' | 'normal' | 'large' | 'huge';
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        onBeforeRemove: (event: any) => any;
        onRemove: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class ULinearLayout extends ViewComponent {
        openLoading(): void;
        closeLoading(): void;
        constructor(options?: Partial<ULinearLayoutOptions>);
    }
    class ULinearLayoutOptions extends ViewComponentOptions {
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        onScroll: (event: {
            scrollTop: nasl.core.Integer;
            scrollLeft: nasl.core.Integer;
            scrollWidth: nasl.core.Integer;
            scrollHeight: nasl.core.Integer;
            clientWidth: nasl.core.Integer;
            clientHeight: nasl.core.Integer;
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class ULinearProgress extends ViewComponent {
        constructor(options?: Partial<ULinearProgressOptions>);
    }
    class ULinearProgressOptions extends ViewComponentOptions {
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
    class ULinkOptions extends ViewComponentOptions {
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBeforeNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;
        onNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;
    }
}
declare namespace nasl.ui {
    class UListComponents<T> extends ViewComponent {
        data: UListComponentsOptions<T>['dataSource'];
        constructor(options?: Partial<UListComponentsOptions<T>>);
    }
    class UListComponentsOptions<T> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        colnum: nasl.core.Decimal;
        equalWidth: nasl.core.Boolean;
        slotDefault: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UListView<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, C extends string> extends ViewComponent {
        data: UListViewOptions<T, V, P, M, C>['dataSource'];
        size: UListViewOptions<T, V, P, M, C>['pageSize'];
        page: UListViewOptions<T, V, P, M, C>['pageNumber'];
        sort: nasl.core.String;
        order: nasl.core.String;
        filterText: nasl.core.String;
        reload(): void;
        constructor(options?: Partial<UListViewOptions<T, V, P, M, C>>);
    }
    class UListViewOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, C extends string> extends ViewComponentOptions {
        dataSource: {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        } | nasl.collection.List<T>;
        dataSchema: T;
        pageable: nasl.core.Boolean;
        pageSize: nasl.core.Integer;
        pageNumber: nasl.core.Integer;
        pageSizeOptions: Array<nasl.core.Integer>;
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
        textField: (item: T) => any;
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
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => any;
        onInput: (event: V) => any;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => any;
        onChange: (event: {
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
            values: nasl.collection.List<V>;
        }) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UModal extends ViewComponent {
        open(): void;
        close(): void;
        constructor(options?: Partial<UModalOptions>);
    }
    class UModalOptions extends ViewComponentOptions {
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
        onBeforeOpen: (event: any) => any;
        onOpen: (event: any) => any;
        onBeforeClose: (event: any) => any;
        onClose: (event: {
            ok: nasl.core.Boolean;
        }) => any;
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
    class UMultiLayoutOptions extends ViewComponentOptions {
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
        }) => any;
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        slotDefault: () => Array<UMultiLayoutItem>;
    }
    class UMultiLayoutItem extends ViewComponent {
        constructor(options?: Partial<UMultiLayoutItemOptions>);
    }
    class UMultiLayoutItemOptions extends ViewComponentOptions {
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UNavbarMulti<T, V> extends ViewComponent {
        constructor(options?: Partial<UNavbarMultiOptions<T, V>>);
    }
    class UNavbarMultiOptions<T, V> extends ViewComponentOptions {
        hasDataSource: nasl.core.Boolean;
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        textField: (item: T) => any;
        valueField: (item: T) => V;
        iconField: (item: T) => any;
        toField: (item: T) => any;
        parentField: (item: T) => any;
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
        }) => any;
        slotDefault: () => Array<UNavbarGroupMulti | UNavbarItemMulti | UNavbarDividerMulti>;
        slotLeft: () => Array<ViewComponent>;
        slotRight: () => Array<ViewComponent>;
    }
    class UNavbarItemMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarItemMultiOptions>);
    }
    class UNavbarItemMultiOptions extends ViewComponentOptions {
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
    class UNavbarDividerMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarDividerMultiOptions>);
    }
    class UNavbarDividerMultiOptions extends ViewComponentOptions {
    }
    class UNavbarDropdownMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarDropdownMultiOptions>);
    }
    class UNavbarDropdownMultiOptions extends ViewComponentOptions {
        placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'manual';
        disabled: nasl.core.Boolean;
    }
    class UNavbarMenuMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuMultiOptions>);
    }
    class UNavbarMenuMultiOptions extends ViewComponentOptions {
    }
    class UNavbarMenuGroupMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuGroupMultiOptions>);
    }
    class UNavbarMenuGroupMultiOptions extends ViewComponentOptions {
    }
    class UNavbarMenuItemMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuItemMultiOptions>);
    }
    class UNavbarMenuItemMultiOptions extends ViewComponentOptions {
    }
    class UNavbarMenuDividerMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuDividerMultiOptions>);
    }
    class UNavbarMenuDividerMultiOptions extends ViewComponentOptions {
    }
    class UNavbarSelectMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectMultiOptions>);
    }
    class UNavbarSelectMultiOptions extends ViewComponentOptions {
    }
    class UNavbarSelectGroupMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectGroupMultiOptions>);
    }
    class UNavbarSelectGroupMultiOptions extends ViewComponentOptions {
    }
    class UNavbarSelectItemMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectItemMultiOptions>);
    }
    class UNavbarSelectItemMultiOptions extends ViewComponentOptions {
    }
    class UNavbarSelectDividerMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectDividerMultiOptions>);
    }
    class UNavbarSelectDividerMultiOptions extends ViewComponentOptions {
    }
    class UNavbarGroupMulti extends ViewComponent {
        constructor(options?: Partial<UNavbarGroupMultiOptions>);
    }
    class UNavbarGroupMultiOptions extends ViewComponentOptions {
        private title;
        collapsible: nasl.core.Boolean;
        trigger: 'click' | 'hover' | 'right-click' | 'double-click';
        expanded: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        slotDefault: () => Array<UNavbarGroupMulti | UNavbarItemMulti>;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UNavbar extends ViewComponent {
        constructor(options?: Partial<UNavbarOptions>);
    }
    class UNavbarOptions extends ViewComponentOptions {
        router: nasl.core.Boolean;
        value: nasl.core.String;
        private field;
        readonly: nasl.core.Boolean;
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
        }) => any;
        onBeforeSelect: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
            selectedItem: nasl.core.Any;
            item: nasl.core.Any;
            oldItem: nasl.core.Any;
        }) => any;
        onInput: (event: nasl.core.String) => any;
        onSelect: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
            selectedItem: nasl.core.Any;
            item: nasl.core.Any;
            oldItem: nasl.core.Any;
        }) => any;
        onChange: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
            selectedItem: nasl.core.Any;
            item: nasl.core.Any;
            oldItem: nasl.core.Any;
        }) => any;
        slotDefault: () => Array<UNavbarItem | UNavbarDivider>;
        slotLeft: () => Array<ViewComponent>;
        slotRight: () => Array<ViewComponent>;
    }
    class UNavbarItem extends ViewComponent {
        constructor(options?: Partial<UNavbarItemOptions>);
    }
    class UNavbarItemOptions extends ViewComponentOptions {
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
        onBeforeSelect: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
            selectedItem: nasl.core.Any;
            item: nasl.core.Any;
            oldItem: nasl.core.Any;
        }) => any;
        onBeforeNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;
        onNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
    class UNavbarDivider extends ViewComponent {
        constructor(options?: Partial<UNavbarDividerOptions>);
    }
    class UNavbarDividerOptions extends ViewComponentOptions {
    }
    class UNavbarDropdown extends ViewComponent {
        constructor(options?: Partial<UNavbarDropdownOptions>);
    }
    class UNavbarDropdownOptions extends ViewComponentOptions {
        trigger: 'click' | 'hover' | 'right-click' | 'double-click' | 'manual';
        placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
        disabled: nasl.core.Boolean;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
    }
    class UNavbarMenu extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuOptions>);
    }
    class UNavbarMenuOptions extends ViewComponentOptions {
        slotDefault: () => Array<ViewComponent>;
    }
    class UNavbarMenuGroup extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuGroupOptions>);
    }
    class UNavbarMenuGroupOptions extends ViewComponentOptions {
    }
    class UNavbarMenuItem extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuItemOptions>);
    }
    class UNavbarMenuItemOptions extends ViewComponentOptions {
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
    class UNavbarMenuDivider extends ViewComponent {
        constructor(options?: Partial<UNavbarMenuDividerOptions>);
    }
    class UNavbarMenuDividerOptions extends ViewComponentOptions {
    }
    class UNavbarSelect extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectOptions>);
    }
    class UNavbarSelectOptions extends ViewComponentOptions {
    }
    class UNavbarSelectGroup extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectGroupOptions>);
    }
    class UNavbarSelectGroupOptions extends ViewComponentOptions {
    }
    class UNavbarSelectItem extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectItemOptions>);
    }
    class UNavbarSelectItemOptions extends ViewComponentOptions {
    }
    class UNavbarSelectDivider extends ViewComponent {
        constructor(options?: Partial<UNavbarSelectDividerOptions>);
    }
    class UNavbarSelectDividerOptions extends ViewComponentOptions {
    }
}
declare namespace nasl.ui {
    class UNumberInput extends ViewComponent {
        constructor(options?: Partial<UNumberInputOptions>);
    }
    class UNumberInputOptions extends ViewComponentOptions {
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
        onInput: (event: nasl.core.String) => any;
        onValidate: (event: {
            trigger: nasl.core.String;
            valid: nasl.core.Boolean;
            triggerValid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
        onChange: (event: {
            value: nasl.core.Decimal;
            oldValue: nasl.core.Decimal;
            formattedValue: nasl.core.String;
            valid: nasl.core.Boolean;
        }) => any;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onKeydown: (event: {
            altKey: nasl.core.Boolean;
            code: nasl.core.String;
            ctrlKey: nasl.core.Boolean;
            isComposing: nasl.core.Boolean;
            key: nasl.core.String;
            metaKey: nasl.core.Boolean;
            repeat: nasl.core.Boolean;
            shiftKey: nasl.core.Boolean;
        }) => any;
        onKeyup: (event: {
            altKey: nasl.core.Boolean;
            code: nasl.core.String;
            ctrlKey: nasl.core.Boolean;
            isComposing: nasl.core.Boolean;
            key: nasl.core.String;
            metaKey: nasl.core.Boolean;
            repeat: nasl.core.Boolean;
            shiftKey: nasl.core.Boolean;
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UPagination extends ViewComponent {
        constructor(options?: Partial<UPaginationOptions>);
    }
    class UPaginationOptions extends ViewComponentOptions {
        page: nasl.core.Integer;
        total: nasl.core.Integer;
        side: nasl.core.Integer;
        around: nasl.core.Integer;
        totalItems: nasl.core.Integer;
        pageSize: nasl.core.Integer;
        pageSizeOptions: Array<nasl.core.Integer>;
        showTotal: nasl.core.Boolean;
        showSizer: nasl.core.Boolean;
        showJumper: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onBeforeSelect: (event: {
            page: nasl.core.Integer;
            oldPage: nasl.core.Integer;
        }) => any;
        onSelect: (event: {
            page: nasl.core.Integer;
            oldPage: nasl.core.Integer;
        }) => any;
        onChange: (event: {
            page: nasl.core.Integer;
            oldPage: nasl.core.Integer;
        }) => any;
        onChangePageSize: (event: {
            page: nasl.core.Integer;
            oldPage: nasl.core.Integer;
            pageSizeOptions: Array<nasl.core.Integer>;
        }) => any;
        slotTotal: () => Array<ViewComponent>;
        slotPrev: () => Array<ViewComponent>;
        slotNext: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    export class UPanel extends ViewComponent {
        constructor(options?: Partial<UPanelOptions>);
    }
    export class UPanelOptions extends ViewComponentOptions {
        private content;
        private title;
        bordered: nasl.core.Boolean;
        shadow: 'always' | 'hover' | 'never';
        slotDefault: () => Array<UPanelGroup | ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
        slotExtra: () => Array<ViewComponent>;
    }
    class UPanelGroup extends ViewComponent {
        constructor(options?: Partial<UPanelGroupOptions>);
    }
    class UPanelGroupOptions extends ViewComponentOptions {
        title: nasl.core.String;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
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
    class UPopupCombinationOptions extends ViewComponentOptions {
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
        onBeforeOpen: (event: any) => any;
        onOpen: (event: any) => any;
        onBeforeClose: (event: any) => any;
        onClose: (event: any) => any;
        onBeforeToggle: (event: {
            opened: nasl.core.Boolean;
        }) => any;
        onToggle: (event: {
            opened: nasl.core.Boolean;
        }) => any;
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
    class URadiosOptions<T, V> extends ViewComponentOptions {
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
        onBeforeSelect: (event: {
            value: V;
            oldValue: V;
        }) => any;
        onInput: (event: nasl.core.String) => any;
        onSelect: (event: {
            value: V;
            oldValue: V;
        }) => any;
        onChange: (event: {
            value: V;
            oldValue: V;
        }) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
        slotDefault: () => Array<URadio<V>>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class URadio<V> extends ViewComponent {
        constructor(options?: Partial<URadioOptions<V>>);
    }
    class URadioOptions<V> extends ViewComponentOptions {
        private text;
        label: V;
        autofocus: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onBeforeSelect: (event: {
            value: V;
            oldValue: V;
        }) => any;
        slotItem: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class URate extends ViewComponent {
        constructor(options?: Partial<URateOptions>);
    }
    class URateOptions extends ViewComponentOptions {
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
        }) => any;
    }
}
declare namespace nasl.ui {
    class URegionSelect<T, V> extends ViewComponent {
        open(): void;
        close(): void;
        clear(): void;
        constructor(options?: Partial<URegionSelectOptions<T, V>>);
    }
    class URegionSelectOptions<T, V> extends ViewComponentOptions {
        private join;
        converter: 'name' | 'code';
        data: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        value: nasl.core.Any;
        field: (item: T) => any;
        filterable: nasl.core.Boolean;
        placeholder: nasl.core.String;
        showFinalValue: nasl.core.Boolean;
        autofocus: nasl.core.Boolean;
        trigger: 'click' | 'hover';
        clearable: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        opened: nasl.core.Boolean;
        onInput: (event: nasl.core.String) => any;
        onSelect: (event: {
            value: V;
            values: nasl.collection.List<V>;
            items: nasl.collection.List<T>;
        }) => any;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onClear: (event: any) => any;
    }
}
declare namespace nasl.ui {
    class URouterView extends ViewComponent {
        constructor(options?: Partial<URouterViewOptions>);
    }
    class URouterViewOptions extends ViewComponentOptions {
        disableKeepAlive: nasl.core.Boolean;
    }
}
declare namespace nasl.ui {
    class USelect<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, C extends string> extends ViewComponent {
        data: USelectOptions<T, V, P, M, C>['dataSource'];
        value: USelectOptions<T, V, P, M, C>['value'];
        size: USelectOptions<T, V, P, M, C>['pageSize'];
        page: USelectOptions<T, V, P, M, C>['pageNumber'];
        opened: USelectOptions<T, V, P, M, C>['opened'];
        filterText: nasl.core.String;
        open(): void;
        close(): void;
        toggle(opened?: nasl.core.Boolean): void;
        reload(): void;
        addItem(item: T, inFirst?: nasl.core.Boolean): void;
        constructor(options?: Partial<USelectOptions<T, V, P, M, C>>);
    }
    class USelectOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, C extends string> extends ViewComponentOptions {
        dataSource: {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        } | nasl.collection.List<T>;
        dataSchema: T;
        value: M extends true ? (C extends '' ? nasl.collection.List<V> : nasl.core.String) : V;
        textField: (item: T) => any;
        valueField: (item: T) => V;
        private pageable;
        private remotePaging;
        pagination: nasl.core.Boolean;
        pageSize: nasl.core.Integer;
        private pageNumber;
        sorting: {
            field: nasl.core.String;
            order: 'asc' | 'desc';
        };
        description: nasl.core.Boolean;
        descriptionField: (item: T) => any;
        iconField: (item: T) => any;
        autoCheckSelectedValue: nasl.core.Boolean;
        selectedValuesData: nasl.collection.List<{
            text: nasl.core.String;
            value: V;
        }>;
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
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => any;
        onInput: (event: V) => any;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => any;
        onChange: (event: {
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            values: nasl.collection.List<V>;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => any;
        onBeforeOpen: (event: any) => any;
        onOpen: (event: any) => any;
        onBeforeClose: (event: any) => any;
        onClose: (event: any) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
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
        }) => any;
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
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBeforeFilter: (event: {
            filterText: nasl.core.String;
        }) => any;
        slotDefault: () => Array<USelectItem<T, V> | USelectGroup<T, V> | USelectDivider>;
        slotRenderFooter: () => Array<ViewComponent>;
    }
    class USelectItem<T, V> extends ViewComponent {
        constructor(options?: Partial<USelectItemOptions<T, V>>);
    }
    class USelectItemOptions<T, V> extends ViewComponentOptions {
        text: nasl.core.String;
        value: V;
        description: nasl.core.String;
        item: T;
        disabled: nasl.core.Boolean;
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => any;
        slotDefault: (current: Current<T>) => Array<ViewComponent>;
    }
    class USelectGroup<T, V> extends ViewComponent {
        constructor(options?: Partial<USelectGroupOptions<T, V>>);
    }
    class USelectGroupOptions<T, V> extends ViewComponentOptions {
        title: nasl.core.String;
        slotDefault: () => Array<USelectItem<T, V>>;
        slotTitle: () => Array<ViewComponent>;
        slotExtra: () => Array<ViewComponent>;
    }
    class USelectDivider extends ViewComponent {
        constructor(options?: Partial<USelectDividerOptions>);
    }
    class USelectDividerOptions extends ViewComponentOptions {
    }
}
declare namespace nasl.ui {
    class USelectableSteps<T> extends ViewComponent {
        reload(): void;
        constructor(options?: Partial<USelectableStepsOptions<T>>);
    }
    class USelectableStepsOptions<T> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T>;
        dataSchema: T;
        private titleField;
        private descField;
        value: nasl.core.Decimal;
        direction: 'horizontal' | 'vertical';
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        size: 'auto' | 'normal';
        onBeforeSelect: (event: {
            value: nasl.core.Integer;
            oldValue: nasl.core.Integer;
            item: T;
        }) => any;
        onSelect: (event: {
            value: nasl.core.Integer;
            oldValue: nasl.core.Integer;
            item: T;
        }) => any;
        onChange: (event: {
            value: nasl.core.Integer;
            oldValue: nasl.core.Integer;
            item: T;
            oldItem: T;
        }) => any;
        slotDefault: () => Array<USelectableStep>;
        slotTitle: (current: Current<T>) => Array<ViewComponent>;
        slotDesc: (current: Current<T>) => Array<ViewComponent>;
    }
    class USelectableStep extends ViewComponent {
        constructor(options?: Partial<USelectableStepOptions>);
    }
    class USelectableStepOptions extends ViewComponentOptions {
        private title;
        private desc;
        status: 'pending' | 'selected' | 'passed' | 'failed';
        icon: nasl.core.String;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
        slotDesc: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class USidebar<T, V> extends ViewComponent {
        toggleAll(expanded: nasl.core.Boolean): void;
        constructor(options?: Partial<USidebarOptions<T, V>>);
    }
    class USidebarOptions<T, V> extends ViewComponentOptions {
        hasDataSource: nasl.core.Boolean;
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        textField: (item: T) => any;
        valueField: (item: T) => any;
        iconField: (item: T) => any;
        toField: (item: T) => any;
        parentField: (item: T) => V;
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
        }) => any;
        slotDefault: () => Array<USidebarGroup | USidebarItem | USidebarDivider>;
    }
    class USidebarItem extends ViewComponent {
        constructor(options?: Partial<USidebarItemOptions>);
    }
    class USidebarItemOptions extends ViewComponentOptions {
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onNavigate: (event: {
            to: nasl.core.String;
            replace: nasl.core.Boolean;
            append: nasl.core.Boolean;
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
    class USidebarGroup extends ViewComponent {
        constructor(options?: Partial<USidebarGroupOptions>);
    }
    class USidebarGroupOptions extends ViewComponentOptions {
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
    class USidebarDividerOptions extends ViewComponentOptions {
    }
}
declare namespace nasl.ui {
    class USwitch extends ViewComponent {
        constructor(options?: Partial<USwitchOptions>);
    }
    class USwitchOptions extends ViewComponentOptions {
        value: nasl.core.Boolean;
        withText: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onBeforeToggle: (event: {
            value: nasl.core.Boolean;
            oldValue: nasl.core.Boolean;
        }) => any;
        onInput: (event: nasl.core.Boolean) => any;
        onOn: (event: any) => any;
        onOff: (event: any) => any;
        onToggle: (event: {
            value: nasl.core.Boolean;
            oldValue: nasl.core.Boolean;
        }) => any;
        onChange: (event: {
            value: nasl.core.Boolean;
            oldValue: nasl.core.Boolean;
        }) => any;
    }
}
declare namespace nasl.ui {
    class UTableView<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponent {
        data: UTableViewOptions<T, V, P, M>['dataSource'];
        size: UTableViewOptions<T, V, P, M>['pageSize'];
        page: UTableViewOptions<T, V, P, M>['pageNumber'];
        sort: UTableViewOptions<T, V, P, M>['sorting']['field'];
        order: UTableViewOptions<T, V, P, M>['sorting']['order'];
        value: UTableViewOptions<T, V, P, M>['value'];
        values: UTableViewOptions<T, V, P, M>['values'];
        reload(): void;
        loadTo(page?: nasl.core.Integer): void;
        getFields(): any;
        exportExcel(page?: nasl.core.Integer, size?: nasl.core.Integer, filename?: nasl.core.String, sort?: nasl.core.String, order?: 'asc' | 'desc', excludeColumns?: nasl.collection.List<nasl.core.String>, includeStyles?: nasl.core.Boolean): void;
        resetEdit(item?: object): void;
        constructor(options?: Partial<UTableViewOptions<T, V, P, M>>);
    }
    class UTableViewOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponentOptions {
        dataSource: {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        } | nasl.collection.List<T>;
        dataSchema: T;
        private extraParams;
        private pageable;
        private remotePaging;
        pagination: nasl.core.Boolean;
        pageSize: nasl.core.Integer;
        showSizer: nasl.core.Boolean;
        pageSizeOptions: Array<nasl.core.Integer>;
        pageNumber: nasl.core.Integer;
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
        parentField: (item: T) => any;
        childrenField: (item: T) => nasl.collection.List<any>;
        hasChildrenField: (item: T) => nasl.core.Boolean;
        treeCheckType: 'up+down' | 'down' | 'up' | 'none';
        title: nasl.core.String;
        showHead: nasl.core.Boolean;
        stickHead: nasl.core.Boolean;
        stickHeadOffset: nasl.core.Decimal;
        thEllipsis: nasl.core.Boolean;
        ellipsis: nasl.core.Boolean;
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
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
        onBeforePage: (event: {
            size: nasl.core.Integer;
            oldSize: nasl.core.Integer;
            number: nasl.core.Integer;
            oldNumber: nasl.core.Integer;
        }) => any;
        onPage: (event: {
            size: nasl.core.Integer;
            oldSize: nasl.core.Integer;
            number: nasl.core.Integer;
            oldNumber: nasl.core.Integer;
        }) => any;
        onBeforeSort: (event: {
            field: nasl.core.String;
            order: nasl.core.String;
            compare?: Function;
        }) => any;
        onSort: (event: {
            field: nasl.core.String;
            order: nasl.core.String;
            compare?: Function;
        }) => any;
        onBeforeFilter: (event: any) => any;
        onFilter: (event: any) => any;
        onClickRow: (event: {
            item: T;
            index: nasl.core.Integer;
            rowIndex: nasl.core.Integer;
        }) => any;
        onDblclickRow: (event: {
            item: T;
            index: nasl.core.Integer;
            rowIndex: nasl.core.Integer;
        }) => any;
        onBeforeSelect: (event: {
            value: V;
            oldValue: V;
            item: T;
            oldItem: T;
        }) => any;
        onInput: (event: V) => any;
        onSelect: (event: {
            selectedItem: T;
            value: V;
            oldValue: V;
            item: T;
            oldItem: T;
            index: nasl.core.Integer;
        }) => any;
        onCheck: (event: {
            checked: nasl.core.Boolean;
            oldChecked: nasl.core.Boolean;
            values: nasl.collection.List<V>;
            oldValues: nasl.collection.List<V>;
            item: T;
        }) => any;
        onChange: (event: {
            value: V;
            oldValue: V;
            item: T;
            oldItem: T;
            values: nasl.collection.List<V>;
            oldValues: nasl.collection.List<V>;
            items: nasl.collection.List<T>;
        }) => any;
        onResize: (event: any) => any;
        onBeforeToggleExpanded: (event: {
            item: T;
            expanded: nasl.core.Boolean;
            oldExpanded: nasl.core.Boolean;
        }) => any;
        onToggleExpanded: (event: {
            item: T;
            expanded: nasl.core.Boolean;
        }) => any;
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
        }) => any;
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
        }) => any;
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
        }) => any;
        slotDefault: () => Array<UTableViewColumn<T, V, P, M> | UTableViewColumnDynamic<T, V, P, M, unknown> | UTableViewColumnGroup<T, V, P, M>>;
        slotLoading: () => Array<ViewComponent>;
        slotError: () => Array<ViewComponent>;
        slotEmpty: () => Array<ViewComponent>;
        slotDragGhost: (current: Current<T>) => Array<ViewComponent>;
        slotConfigColumns: () => Array<ViewComponent>;
    }
    class UTableViewColumn<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponent {
        constructor(options?: Partial<UTableViewColumnOptions<T, V, P, M>>);
    }
    class UTableViewColumnOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponentOptions {
        private formatter;
        private filters;
        field: (item: T) => any;
        sortable: nasl.core.Boolean;
        defaultOrder: 'asc' | 'desc';
        type: 'normal' | 'index' | 'radio' | 'checkbox' | 'expander' | 'tree' | 'editable' | 'dragHandler';
        autoIndex: nasl.core.Boolean;
        startIndex: nasl.core.Decimal;
        private dblclickHandler;
        private title;
        fixed: nasl.core.Boolean;
        thEllipsis: nasl.core.Boolean;
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
    class UTableViewColumnConfigOptions<T, V> extends ViewComponentOptions {
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
        }) => any;
        slotTitle: () => Array<ViewComponent>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class UTableViewColumnDynamic<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, T1> extends ViewComponent {
        data: UTableViewColumnDynamicOptions<T, V, P, M, unknown>['dataSource'];
        constructor(options?: Partial<UTableViewColumnDynamicOptions<T, V, P, M, T1>>);
    }
    class UTableViewColumnDynamicOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean, T1> extends ViewComponentOptions {
        dataSource: {
            list: nasl.collection.List<T1>;
            total: nasl.core.Integer;
        } | nasl.collection.List<T1>;
        dataSchema: T1;
        valueField: (item: T) => V;
        sortable: nasl.core.Boolean;
        defaultOrder: 'asc' | 'desc';
        fixed: nasl.core.Boolean;
        thEllipsis: nasl.core.Boolean;
        ellipsis: nasl.core.Boolean;
        hidden: nasl.core.Boolean;
        width: nasl.core.String | nasl.core.Decimal;
        slotTitle: (current: {
            columnIndex: nasl.core.Integer;
            columnItem: T1;
        }) => Array<ViewComponent>;
        slotCell: (current: CurrentDynamic<T, T1>) => Array<ViewComponent>;
    }
    class UTableViewColumnGroup<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponent {
        constructor(options?: Partial<UTableViewColumnGroupOptions<T, V, P, M>>);
    }
    class UTableViewColumnGroupOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponentOptions {
        private title;
        slotDefault: SlotType<() => Array<UTableViewColumn<T, V, P, M>>>;
        slotTitle: () => Array<ViewComponent>;
    }
    class UTableViewExpander extends ViewComponent {
        constructor(options?: Partial<UTableViewExpanderOptions>);
    }
    class UTableViewExpanderOptions extends ViewComponentOptions {
        expandIcon: nasl.core.String;
        collapseIcon: nasl.core.String;
    }
}
declare namespace nasl.ui {
    class UTabs<T, V> extends ViewComponent {
        reload(): void;
        constructor(options?: Partial<UTabsOptions<T, V>>);
    }
    class UTabsOptions<T, V> extends ViewComponentOptions {
        private showScrollButtons;
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        titleField: (item: T) => any;
        valueField: (item: T) => V;
        urlField: (item: T) => any;
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
        }) => any;
        onBeforeSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => any;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            oldItem: T;
            value: V;
            oldValue: V;
            items: nasl.collection.List<T>;
            oldItems: nasl.collection.List<T>;
        }) => any;
        onBeforeClose: (event: {
            value: V;
            oldValue: V;
        }) => any;
        onClose: (event: {
            value: V;
            oldValue: V;
        }) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
        slotDefault: () => Array<UTab<V>>;
        slotExtra: () => Array<ViewComponent>;
        slotTitle: (current: Current<T>) => Array<ViewComponent>;
        slotContent: (current: Current<T>) => Array<ViewComponent>;
    }
    class UTab<V> extends ViewComponent {
        constructor(options?: Partial<UTabOptions<V>>);
    }
    class UTabOptions<V> extends ViewComponentOptions {
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
    class UTaskboxOptions extends ViewComponentOptions {
        icon: nasl.core.String;
        size: nasl.core.Decimal;
        interval: nasl.core.Decimal;
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
    }
}
declare namespace nasl.ui {
    class UText extends ViewComponent {
        constructor(options?: Partial<UTextOptions>);
    }
    class UTextOptions extends ViewComponentOptions {
        text: nasl.core.String;
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'disabled';
        display: 'inline' | 'block';
        overflow: 'normal' | 'ellipsis' | 'break' | 'nowrap';
        size: 'default' | 'small' | 'normal' | 'large' | 'huge';
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
        }) => any;
        onDblclick: (event: {
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
        }) => any;
        onContextmenu: (event: {
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
        }) => any;
        onMousedown: (event: {
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
        }) => any;
        onMouseup: (event: {
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
        }) => any;
        onMouseenter: (event: {
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
        }) => any;
        onMouseleave: (event: {
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
        }) => any;
    }
}
declare namespace nasl.ui {
    class UTextarea extends ViewComponent {
        private focus;
        private blur;
        private clear;
        constructor(options?: Partial<UTextareaOptions>);
    }
    class UTextareaOptions extends ViewComponentOptions {
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
        onBeforeInput: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
        onInput: (event: nasl.core.String) => any;
        onChange: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
        onFocus: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
        onBeforeClear: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
        onClear: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
    }
}
declare namespace nasl.ui {
    class UTimePicker extends ViewComponent {
        constructor(options?: Partial<UTimePickerOptions>);
    }
    class UTimePickerOptions extends ViewComponentOptions {
        minUnit: 'second' | 'minute';
        range: nasl.core.Boolean;
        placeholder: nasl.core.String;
        placeholderRight: nasl.core.String;
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
        preIcon: 'time' | '';
        suffixIcon: 'time' | '';
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
        }) => any;
        onBlur: (event: {
            cancelBubble: nasl.core.Boolean;
            detail: nasl.core.String;
            layerX: nasl.core.Integer;
            layerY: nasl.core.Integer;
            pageX: nasl.core.Integer;
            pageY: nasl.core.Integer;
            which: nasl.core.Integer;
        }) => any;
    }
}
declare namespace nasl.ui {
    class UTimeline<T> extends ViewComponent {
        constructor(options?: Partial<UTimelineOptions<T>>);
    }
    class UTimelineOptions<T> extends ViewComponentOptions {
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
    class UTimelineItemOptions extends ViewComponentOptions {
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
    class UToastSingleOptions extends ViewComponentOptions {
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
        }) => any;
        onClose: (event: {
            text: nasl.core.String;
            color: nasl.core.String;
            duration: nasl.core.Integer;
            timestamp: nasl.core.Integer;
        }) => any;
        slotItem: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UToc extends ViewComponent {
        constructor(options?: Partial<UTocOptions>);
    }
    class UTocOptions extends ViewComponentOptions {
        value: nasl.core.String;
        onBeforeSelect: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
            node: nasl.core.String;
            oldNode: nasl.core.String;
        }) => any;
        onSelect: (event: {
            value: nasl.core.String;
            oldValue: nasl.core.String;
            node: nasl.core.String;
            oldNode: nasl.core.String;
        }) => any;
        slotDefault: () => Array<UTocItem>;
    }
    class UTocItem extends ViewComponent {
        constructor(options?: Partial<UTocItemOptions>);
    }
    class UTocItemOptions extends ViewComponentOptions {
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
        }) => any;
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
    class UTransferOptions<T, V> extends ViewComponentOptions {
        private matchMethod;
        private pageable;
        private pageSize;
        source: nasl.collection.List<T>;
        target: nasl.collection.List<T>;
        textField: (item: T) => any;
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
        }) => any;
        onChange: (event: {
            source: nasl.collection.List<T>;
            target: nasl.collection.List<T>;
            transfer: nasl.collection.List<T>;
            transferValues: nasl.collection.List<V>;
        }) => any;
        slotDefault: () => Array<ViewComponent>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UTreeSelectNew<T, V, M extends nasl.core.Boolean> extends ViewComponent {
        data: UTreeSelectNewOptions<T, V, M>['dataSource'];
        value: UTreeSelectNewOptions<T, V, M>['value'];
        reload(): void;
        constructor(options?: Partial<UTreeSelectNewOptions<T, V, M>>);
    }
    class UTreeSelectNewOptions<T, V, M extends nasl.core.Boolean> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        textField: (item: T) => any;
        valueField: (item: T) => V;
        parentField: (item: T) => any;
        childrenField: (item: T) => nasl.collection.List<any>;
        expandedField: (item: T) => nasl.collection.List<any>;
        value: V;
        checkable: nasl.core.Boolean;
        placeholder: nasl.core.String;
        checkControlled: nasl.core.Boolean;
        disabledField: nasl.core.String;
        clearable: nasl.core.Boolean;
        renderOptimize: nasl.core.Boolean;
        appendTo: 'reference' | 'body';
        disabled: nasl.core.Boolean;
        width: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        height: 'full' | 'huge' | 'large' | 'medium' | 'normal' | 'small' | 'mini';
        onChange: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => any;
        onSelect: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => any;
        onCheck: (event: {
            checked: nasl.core.Boolean;
            oldChecked: nasl.core.Boolean;
            node: T;
            values: nasl.collection.List<V>;
        }) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
        onBeforeClear: (event: {
            value: V;
            oldValue: V;
            values: nasl.collection.List<V>;
            oldValues: nasl.collection.List<V>;
        }) => any;
        onClear: (event: {
            value: V;
            oldValue: V;
            values: nasl.collection.List<V>;
            oldValues: nasl.collection.List<V>;
        }) => any;
        slotDefault: () => Array<UTreeViewNodeNew<T, V>>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UTreeViewNew<T, V, M extends nasl.core.Boolean> extends ViewComponent {
        private walk;
        private find;
        private toggleAll;
        private checkAll;
        reload(): void;
        constructor(options?: Partial<UTreeViewNewOptions<T, V, M>>);
    }
    class UTreeViewNewOptions<T, V, M extends nasl.core.Boolean> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            list: nasl.collection.List<T>;
            total: nasl.core.Integer;
        };
        dataSchema: T;
        textField: (item: T) => any;
        valueField: (item: T) => V;
        childrenField: (item: T) => nasl.collection.List<any>;
        parentField: (item: T) => any;
        value: V;
        checkControlled: nasl.core.Boolean;
        checkable: nasl.core.Boolean;
        accordion: nasl.core.Boolean;
        expandTrigger: 'click' | 'click-expander';
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onBeforeSelect: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => any;
        onInput: (event: V | nasl.collection.List<V>) => any;
        onSelect: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => any;
        onChange: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => any;
        onToggle: (event: {
            expanded: nasl.core.Boolean;
            node: T;
        }) => any;
        onCheck: (event: {
            checked: nasl.core.Boolean;
            oldChecked: nasl.core.Boolean;
            node: T;
            values: nasl.collection.List<V>;
        }) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
        slotDefault: () => Array<UTreeViewNodeNew<T, V>>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class UTreeViewNodeNew<T, V> extends ViewComponent {
        constructor(options?: Partial<UTreeViewNodeNewOptions<T, V>>);
    }
    class UTreeViewNodeNewOptions<T, V> extends ViewComponentOptions {
        text: nasl.core.String;
        private node;
        value: V;
        checked: nasl.core.Boolean;
        expanded: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onBeforeSelect: (event: {
            value: V;
            oldValue: V;
            node: T;
            oldNode: T;
        }) => any;
        onBeforeToggle: (event: {
            expanded: nasl.core.Boolean;
            node: T;
        }) => any;
        onToggle: (event: {
            expanded: nasl.core.Boolean;
            node: T;
        }) => any;
        onCheck: (event: {
            checked: nasl.core.Boolean;
            oldChecked: nasl.core.Boolean;
            node: T;
        }) => any;
        slotDefault: () => Array<UTreeViewNodeNew<T, V>>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UUploader extends ViewComponent {
        select(): void;
        constructor(options?: Partial<UUploaderOptions>);
    }
    class UUploaderOptions extends ViewComponentOptions {
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
            file: nasl.core.String;
        }) => any;
        onProgress: (event: {
            item: File;
            file: nasl.core.String;
        }) => any;
        onCountExceed: (event: {
            files: nasl.collection.List<File>;
            value: {
                url: nasl.core.String;
                name: nasl.core.String;
            };
            count: nasl.core.Integer;
            limit: nasl.core.Integer;
            message: nasl.core.String;
        }) => any;
        onSizeExceed: (event: {
            maxSize: nasl.core.Decimal;
            size: nasl.core.Decimal;
            message: nasl.core.String;
            name: nasl.core.String;
            file: File;
        }) => any;
        onSuccess: (event: {
            item: File;
            file: nasl.core.String;
        }) => any;
        onError: (event: {
            item: File;
            file: nasl.core.String;
        }) => any;
        onRemove: (event: {
            value: {
                url: nasl.core.String;
                name: nasl.core.String;
            };
            item: File;
            index: nasl.core.Integer;
        }) => any;
        slotDefault: () => Array<ViewComponent>;
        slotFileList: () => Array<ViewComponent>;
        slotDragDescription: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class UValidator extends ViewComponent {
        validate(trigger?: nasl.core.String, muted?: nasl.core.Boolean): any;
        constructor(options?: Partial<UValidatorOptions>);
    }
    class UValidatorOptions extends ViewComponentOptions {
        validatingValue: nasl.core.Any;
        validatingProcess: Function;
        private name;
        label: nasl.core.String;
        rules: nasl.core.String | Array<nasl.core.Any>;
        message: nasl.core.String;
        muted: nasl.core.String;
        ignoreValidation: nasl.core.Boolean;
        private ignoreRules;
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
        }) => any;
        onBlurValid: (event: {
            trigger: nasl.core.String;
            valid: nasl.core.Boolean;
            triggerValid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
        onBlurInvalid: (event: {
            trigger: nasl.core.String;
            valid: nasl.core.Boolean;
            triggerValid: nasl.core.Boolean;
            touched: nasl.core.Boolean;
            dirty: nasl.core.Boolean;
            firstError: nasl.core.String;
            value: nasl.core.String;
            oldValue: nasl.core.String;
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
