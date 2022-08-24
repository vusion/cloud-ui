### 基本用法

``` html { width: 30% }
<u-tree-view-new>
    <u-tree-view-node-new value="1">
        <template slot="text">节点 1</template>
        <u-tree-view-node-new value="1.1">
            <template slot="text">节点 1.1</template>
        </u-tree-view-node-new>
        <u-tree-view-node-new value="1.2">
            <template slot="text">节点 1.2</template>
        </u-tree-view-node-new>
    </u-tree-view-node-new>
    <u-tree-view-node-new value="2">
         <template slot="text">节点 2</template>
    </u-tree-view-node-new>
    <u-tree-view-node-new value="3">
        <template slot="text">节点 3</template>
    </u-tree-view-node-new>        
</u-tree-view-new>
```
