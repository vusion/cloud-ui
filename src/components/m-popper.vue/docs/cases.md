### a in a

``` html
<u-button>click
    <m-popper>
        <a href="/" target="_blank">popper</a>
    </m-popper>
</u-button>
<u-button><a href="/" target="_blank">abc</a></u-button>
<u-button><div><a href="/" target="_blank">abc</a></div></u-button>
<a><div><a href="/" target="_blank">abc</a></div></a>
```

### 跟随鼠标测试

``` html
<u-linear-layout direction="vertical">
    <u-linear-layout>
        <u-button>
            click
            <m-popper trigger="click" placement="top-start" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            top
            <m-popper trigger="double-click" placement="top-start" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
        <u-button>
            right-click
            <m-popper trigger="right-click" placement="top-start" follow-cursor>
                <u-block>popper</u-block>
            </m-popper>
        </u-button>
    </u-linear-layout>
</u-linear-layout>
```
