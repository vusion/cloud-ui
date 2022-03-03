### 两栏-左侧固定

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
        <u-multi-layout>
            <u-multi-layout-item style="width: 200px;left:0;" fixed>
            </u-multi-layout-item>
            <u-multi-layout-item style="margin-left: 200px;">
            </u-multi-layout-item>
        </u-multi-layout>
    </u-multi-layout-item>
</u-multi-layout>
```
### 三栏-常规

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
        <u-multi-layout>
            <u-multi-layout-item style="width: 200px;">
            </u-multi-layout-item>
            <u-multi-layout-item>
            </u-multi-layout-item>
            <u-multi-layout-item style="width: 200px;">
            </u-multi-layout-item>
        </u-multi-layout>
    </u-multi-layout-item>
</u-multi-layout>
```
### 三栏-全部

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
        <u-multi-layout>
            <u-multi-layout-item style="width: 200px;">
            </u-multi-layout-item>
            <u-multi-layout-item>
            </u-multi-layout-item>
            <u-multi-layout-item style="width: 200px;">
            </u-multi-layout-item>
        </u-multi-layout>
    </u-multi-layout-item>
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
</u-multi-layout>
```
### 通栏-纵向

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
    </u-multi-layout-item>
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
</u-multi-layout>
```
### 通栏-横向

``` html
<u-multi-layout>
    <u-multi-layout-item style="width: 200px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
    </u-multi-layout-item>
    <u-multi-layout-item>
    </u-multi-layout-item style="width: 200px;">
</u-multi-layout>
```
### 两栏-右侧固定

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
        <u-multi-layout>
            <u-multi-layout-item style="width: 200px;right:0;" fixed>
            </u-multi-layout-item>
            <u-multi-layout-item style="margin-right: 200px;">
            </u-multi-layout-item>
        </u-multi-layout>
    </u-multi-layout-item>
</u-multi-layout>
```
### 三栏-双左栏

``` html
<u-multi-layout direction="vertical">
    <u-multi-layout-item style="height: 60px;">
    </u-multi-layout-item>
    <u-multi-layout-item>
        <u-multi-layout>
            <u-multi-layout-item style="width: 400px;left:0;" fixed>
                <u-multi-layout>
                    <u-multi-layout-item>
                    </u-multi-layout-item>
                    <u-multi-layout-item>
                    </u-multi-layout-item>
                </u-multi-layout>
            </u-multi-layout-item>
            <u-multi-layout-item style="margin-left: 400px;">
            </u-multi-layout-item>
        </u-multi-layout>
    </u-multi-layout-item>
</u-multi-layout>
```