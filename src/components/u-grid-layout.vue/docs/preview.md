``` html
<u-grid-layout gap="normal none">
    <u-grid-layout-row :repeat="6">
        <u-grid-layout-column :span="3">
            <u-block style="opacity: 0.5;">3/6</u-block>
        </u-grid-layout-column>
        <u-grid-layout-column :span="3">
            <u-block style="opacity: 0.8;">3/6</u-block>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row :repeat="24">
        <u-grid-layout-column :span="2">
            <u-block style="opacity: 0.5;">2/24</u-block>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <u-block style="opacity: 0.8;">4/24</u-block>
        </u-grid-layout-column>
        <u-grid-layout-column :span="8">
            <u-block style="opacity: 0.5;">8/24</u-block>
        </u-grid-layout-column>
        <u-grid-layout-column :span="10">
            <u-block style="opacity: 0.8;">10/24</u-block>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row :repeat="3">
        <u-grid-layout-column :span="1">
            <u-block style="opacity: 0.5;">1/3</u-block>
        </u-grid-layout-column>
        <u-grid-layout-column :span="2">
            <u-block style="opacity: 0.8;">2/3</u-block>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```