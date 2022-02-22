``` html
<div>
    <div>基础布局</div>
    <u-form gap="large">
        <u-form-item label="计费方式" required>
            <u-radios value="0">
                <u-radio label="0">包年包月</u-radio>
                <u-radio label="1">按量付费</u-radio>
            </u-radios>
        </u-form-item>
        <u-form-item label="实例名称" required>
            <u-input size="huge" maxlength="63" placeholder="由1-63个小写字母，数字，中划线组成，以字母开头，字母或数字结尾"></u-input>
        </u-form-item>
        <u-form-item label="　" required>
            <u-input size="huge" maxlength="63" placeholder="label为空的必填项"></u-input>
        </u-form-item>
        <u-form-item label="规格">
            <u-capsules value="0101">
                <u-capsule value="0101">1核 1GB</u-capsule>
                <u-capsule value="0102">1核 2GB</u-capsule>
                <u-capsule value="0204">2核 4GB</u-capsule>
                <u-capsule value="0408">4核 8GB</u-capsule>
                <u-capsule value="0816">8核 16GB</u-capsule>
                <u-capsule value="0832">8核 32GB</u-capsule>
                <u-capsule value="1664">16核 64GB</u-capsule>
            </u-capsules>
        </u-form-item>
        <u-form-item label="类型" description="高性能 SSD 云盘不支持快照功能" layout="block">
            <u-capsules value="SSD">
                <u-capsule value="SSD">SSD 云盘</u-capsule>
                <u-capsule value="HSSD">高性能 SSD 云盘</u-capsule>
            </u-capsules>
        </u-form-item>
        <u-form-item label="端口号" required>
            <u-input size="huge medium" maxlength="5" placeholder="1150-65535" value="3306"></u-input>
        </u-form-item>
        <u-form-item label="公网带宽">
            <u-combo-slider :step="10" unit="Mbps"></u-combo-slider>
        </u-form-item>
        <u-form-item label="详情" layout="block">
            <u-textarea size="huge"></u-textarea>
        </u-form-item>
        <u-form-item>
            <u-button color="primary">立即创建</u-button>
        </u-form-item>
    </u-form>
    <div>行内布局</div>
    <u-form layout="inline" label-size="auto">
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
    <div>栅格布局</div>
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
                        <u-input maxlength="63"></u-input>
                    </u-form-item>
                </u-grid-layout-column>
            </u-grid-layout-row>
            <u-grid-layout-row :repeat="3">
                <u-grid-layout-column>
                    <u-form-item label="用户名">
                        <u-input maxlength="63"></u-input>
                    </u-form-item>
                </u-grid-layout-column>
                <u-grid-layout-column>
                    <u-form-item label="单位名称">
                        <u-input maxlength="63"></u-input>
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
</div>
```