# 视觉方案

## 色彩

### 主色

<u-grid-layout>
    <u-grid-layout-row :repeat="6">
        <u-grid-layout-column>
            <u-color-scheme v-if="$docs.theme === 'dark'" name="$brand-primary" value="#4a89e8"></u-color-scheme>
            <u-color-scheme v-else-if="$docs.theme === 'seagreen'" name="$brand-primary" value="#2cb78e"></u-color-scheme>
            <u-color-scheme v-else name="$brand-primary" value="#67aaf5"></u-color-scheme>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>

### 辅助色

<u-grid-layout>
    <u-grid-layout-row :repeat="6">
        <u-grid-layout-column><u-color-scheme name="$brand-secondary" value="#e1e8ed"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$brand-success" value="#3ad0af"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$brand-warning" value="#ffa136"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$brand-error" value="#ff8a7a"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$brand-disabled" value="#cddae9"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$brand-disabled-light" value="#e7eaef"></u-color-scheme></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>

### 中性色

<u-grid-layout>
    <u-grid-layout-row :repeat="6">
        <u-grid-layout-column><u-color-scheme name="$background-color-light" value="#f7f8fc"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$background-color-base" value="#f2f3f8"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$background-color-dark" value="#ebedf5"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$color-base" value="#565b61"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$border-color-base" value="#dfe4ec"></u-color-scheme></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>

### 模块色

<u-grid-layout>
    <u-grid-layout-row :repeat="6">
        <u-grid-layout-column><u-color-scheme name="$product-ncv" value="#67aaf5"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-ncv-light" value="#5a95d7"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nlb" value="#67c5f5"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nlb-light" value="#5cb1db"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nse" value="#87cee8"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nse-light" value="#77b5cc"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nce" value="#86bbe7"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nce-light" value="#76a4cb"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nms" value="#30c5db"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nms-light" value="#1ba9bf"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-mongo" value="#96dce6"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-mongo-light" value="#84c1ca"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-rds" value="#94cd4e"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-rds-light" value="#81b344"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nqs" value="#86d651"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nqs-light" value="#78c049"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-cdn" value="#8ad199"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-cdn-light" value="#79b886"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-rep" value="#4ec9ab"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-rep-light" value="#45b095"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-net" value="#61dac6"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-net-light" value="#61dac6"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-snat" value="#c69cf6"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-snat-light" value="#b28cdd"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-ncr" value="#9e9cf6"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-ncr-light" value="#8c8adb"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nos" value="#89aaf7"></u-color-scheme></u-grid-layout-column>
        <u-grid-layout-column><u-color-scheme name="$product-nos-light" value="#7b99de"></u-color-scheme></u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
