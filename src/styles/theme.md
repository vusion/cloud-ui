# 主题方案

## 色彩

### 主色

<u-grid-layout>
    <u-grid-layout-row :repeat="3">
        <u-grid-layout-column>
            <u-theme-colors>
                <u-theme-color name="brand-primary-lightest" :color="$theme['--brand-primary-lightest']" desc="浅色背景"></u-theme-color>
                <u-theme-color name="brand-primary-lighter" :color="$theme['--brand-primary-lighter']"></u-theme-color>
                <u-theme-color name="brand-primary-light" :color="$theme['--brand-primary-light']" inverse desc="hover"></u-theme-color>
                <u-theme-color name="brand-primary" :color="$theme['--brand-primary']" inverse desc="主色"></u-theme-color>
                <u-theme-color name="brand-primary-dark" :color="$theme['--brand-primary-dark']" inverse desc="active"></u-theme-color>
                <u-theme-color name="brand-primary-darker" :color="$theme['--brand-primary-darker']" inverse></u-theme-color>
                <u-theme-color name="brand-primary-darkest" :color="$theme['--brand-primary-darkest']" inverse desc="深色文字"></u-theme-color>
            </u-theme-colors>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>

### 辅助色

<u-grid-layout>
    <u-grid-layout-row :repeat="3">
        <u-grid-layout-column>
            <u-theme-colors>
                <u-theme-color name="brand-success-lightest" :color="$theme['--brand-success-lightest']" desc="浅色背景"></u-theme-color>
                <u-theme-color name="brand-success-lighter" :color="$theme['--brand-success-lighter']"></u-theme-color>
                <u-theme-color name="brand-success-light" :color="$theme['--brand-success-light']" inverse desc="hover"></u-theme-color>
                <u-theme-color name="brand-success" :color="$theme['--brand-success']" inverse desc="成功"></u-theme-color>
                <u-theme-color name="brand-success-dark" :color="$theme['--brand-success-dark']" inverse desc="active"></u-theme-color>
                <u-theme-color name="brand-success-darker" :color="$theme['--brand-success-darker']" inverse></u-theme-color>
                <u-theme-color name="brand-success-darkest" :color="$theme['--brand-success-darkest']" inverse desc="深色文字"></u-theme-color>
            </u-theme-colors>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-theme-colors>
                <u-theme-color name="brand-normal-lightest" :color="$theme['--brand-normal-lightest']" desc="浅色背景"></u-theme-color>
                <u-theme-color name="brand-normal-lighter" :color="$theme['--brand-normal-lighter']"></u-theme-color>
                <u-theme-color name="brand-normal-light" :color="$theme['--brand-normal-light']" inverse desc="hover"></u-theme-color>
                <u-theme-color name="brand-normal" :color="$theme['--brand-normal']" inverse desc="正常"></u-theme-color>
                <u-theme-color name="brand-normal-dark" :color="$theme['--brand-normal-dark']" inverse desc="active"></u-theme-color>
                <u-theme-color name="brand-normal-darker" :color="$theme['--brand-normal-darker']" inverse></u-theme-color>
                <u-theme-color name="brand-normal-darkest" :color="$theme['--brand-normal-darkest']" inverse desc="深色文字"></u-theme-color>
            </u-theme-colors>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-theme-colors>
                <u-theme-color name="brand-problem-lightest" :color="$theme['--brand-problem-lightest']" desc="浅色背景"></u-theme-color>
                <u-theme-color name="brand-problem-lighter" :color="$theme['--brand-problem-lighter']"></u-theme-color>
                <u-theme-color name="brand-problem-light" :color="$theme['--brand-problem-light']" inverse desc="hover"></u-theme-color>
                <u-theme-color name="brand-problem" :color="$theme['--brand-problem']" inverse desc="异常"></u-theme-color>
                <u-theme-color name="brand-problem-dark" :color="$theme['--brand-problem-dark']" inverse desc="active"></u-theme-color>
                <u-theme-color name="brand-problem-darker" :color="$theme['--brand-problem-darker']" inverse></u-theme-color>
                <u-theme-color name="brand-problem-darkest" :color="$theme['--brand-problem-darkest']" inverse desc="深色文字"></u-theme-color>
            </u-theme-colors>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-theme-colors>
                <u-theme-color name="brand-warning-lightest" :color="$theme['--brand-warning-lightest']" desc="浅色背景"></u-theme-color>
                <u-theme-color name="brand-warning-lighter" :color="$theme['--brand-warning-lighter']"></u-theme-color>
                <u-theme-color name="brand-warning-light" :color="$theme['--brand-warning-light']" inverse desc="hover"></u-theme-color>
                <u-theme-color name="brand-warning" :color="$theme['--brand-warning']" inverse desc="警告"></u-theme-color>
                <u-theme-color name="brand-warning-dark" :color="$theme['--brand-warning-dark']" inverse desc="active"></u-theme-color>
                <u-theme-color name="brand-warning-darker" :color="$theme['--brand-warning-darker']" inverse></u-theme-color>
                <u-theme-color name="brand-warning-darkest" :color="$theme['--brand-warning-darkest']" inverse desc="深色文字"></u-theme-color>
            </u-theme-colors>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-theme-colors>
                <u-theme-color name="brand-error-lightest" :color="$theme['--brand-error-lightest']" desc="浅色背景"></u-theme-color>
                <u-theme-color name="brand-error-lighter" :color="$theme['--brand-error-lighter']"></u-theme-color>
                <u-theme-color name="brand-error-light" :color="$theme['--brand-error-light']" inverse desc="hover"></u-theme-color>
                <u-theme-color name="brand-error" :color="$theme['--brand-error']" inverse desc="错误/危险"></u-theme-color>
                <u-theme-color name="brand-error-dark" :color="$theme['--brand-error-dark']" inverse desc="active"></u-theme-color>
                <u-theme-color name="brand-error-darker" :color="$theme['--brand-error-darker']" inverse></u-theme-color>
                <u-theme-color name="brand-error-darkest" :color="$theme['--brand-error-darkest']" inverse desc="深色文字"></u-theme-color>
            </u-theme-colors>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-theme-colors>
                <u-theme-color name="brand-assist-lightest" :color="$theme['--brand-assist-lightest']" desc="浅色背景"></u-theme-color>
                <u-theme-color name="brand-assist-lighter" :color="$theme['--brand-assist-lighter']"></u-theme-color>
                <u-theme-color name="brand-assist-light" :color="$theme['--brand-assist-light']" inverse desc="hover"></u-theme-color>
                <u-theme-color name="brand-assist" :color="$theme['--brand-assist']" inverse desc="辅助"></u-theme-color>
                <u-theme-color name="brand-assist-dark" :color="$theme['--brand-assist-dark']" inverse desc="active"></u-theme-color>
                <u-theme-color name="brand-assist-darker" :color="$theme['--brand-assist-darker']" inverse></u-theme-color>
                <u-theme-color name="brand-assist-darkest" :color="$theme['--brand-assist-darkest']" inverse desc="深色文字"></u-theme-color>
            </u-theme-colors>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>

### 中性色

<u-grid-layout>
    <u-grid-layout-row :repeat="3">
        <u-grid-layout-column>
            <u-theme-colors>
                <u-theme-color name="background-color-lighter" :color="$theme['--background-color-lighter']" desc="选择项 hover 背景"></u-theme-color>
                <u-theme-color name="background-color-light" :color="$theme['--background-color-light']" desc="表格标题栏等背景"></u-theme-color>
                <u-theme-color name="background-color-base" :color="$theme['--background-color-base']" desc="标签、薯条等背景"></u-theme-color>
                <u-theme-color name="background-color-dark" :color="$theme['--background-color-dark']"></u-theme-color>
            </u-theme-colors>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-theme-colors>
                <u-theme-color name="border-color-base" :color="$theme['--border-color-base']" desc="输入框等边框"></u-theme-color>
                <u-theme-color name="brand-disabled" :color="$theme['--brand-disabled']" desc="禁用输入框、选择框的背景"></u-theme-color>
                <u-theme-color name="brand-disabled-dark" :color="$theme['--brand-disabled-dark']" desc="禁用文本的颜色"></u-theme-color>
                <u-theme-color name="brand-disabled-darker" :color="$theme['--brand-disabled-darker']"></u-theme-color>
            </u-theme-colors>
        </u-grid-layout-column>
        <u-grid-layout-column>
            <u-theme-colors>
                <u-theme-color name="color-lighter" :color="$theme['--color-lighter']" inverse desc="占位符文字"></u-theme-color>
                <u-theme-color name="color-light" :color="$theme['--color-light']" inverse desc="次级文字"></u-theme-color>
                <u-theme-color name="color-base" :color="$theme['--color-base']" inverse desc="默认文字"></u-theme-color>
                <u-theme-color name="color-dark" :color="$theme['--color-dark']" inverse></u-theme-color>
            </u-theme-colors>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
