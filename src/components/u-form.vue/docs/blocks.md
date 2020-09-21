### 基础表单

``` html
<u-form gap="large">
    <u-form-item label="名称" required>
        <u-input v-model="model.name" size="huge medium" placeholder="由字母、数字和中划线组成"></u-input>
    </u-form-item>
    <u-form-item label="类型" required>
        <u-radios v-model="model.type">
            <u-radio label="A">类型 A</u-radio>
            <u-radio label="B">类型 B</u-radio>
        </u-radios>
    </u-form-item>
    <u-form-item>
        <u-button color="primary" >立即创建</u-button>
    </u-form-item>
</u-form>
```
