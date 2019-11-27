### 相关组件

#### 表单 UForm

用于整体布局，集中设置属性，统一暴露事件和方法。

#### 验证器 UValidator

实现了基础的嵌套验证功能和原子化验证功能，包含提示样式。

#### 表单项 UFormItem

继承自验证器，具备所有验证器的功能。与验证器相比，是为了配合 UForm 布局方便而生。

#### 表单域（表单控件）MField

MField 作为各种表单域（表单控件）的基类，用于触发 UValidator（或 UFormItem）的验证功能。

比如常见的：`<u-input>`、`<u-select>`、`<u-radios>`、`<u-date-picker>`都属于这一类。

#### 复杂动态验证组件

如：`<u-form-table-view>`和`<u-dynamic-cards>`
