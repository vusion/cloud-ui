<!-- 该 README.md 根据 api.yaml 和 docs/*.md 自动生成，为了方便在 GitHub 和 NPM 上查阅。如需修改，请查看源文件 -->

# LRoot 界面根节点

- [示例](#示例)

- [API]()
    - [Slots](#slots)

默认布局的根节点。

## 示例


```html
<div style="position: relative; z-index: 1; height: 500px; overflow: auto;">
  <l-root text="从“物料”中添加布局或组件">
	</l-root>
</div>
```


```html
<div style="position: relative; z-index: 1; height: 500px; overflow: auto;">
  <l-root active text="从“物料”中添加布局或组件">
	</l-root>
</div>
```

```html
<div style="position: relative; z-index: 1; height: 500px; overflow: auto;">
  <l-root text="从“物料”中添加布局或组件">
		  <u-button text="确定"></u-button>
	</l-root>
</div>
```
## API
### Slots

#### (default)

主内容区。

