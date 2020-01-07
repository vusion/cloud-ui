### 基本用法

``` html
<u-radios value="毛巾">
    <u-radio label="水杯">水杯</u-radio>
    <u-radio label="坚果">坚果</u-radio>
    <u-radio label="毛巾">毛巾</u-radio>
    <u-radio label="沙发">沙发</u-radio>
</u-radios>
```

### 只读、禁用、禁用某一项

``` html
<u-linear-layout direction="vertical">
    <u-radios value="毛巾" readonly>
        <u-radio label="水杯">水杯</u-radio>
        <u-radio label="坚果">坚果</u-radio>
        <u-radio label="毛巾">毛巾</u-radio>
        <u-radio label="沙发">沙发</u-radio>
    </u-radios>
    <u-radios value="毛巾" disabled>
        <u-radio label="水杯">水杯</u-radio>
        <u-radio label="坚果">坚果</u-radio>
        <u-radio label="毛巾">毛巾</u-radio>
        <u-radio label="沙发">沙发</u-radio>
    </u-radios>
    <u-radios value="坚果">
        <u-radio label="水杯">水杯</u-radio>
        <u-radio label="坚果">坚果</u-radio>
        <u-radio label="毛巾" disabled>毛巾</u-radio>
        <u-radio label="沙发" disabled>沙发</u-radio>
    </u-radios>
</u-linear-layout>
```
