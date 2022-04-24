### 基础表单

``` html
<u-form gap="large"
    ><u-form-item label="名称" required>
        <u-input placeholder="由字母、数字和中划线组成"></u-input>
    </u-form-item
    ><u-form-item label="类型" required>
        <u-radios>
            <u-radio label="A">类型 A</u-radio>
            <u-radio label="B">类型 B</u-radio>
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
    ><u-form-item label="名称">
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
    ><u-form-group title="常用条件" expanded
        ><u-form-item label="名称">
            <u-input placeholder="请输入名称"></u-input>
        </u-form-item
        ><u-form-item label="状态">
            <u-select>
                <u-select-item>启用</u-select-item>
                <u-select-item>禁用</u-select-item>
            </u-select>
        </u-form-item
    ></u-form-group
    ><u-form-group title="更多条件" expanded
        ><u-form-item label="名称">
            <u-input placeholder="请输入名称"></u-input>
        </u-form-item
        ><u-form-item label="状态">
            <u-select>
                <u-select-item>启用</u-select-item>
                <u-select-item>禁用</u-select-item>
            </u-select>
        </u-form-item
    ></u-form-group
></u-form>
```
