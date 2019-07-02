## UProgress
### Props/Attrs

| Prop/Attr     | Type     | Default                  | Description                                                  |
| ------------- | -------- | ------------------------ | ------------------------------------------------------------ |
| format        | Function | percent => percent + '%' | 内容部分的模板回调函数                                       |
| size          | String   | 'normal'                 | 整体大小                                                     |
| type          | String   | 'circle'                 | 基于使用情景的类型【'circle'，'dashboard'】                  |
| percent       | Number   | 0                        | 进度百分比                                                   |
| position      | String   | 'bottom'                 | 初始点方向（同时也是圆形开口的方向）                         |
| strokeLinecap | String   | 'round'                  | 路径两端的形状(和path的stroke-linecap的属性值对应)【'butt', 'round', 'square'】 |
| trailColor    | String   | '#ddd'                   | 底部轨迹颜色                                                 |
| trailWidth    | Number   | 4                        | 底部轨迹宽度【1- 50】                                        |
| strokeColor   | String   | '#67aaf5'                | 进度轨迹颜色                                                 |
| strokeWidth   | Number   | 4                        | 进度轨迹宽度【1- 50】                                        |
| gapDegrees    | Number   | 0                        | 缺口角度大小【0 - 360】                                      |
| segments      | Array    | []                       | 分隔区间(在type === 'dashboard'时指定才有效)                 |



### Slots

#### (default)

插入自定义内容展示，一般用于非纯文本的内容展示