### 基础表单

``` html
<u-form
    ><u-form-item required>
        <template #label><u-text text="名称"></u-text></template>
        <u-input placeholder="由字母、数字和中划线组成"></u-input>
    </u-form-item
    ><u-form-item required>
        <template #label><u-text text="类型"></u-text></template>
        <u-radios>
            <u-radio label="A"><template #item><u-text text="类型 A"></u-text></template></u-radio>
            <u-radio label="B"><template #item><u-text text="类型 B"></u-text></template></u-radio>
        </u-radios>
    </u-form-item
    ><u-form-item>
        <u-button color="primary">立即创建</u-button>
    </u-form-item
></u-form>
```

### 行内表单

``` html
<u-form layout="inline" label-size="auto"
    ><u-form-item>
        <template #label><u-text text="名称"></u-text></template>
        <u-input placeholder="请输入名称"></u-input>
    </u-form-item
    ><u-form-item>
        <u-button color="primary">查询</u-button>
    </u-form-item
></u-form>
```

### 折叠分组

``` html
<u-form layout="inline" collapsible
    ><u-form-group expanded
        ><template #title><u-text text="常用条件"></u-text></template><u-form-item>
            <template #label><u-text text="名称"></u-text></template>
            <u-input placeholder="请输入名称"></u-input>
        </u-form-item
        ><u-form-item>
            <template #label><u-text text="状态"></u-text></template>
            <u-select>
                <u-select-item><u-text text="启用"></u-text></u-select-item>
                <u-select-item><u-text text="禁用"></u-text></u-select-item>
            </u-select>
        </u-form-item
    ></u-form-group
    ><u-form-group expanded
        ><template #title><u-text text="更多条件"></u-text></template><u-form-item>
            <template #label><u-text text="名称"></u-text></template>
            <u-input placeholder="请输入名称"></u-input>
        </u-form-item
        ><u-form-item>
            <template #label><u-text text="状态"></u-text></template>
            <u-select>
                <u-select-item><u-text text="启用"></u-text></u-select-item>
                <u-select-item><u-text text="禁用"></u-text></u-select-item>
            </u-select>
        </u-form-item
    ></u-form-group
></u-form>
```
