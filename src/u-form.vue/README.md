# UForm 表单

具有数据收集、校验和提交功能的表单，包含输入框、选择框、复选框、单选框等元素。

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

<u-h2-tabs router>
    <u-h2-tab title="基础示例" to="/components/u-form/examples"></u-h2-tab>
    <!-- <u-h2-tab title="实用案例" to="/components/u-form/advanced"></u-h2-tab> -->
    <u-h2-tab title="API" to="/components/u-form/api"></u-h2-tab>
</u-h2-tabs>

<router-view></router-view>
