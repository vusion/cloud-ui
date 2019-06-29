## UInput
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| vertical | String | `'baseline'` | label与value对齐方式`'top'`,`'middle'`,`'bottom'` |
| label | String |  | label显示值 |
| value | String |  | value显示值 |
| labelSize | Number |  | 设置label宽度，不填label为自适应 |
| labelAlign | String | `'right'` | label文字水平对齐方式`'left'`,`'center'`,注意此值仅在设置labelSize后生效 |

### Slots

#### (default)

插入自定义value，一般用于非纯文本的内容展示

#### label

插入自定义label，一般用于label的特殊化处理
