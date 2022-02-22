``` html
<div>
    <div :class="$style.componentClassTitle">基础布局</div>
    <u-form gap="large" style="margin-bottom: 40px;">
        <u-form-item label="状态">
            <u-select auto-select>
                <u-select-item>认证中</u-select-item>
            </u-select>
        </u-form-item>
        <u-form-item label="用户名">
            <u-input maxlength="63" placeholder="请输入用户名"></u-input>
        </u-form-item>
        <u-form-item label="联系号码">
            <u-input maxlength="63" placeholder="请输入联系号码"></u-input>
        </u-form-item>
        <u-form-item>
            <u-button color="primary">查询</u-button>
        </u-form-item>
    </u-form>
    <div :class="$style.componentClassTitle">行内布局</div>
    <u-form layout="inline" label-size="auto" style="margin-bottom: 40px;">
        <u-form-item label="状态">
            <u-select auto-select>
                <u-select-item>认证中</u-select-item>
            </u-select>
        </u-form-item>
        <u-form-item label="用户名">
            <u-input maxlength="63" placeholder="请输入用户名"></u-input>
        </u-form-item>
        <u-form-item label="联系号码">
            <u-input maxlength="63" placeholder="请输入联系号码"></u-input>
        </u-form-item>
        <u-form-item>
            <u-button color="primary">查询</u-button>
        </u-form-item>
    </u-form>
    <div :class="$style.componentClassTitle">栅格布局</div>
    <u-form layout="inline" style="margin-bottom: 8px;">
        <u-grid-layout>
            <u-grid-layout-row :repeat="3">
                <u-grid-layout-column>
                    <u-form-item label="状态" style="width: 100%;">
                        <u-select auto-select>
                            <u-select-item>认证中</u-select-item>
                        </u-select>
                    </u-form-item>
                </u-grid-layout-column>
                <u-grid-layout-column>
                    <u-form-item label="备案类型" style="width: 100%;">
                        <u-select auto-select>
                            <u-select-item>全部</u-select-item>
                        </u-select>
                    </u-form-item>
                </u-grid-layout-column>
                <u-grid-layout-column>
                    <u-form-item label="备案号" style="width: 100%;">
                        <u-input placeholder="请输入备案号" maxlength="63"></u-input>
                    </u-form-item>
                </u-grid-layout-column>
            </u-grid-layout-row>
            <u-grid-layout-row :repeat="3">
                <u-grid-layout-column>
                    <u-form-item label="用户名" style="width: 100%;">
                        <u-input placeholder="请输入用户名" maxlength="63"></u-input>
                    </u-form-item>
                </u-grid-layout-column>
                <u-grid-layout-column>
                    <u-form-item label="单位名称" style="width: 100%;">
                        <u-input placeholder="请输入单位名称" maxlength="63"></u-input>
                    </u-form-item>
                </u-grid-layout-column>
                <u-grid-layout-column>
                    <u-form-item style="width: 100%;">
                        <u-button color="primary">查询</u-button>
                    </u-form-item>
                </u-grid-layout-column>
            </u-grid-layout-row>
        </u-grid-layout>
    </u-form>
</div>
```