### 基础表单

``` html
<u-form gap="large">
    <u-form-item label="名称" required>
        <u-input size="huge medium" placeholder="由字母、数字和中划线组成"></u-input>
    </u-form-item>
    <u-form-item label="类型" required>
        <u-radios>
            <u-radio label="A">类型 A</u-radio>
            <u-radio label="B">类型 B</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">立即创建</u-button>
    </u-form-item>
</u-form>
```

### 行内表单

``` html
<u-form layout="inline" label-size="auto">
    <u-form-item label="名称">
        <u-input placeholder="请输入名称"></u-input>
    </u-form-item>
    <u-form-item label="状态">
        <u-select>
            <u-select-item>启用</u-select-item>
            <u-select-item>禁用</u-select-item>
        </u-select>
    </u-form-item>
    <u-form-item>
        <u-button color="primary">查询</u-button>
    </u-form-item>
</u-form>
```


### 栅格布局

有多行的表单为了对齐美观，通常与栅格布局搭配使用。

``` html
<u-form layout="inline">
    <u-grid-layout>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column>
                <u-form-item label="状态">
                    <u-select auto-select>
                        <u-select-item>认证中</u-select-item>
                    </u-select>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="备案类型">
                    <u-select auto-select>
                        <u-select-item>全部</u-select-item>
                    </u-select>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="备案号">
                    <u-input></u-input>
                </u-form-item>
            </u-grid-layout-column>
        </u-grid-layout-row>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column>
                <u-form-item label="用户名">
                    <u-input></u-input>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item label="单位名称">
                    <u-input></u-input>
                </u-form-item>
            </u-grid-layout-column>
            <u-grid-layout-column>
                <u-form-item>
                    <u-button color="primary">查询</u-button>
                </u-form-item>
            </u-grid-layout-column>
        </u-grid-layout-row>
    </u-grid-layout>
</u-form>
```

### 分组表单

``` html
<u-form gap="large">
    <u-form-group title="分组1">
        <u-form-item label="名称" required>
            <u-input size="huge medium" placeholder="由字母、数字和中划线组成"></u-input>
        </u-form-item>
        <u-form-item label="类型" required>
            <u-radios>
                <u-radio label="A">类型 A</u-radio>
                <u-radio label="B">类型 B</u-radio>
            </u-radios>
        </u-form-item>
    </u-form-group>
    <u-form-group title="分组2">
        <u-form-item label="信息" required>
            <u-input size="huge medium" placeholder="由字母、数字和中划线组成"></u-input>
        </u-form-item>
        <u-form-item label="详情" required>
            <u-textarea size="normal medium"></u-textarea>
        </u-form-item>
    </u-form-group>
    <u-form-item>
        <u-button color="primary">立即创建</u-button>
    </u-form-item>
</u-form>
```


### 行内分组

``` html
<u-form layout="inline">
    <u-form-group title="常用条件">
        <u-form-item label="名称">
            <u-input placeholder="请输入名称"></u-input>
        </u-form-item>
        <u-form-item label="状态">
            <u-select>
                <u-select-item>启用</u-select-item>
                <u-select-item>禁用</u-select-item>
            </u-select>
        </u-form-item>
    </u-form-group>
    <u-form-group title="更多条件">
        <u-form-item label="名称">
            <u-input placeholder="请输入名称"></u-input>
        </u-form-item>
        <u-form-item label="状态">
            <u-select>
                <u-select-item>启用</u-select-item>
                <u-select-item>禁用</u-select-item>
            </u-select>
        </u-form-item>
    </u-form-group>
</u-form>
```

### 折叠分组

``` html
<u-form layout="inline" collapsible>
    <u-form-group title="常用条件" expanded>
        <u-form-item label="名称">
            <u-input placeholder="请输入名称"></u-input>
        </u-form-item>
        <u-form-item label="状态">
            <u-select>
                <u-select-item>启用</u-select-item>
                <u-select-item>禁用</u-select-item>
            </u-select>
        </u-form-item>
    </u-form-group>
    <u-form-group title="更多条件" expanded>
        <u-form-item label="名称">
            <u-input placeholder="请输入名称"></u-input>
        </u-form-item>
        <u-form-item label="状态">
            <u-select>
                <u-select-item>启用</u-select-item>
                <u-select-item>禁用</u-select-item>
            </u-select>
        </u-form-item>
    </u-form-group>
</u-form>
```